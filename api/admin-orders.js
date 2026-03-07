require('dotenv').config({ path: '.env.local' });
const { supabaseRequest } = require('./_lib/supabase');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token || token !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({ error: 'Invalid admin token' });
    }

    try {
        const data = await supabaseRequest('orders?order=created_at.desc', { method: 'GET' });
        return res.status(200).json({ ok: true, orders: data });
    } catch (e) {
        return res.status(500).json({ error: e.message || 'Failed to fetch orders' });
    }
};
