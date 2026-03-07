require('dotenv').config({ path: '.env.local' });
const { supabaseRequest } = require('./_lib/supabase');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing credentials' });
    }
    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        // Return a simple token for subsequent admin requests
        return res.status(200).json({ ok: true, token: process.env.ADMIN_TOKEN });
    }
    return res.status(401).json({ error: 'Invalid admin credentials' });
};
