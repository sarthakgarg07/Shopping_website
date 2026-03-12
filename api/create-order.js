const crypto = require("crypto");
const { hasConfig, supabaseRequest } = require("./_lib/supabase");
const { products } = require("./_lib/products");
const Razorpay = require("razorpay");

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

    let calculatedSubtotal = 0;
    for (const item of items) {
      const product = products.find(p => p.id === item.id);
      if (!product) {
        return json(res, 400, { error: `Invalid product in cart: ${item.id}` });
      }
      calculatedSubtotal += product.price * (item.qty || 1);
    }

    if (calculatedSubtotal <= 0) {
      return json(res, 400, { error: "Invalid order amount." });
    }

    const FREE_SHIPPING_THRESHOLD = 999;
    const SHIPPING_FEE = 99;
    const calculatedShipping = calculatedSubtotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;

    const orderId = createOrderId();
    const finalAmount = calculatedSubtotal + calculatedShipping;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const razorpayOrder = await razorpay.orders.create({
      amount: finalAmount * 100, // amount in paisa
      currency: "INR",
      receipt: orderId,
    });

    const orderRow = {
      order_id: orderId,
      customer_email: customer.email || null,
      customer_name: customer.name,
      customer_phone: customer.phone,
      shipping_address: customer.address,
      notes: body.notes || null,
      items_json: items,
      amount_subtotal: calculatedSubtotal,
      amount_shipping: Number(amount.shipping || 0),
      amount_total: finalAmount,
      currency: amount.currency || "INR",
      payment_status: "pending",
      order_status: "created",
      source: "website",
      gateway_order_id: razorpayOrder.id,
    };

    await supabaseRequest("orders", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(orderRow),
    });

    return json(res, 200, {
      ok: true,
      orderId,
      razorpayOrderId: razorpayOrder.id,
      amount: finalAmount,
      currency: "INR",
      keyId: process.env.RAZORPAY_KEY_ID,
      message: "Order created successfully.",
    });
  } catch (error) {
    return json(res, 500, { error: error.message || "Unable to create order." });
  }
};
