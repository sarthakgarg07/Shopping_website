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

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return json(res, 400, { error: "Missing required payment details." });
        }

        const secret = process.env.RAZORPAY_KEY_SECRET;

        if (!secret) {
            return json(res, 500, { error: "Razorpay secret not configured." });
        }

        const expectedSignature = crypto
            .createHmac("sha256", secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            // Signature is valid. Update the order in Supabase.
            await supabaseRequest(`orders?gateway_order_id=eq.${encodeURIComponent(razorpay_order_id)}`, {
                method: "PATCH",
                headers: {
                    Prefer: "return=minimal",
                },
                body: JSON.stringify({
                    payment_status: "paid",
                    order_status: "confirmed",
                    gateway_txn_ref: razorpay_payment_id,
                }),
            });

            return json(res, 200, { ok: true, message: "Payment verified successfully" });
        } else {
            return json(res, 400, { error: "Invalid payment signature" });
        }
    } catch (error) {
        return json(res, 500, { error: error.message || "Unable to verify payment." });
    }
};
