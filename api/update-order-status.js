require('dotenv').config({ path: '.env.local' });
const { supabaseRequest } = require('./_lib/supabase');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token || token !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({ error: 'Invalid admin token' });
    }

    const { order_id, new_status } = req.body;
    if (!order_id || !new_status) {
        return res.status(400).json({ error: 'Missing order_id or new_status' });
    }

    const allowedStatuses = ['pending', 'confirmed', 'packed', 'in transit', 'delivered', 'cancelled'];
    if (!allowedStatuses.includes(new_status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const data = await supabaseRequest(
            `orders?order_id=eq.${order_id}`,
            {
                method: 'PATCH',
                body: { order_status: new_status }
            }
        );

        return res.status(200).json({ ok: true, message: 'Status updated successfully' });
    } catch (e) {
        return res.status(500).json({ error: e.message || 'Failed to update order status' });
    }
};
