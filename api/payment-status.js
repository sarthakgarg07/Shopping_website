const { hasConfig, supabaseRequest } = require("./_lib/supabase");

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  if (!hasConfig()) {
    return json(res, 500, { error: "Server is missing Supabase configuration." });
  }

  const adminKey = req.headers["x-admin-key"];
  if (!adminKey || adminKey !== process.env.ADMIN_API_KEY) {
    return json(res, 401, { error: "Unauthorized" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const orderId = body.orderId;
    const paymentStatus = body.paymentStatus;
    const orderStatus = body.orderStatus || "confirmed";
    const txnRef = body.txnRef || null;

    if (!orderId || !paymentStatus) {
      return json(res, 400, { error: "orderId and paymentStatus are required." });
    }

    await supabaseRequest(`orders?order_id=eq.${encodeURIComponent(orderId)}`, {
      method: "PATCH",
      headers: {
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        payment_status: paymentStatus,
        order_status: orderStatus,
        gateway_txn_ref: txnRef,
      }),
    });

    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, { error: error.message || "Unable to update order." });
  }
};
