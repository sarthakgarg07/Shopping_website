const crypto = require("crypto");
const { hasConfig, supabaseRequest } = require("./_lib/supabase");

const ORDER_PREFIX = "IVO";

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

const createOrderId = () => {
  const short = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `${ORDER_PREFIX}-${Date.now()}-${short}`;
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  if (!hasConfig()) {
    return json(res, 500, { error: "Server is missing Supabase configuration." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const customer = body.customer || {};
    const items = Array.isArray(body.items) ? body.items : [];
    const amount = body.amount || {};

    if (!customer.name || !customer.phone || !customer.address) {
      return json(res, 400, { error: "Missing customer details." });
    }
    if (!items.length) {
      return json(res, 400, { error: "Cart is empty." });
    }
    if (!amount.total || Number(amount.total) <= 0) {
      return json(res, 400, { error: "Invalid order amount." });
    }

    const orderId = createOrderId();
    const orderRow = {
      order_id: orderId,
      customer_email: customer.email || null,
      customer_name: customer.name,
      customer_phone: customer.phone,
      shipping_address: customer.address,
      notes: body.notes || null,
      items_json: items,
      amount_subtotal: Number(amount.subtotal || 0),
      amount_shipping: Number(amount.shipping || 0),
      amount_total: Number(amount.total),
      currency: amount.currency || "INR",
      payment_status: "pending",
      order_status: "created",
      source: "website",
    };

    await supabaseRequest("orders", {
      method: "POST",
      headers: {
        Prefer: "return=minimal",
      },
      body: JSON.stringify(orderRow),
    });

    const manualUpiId = process.env.UPI_ID || "";
    const paymentUrl = manualUpiId
      ? `upi://pay?pa=${encodeURIComponent(manualUpiId)}&pn=${encodeURIComponent(
          "ivoo.re by silky"
        )}&am=${encodeURIComponent(String(amount.total))}&cu=INR&tn=${encodeURIComponent(orderId)}`
      : null;

    return json(res, 200, {
      ok: true,
      orderId,
      paymentUrl,
      message: "Order created. Awaiting payment confirmation.",
    });
  } catch (error) {
    return json(res, 500, { error: error.message || "Unable to create order." });
  }
};
