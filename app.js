const products = [
  {
    id: "sig-01",
    name: "Black Bracelet - Anti Tarnish",
    price: 100,
    description: "Minimal everyday bracelet with anti-tarnish finish.",
    image: "Website_Images/Black bracelet - Anti Tarnish.png",
  },
  {
    id: "sig-02",
    name: "Heart Pendant - Anti Tarnish",
    price: 100,
    description: "Sweet heart pendant with durable anti-tarnish polish.",
    image: "Website_Images/Heart pendant- Anti tarnish.png",
  },
  {
    id: "sig-03",
    name: "Name Engraved Keychain",
    price: 100,
    description: "Custom engraved keychain, both sides.",
    image: "Website_Images/Name engraved keychain, both sides.png",
  },
  {
    id: "sig-04",
    name: "Tulip Pendant - Anti Tarnish",
    price: 100,
    description: "Elegant tulip pendant with long-lasting shine.",
    image: "Website_Images/Tulip pendant - Anti Tarnish.png",
  },
];

const state = {
  cart: JSON.parse(localStorage.getItem("ivooCart") || "[]"),
  user: JSON.parse(localStorage.getItem("ivooUser") || "null"),
};

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartShipping = document.getElementById("cartShipping");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

const authModal = document.getElementById("authModal");
const cartModal = document.getElementById("cartModal");
const paymentModal = document.getElementById("paymentModal");

const loginTrigger = document.getElementById("loginTrigger");
const logoutTrigger = document.getElementById("logoutTrigger");
const cartTrigger = document.getElementById("cartTrigger");
const checkoutTrigger = document.getElementById("checkoutTrigger");

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const saveState = () => {
  localStorage.setItem("ivooCart", JSON.stringify(state.cart));
  localStorage.setItem("ivooUser", JSON.stringify(state.user));
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
};

const setModal = (modal, active) => {
  modal.classList.toggle("active", active);
  modal.setAttribute("aria-hidden", String(!active));
};

const renderProducts = () => {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img
          src="${encodeURI(product.image)}"
          alt="${product.name}"
          onload="this.nextElementSibling && (this.nextElementSibling.style.display='none')"
          onerror="this.style.display='none'"
        />
        <span>${product.name.split(" ")[0]}</span>
      </div>
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="price-row">
        <span class="price">${formatter.format(product.price)}</span>
        <button class="add-btn" data-id="${product.id}">Add to cart</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
};

const updateCartCount = () => {
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = total;
};

const renderCart = () => {
  cartItems.innerHTML = "";
  if (state.cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }
  state.cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <h4>${product.name}</h4>
        <p>${formatter.format(product.price)} · ${item.qty} item(s)</p>
      </div>
      <div class="qty-controls">
        <button data-action="dec" data-id="${item.id}">-</button>
        <span>${item.qty}</span>
        <button data-action="inc" data-id="${item.id}">+</button>
      </div>
    `;
    cartItems.appendChild(row);
  });

  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  cartSubtotal.textContent = formatter.format(subtotal);
  cartShipping.textContent = formatter.format(shipping);
  cartTotal.textContent = formatter.format(total);
};

const addToCart = (id) => {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) {
    item.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  saveState();
  updateCartCount();
  showToast("Added to cart.");
};

const updateAuthUI = () => {
  const loggedIn = Boolean(state.user);
  loginTrigger.style.display = loggedIn ? "none" : "inline-flex";
  logoutTrigger.style.display = loggedIn ? "inline-flex" : "none";
};

const requireLogin = () => {
  if (!state.user) {
    setModal(authModal, true);
    return false;
  }
  return true;
};

productGrid.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  const id = target.dataset.id;
  if (!id) return;
  if (!requireLogin()) return;
  addToCart(id);
});

cartTrigger.addEventListener("click", () => {
  if (!requireLogin()) return;
  renderCart();
  setModal(cartModal, true);
});

checkoutTrigger.addEventListener("click", () => {
  if (!requireLogin()) return;
  setModal(cartModal, false);
  setModal(paymentModal, true);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = button.dataset.id;
  const action = button.dataset.action;
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  if (action === "inc") {
    item.qty += 1;
  }
  if (action === "dec") {
    item.qty -= 1;
  }
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }
  saveState();
  updateCartCount();
  renderCart();
});

loginTrigger.addEventListener("click", () => setModal(authModal, true));
logoutTrigger.addEventListener("click", () => {
  state.user = null;
  saveState();
  updateAuthUI();
  showToast("Logged out.");
});

Array.from(document.querySelectorAll("[data-close]"), (btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.close;
    const modal = document.getElementById(id);
    if (modal) setModal(modal, false);
  });
});

Array.from(document.querySelectorAll("[data-scroll]"), (btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.scroll;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
});

const authForm = document.getElementById("authForm");
authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(authForm);
  state.user = {
    email: formData.get("email"),
  };
  saveState();
  updateAuthUI();
  setModal(authModal, false);
  showToast("Welcome back!");
});

const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.cart.length === 0) {
    showToast("Cart is empty.");
    return;
  }
  state.cart = [];
  saveState();
  updateCartCount();
  renderCart();
  setModal(paymentModal, false);
  showToast("Payment complete. Thank you!");
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Message sent. We'll reply soon.");
  contactForm.reset();
});

renderProducts();
updateCartCount();
updateAuthUI();
