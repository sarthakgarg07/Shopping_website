const { hasConfig, supabaseRequest } = require("./_lib/supabase");

const json = (res, status, body) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
};

module.exports = async (req, res) => {
    if (req.method !== "GET") {
        return json(res, 405, { error: "Method not allowed" });
    }

    if (!hasConfig()) {
        return json(res, 500, { error: "Server is missing Supabase configuration." });
    }

    const email = req.url.split('?email=')[1];

    if (!email) {
        return json(res, 400, { error: "Missing email address." });
    }

    try {
        const data = await supabaseRequest(
            `orders?customer_email=eq.${encodeURIComponent(decodeURIComponent(email))}&order=created_at.desc`,
            {
                method: "GET"
            }
        );

        if (!data) {
            return json(res, 404, { error: "No orders found." });
        }

        return json(res, 200, { ok: true, orders: data });

    } catch (error) {
        return json(res, 500, { error: error.message || "Unable to fetch orders." });
    }
};
