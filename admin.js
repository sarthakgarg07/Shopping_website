const adminLoginScreen = document.getElementById("adminLoginScreen");
const standaloneLoginForm = document.getElementById("standaloneLoginForm");
const adminOrdersTbody = document.getElementById("adminOrdersTbody");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const tabs = document.querySelectorAll(".nav-item[data-tab]");
const toast = document.getElementById("toast");

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
});

const statuses = ['pending', 'confirmed', 'packed', 'in transit', 'delivered', 'cancelled'];

// Check Local Storage on load
const savedToken = localStorage.getItem("adminToken");
if (savedToken) {
    adminLoginScreen.style.display = "none";
    fetchOrders(savedToken);
} else {
    adminLoginScreen.style.display = "flex";
}

standaloneLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(standaloneLoginForm);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
        const res = await fetch("/api/admin-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok && data.token) {
            localStorage.setItem("adminToken", data.token);
            adminLoginScreen.style.display = "none";
            showToast("Access granted");
            fetchOrders(data.token);
        } else {
            showToast("Invalid credentials");
        }
    } catch (err) {
        showToast("Login error");
    }
});

adminLogoutBtn.addEventListener("click", () => {
    localStorage.removeItem("adminToken");
    location.reload();
});

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(t => t.classList.remove("active"));
        e.target.classList.add("active");

        document.getElementById("ordersSection").style.display =
            e.target.dataset.tab === "orders" ? "block" : "none";

        document.getElementById("productsSection").style.display =
            e.target.dataset.tab === "products" ? "block" : "none";
    });
});

window.updateOrderStatus = async function (selectElement, orderId) {
    const token = localStorage.getItem("adminToken");
    const newStatus = selectElement.value;
    selectElement.disabled = true;
    showToast("Updating status...");

    try {
        const res = await fetch("/api/update-order-status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ order_id: orderId, new_status: newStatus })
        });
        const data = await res.json();
        if (res.ok) {
            showToast("Order status updated!");
        } else {
            showToast(data.error || "Failed to update status");
        }
    } catch (err) {
        showToast("Network error");
    } finally {
        selectElement.disabled = false;
    }
};

async function fetchOrders(tokenInput) {
    const token = tokenInput || localStorage.getItem("adminToken");
    if (!token) return;

    adminOrdersTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Fetching live data...</td></tr>`;

    try {
        const r = await fetch("/api/admin-orders", {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await r.json();

        if (r.status === 401) {
            localStorage.removeItem("adminToken");
            location.reload();
            return;
        }

        if (!data.orders || data.orders.length === 0) {
            adminOrdersTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No orders found yet.</td></tr>`;
            return;
        }

        adminOrdersTbody.innerHTML = data.orders.map(order => {
            const statusOptions = statuses.map(st =>
                `<option value="${st}" ${order.order_status === st ? 'selected' : ''}>${st.toUpperCase()}</option>`
            ).join("");

            const badgeColor = order.payment_status === 'paid' ? 'bg-success' : 'bg-warning';

            let itemsListHtml = "No items recorded";
            try {
                const items = typeof order.items === 'string' ? JSON.parse(order.items) : order.items;
                if (Array.isArray(items)) {
                    itemsListHtml = items.map(i => `<div style="font-size:0.85rem; color: var(--gray);">&bull; ${i.qty}x ${i.name}</div>`).join("");
                }
            } catch (e) { }

            return `
        <tr>
          <td>
            <strong>#${order.order_id}</strong><br>
            <span style="color:var(--gray); font-size:0.8rem">${order.payment_status === 'paid' ? 'UPI' : 'N/A'}</span>
          </td>
          <td style="color: var(--gray); font-size:0.9rem;">
            ${new Date(order.created_at).toLocaleString('en-IN')}
          </td>
          <td>
            <div style="font-weight: 600;">${order.customer_name || 'Anonymous'}</div>
            <div style="color:var(--gray); font-size:0.85rem;">📧 ${order.customer_email || 'N/A'}</div>
            <div style="color:var(--gray); font-size:0.85rem;">📞 ${order.customer_phone || 'N/A'}</div>
            <div style="margin-top:8px; font-size:0.85rem; background:var(--pink-50); padding: 8px; border-radius: 6px;">
              <strong>Address:</strong> ${order.customer_address || 'Not provided'}<br>
              <strong>Notes:</strong> ${order.customer_notes || 'None'}
            </div>
          </td>
          <td>
            <strong style="font-size: 1.1rem">${formatter.format(order.amount_total)}</strong><br>
            <span style="font-size:0.8rem; background: #e0f2f1; color: #00897b; padding: 2px 6px; border-radius: 4px; display:inline-block; margin-bottom: 6px;">
              Payment: ${order.payment_status === 'paid' ? 'PAID' : 'PENDING'}
            </span>
            <div style="margin-top: 4px;">
              ${itemsListHtml}
            </div>
          </td>
          <td>
            <select 
                style="padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); font-family: inherit; font-size: 0.85rem; background: var(--surface); cursor:pointer; width: 100%;"
                onchange="updateOrderStatus(this, '${order.order_id}')"
              >
                ${statusOptions}
            </select>
          </td>
        </tr>
      `;
        }).join("");

    } catch (err) {
        adminOrdersTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:red;">Connection failed.</td></tr>`;
    }
}
