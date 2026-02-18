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

  const adminKey = req.headers["x-admin-key"];
  if (!adminKey || adminKey !== process.env.ADMIN_API_KEY) {
    return json(res, 401, { error: "Unauthorized" });
  }

  try {
    const data = await supabaseRequest(
      "orders?select=order_id,customer_name,customer_phone,amount_total,payment_status,order_status,created_at&order=created_at.desc&limit=100",
      {
        method: "GET",
      }
    );
    return json(res, 200, { orders: data || [] });
  } catch (error) {
    return json(res, 500, { error: error.message || "Unable to fetch orders." });
  }
};
