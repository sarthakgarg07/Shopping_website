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

  const webhookToken = req.headers["x-webhook-token"];
  if (!webhookToken || webhookToken !== process.env.PAYMENT_WEBHOOK_TOKEN) {
    return json(res, 401, { error: "Unauthorized webhook" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const orderId = body.orderId || body.ORDERID;
    const txnRef = body.txnRef || body.TXNID || null;
    const statusRaw = String(body.status || body.STATUS || "").toLowerCase();

    if (!orderId) {
      return json(res, 400, { error: "Missing orderId" });
    }

    const paymentStatus = statusRaw === "txn_success" || statusRaw === "success" ? "paid" : "failed";
    const orderStatus = paymentStatus === "paid" ? "confirmed" : "payment_failed";

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
    return json(res, 500, { error: error.message || "Unable to process webhook." });
  }
};
