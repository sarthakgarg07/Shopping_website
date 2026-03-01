const crypto = require("crypto");
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

    const webhookSignature = req.headers["x-razorpay-signature"];
    const webhookSecret = process.env.PAYMENT_WEBHOOK_TOKEN; // configured razorpay webhook secret

    if (!webhookSignature || !webhookSecret) {
        return json(res, 401, { error: "Unauthorized webhook" });
    }

    // To properly verify signature, we need raw body. If parsed, re-stringify.
    // Note: For a robust system, configure this file to receive raw body.
    const rawBody = typeof req.body === "string" ? req.body : JSON.stringify(req.body);

    const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

    if (expectedSignature !== webhookSignature) {
        return json(res, 400, { error: "Invalid signature" });
    }

    try {
        const event = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        if (event.event === "payment.captured" || event.event === "order.paid") {
            const payment = event.payload.payment ? event.payload.payment.entity : null;
            let orderId = event.payload.order?.entity?.id || payment?.order_id; // Try to extract Razorpay order ID
            let txnRef = payment ? payment.id : null;

            if (!orderId) {
                return json(res, 400, { error: "Missing orderId in payload" });
            }

            await supabaseRequest(`orders?gateway_order_id=eq.${encodeURIComponent(orderId)}`, {
                method: "PATCH",
                headers: {
                    Prefer: "return=minimal",
                },
                body: JSON.stringify({
                    payment_status: "paid",
                    order_status: "confirmed",
                    gateway_txn_ref: txnRef,
                }),
            });
        }

        return json(res, 200, { ok: true });
    } catch (error) {
        return json(res, 500, { error: error.message || "Unable to process webhook." });
    }
};
