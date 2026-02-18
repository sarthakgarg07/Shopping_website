const productEntries = [
  {
    id: "hamper-01",
    name: "Big Blue Hamper",
    price: 1599,
    description: "Statement hamper with premium wrap and custom note.",
    image: "Website_Images/Big Blue Hamper.jpg",
    category: "Signature Big Hampers",
    featured: true,
  },
  {
    id: "hamper-02",
    name: "Big Blue Hamper (Angle 2)",
    price: 1599,
    description: "Alternate view for the Big Blue Hamper.",
    image: "Website_Images/Big Blue Hamper (1).jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-03",
    name: "Big Pink Hamper",
    price: 1599,
    description: "Pink-themed hamper with custom ribbons and tags.",
    image: "Website_Images/Big Pink Hamper.jpg",
    category: "Signature Big Hampers",
    featured: true,
  },
  {
    id: "hamper-04",
    name: "Big Pink Hamper (Angle 2)",
    price: 1599,
    description: "Alternate view for the Big Pink Hamper.",
    image: "Website_Images/Big Pink Hamper (1).jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-05",
    name: "Handmade Red Rose",
    price: 499,
    description: "Handcrafted rose keepsake for romantic gestures.",
    image: "Website_Images/Handmade Red Rose.jpg",
    category: "Bouquets & Roses",
    featured: true,
  },
  {
    id: "hamper-06",
    name: "Munch Bunch",
    price: 999,
    description: "Snack-forward hamper for birthdays and surprises.",
    image: "Website_Images/Munch Bunch.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-07",
    name: "Pink White Rose Bouquet",
    price: 899,
    description: "Soft pastel bouquet with delicate wrapping.",
    image: "Website_Images/Pink White Rose Bouquet.jpg",
    category: "Bouquets & Roses",
  },
  {
    id: "hamper-08",
    name: "Polaroids 5 Star Bouquet",
    price: 1299,
    description: "Photo-forward bouquet with premium chocolates.",
    image: "Website_Images/Polaroids 5 Star Bouquet.jpg",
    category: "Polaroid Gifts",
    featured: true,
  },
  {
    id: "hamper-09",
    name: "Polaroids 5 Star Bouquet (Angle 2)",
    price: 1299,
    description: "Alternate view for the 5 Star Polaroid bouquet.",
    image: "Website_Images/Polaroids 5 Star Bouquet (1).jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-10",
    name: "Polaroids 5 Star Bouquet (Angle 3)",
    price: 1299,
    description: "Another photo option for the 5 Star Polaroid bouquet.",
    image: "Website_Images/Polaroids 5 star bouquet (2).jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-11",
    name: "Polaroids Hamper",
    price: 1099,
    description: "Keepsake hamper featuring polaroid memories.",
    image: "Website_Images/Polaroids.jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-12",
    name: "Sorry Hamper",
    price: 999,
    description: "Apology hamper with comfort picks and a note.",
    image: "Website_Images/Sorry Hamper (1).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-13",
    name: "Sorry Hamper (Angle 2)",
    price: 999,
    description: "Alternate view for the Sorry Hamper.",
    image: "Website_Images/Sorry Hamper (2).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-14",
    name: "Valentine's Big Box Chocolate Hamper",
    price: 1499,
    description: "Classic Valentine’s gift with premium chocolates.",
    image: "Website_Images/Valentine's Big Box Chocolate Hamper.jpg",
    category: "Valentine's Collection",
    featured: true,
  },
  {
    id: "hamper-15",
    name: "Valentine's Big Hamper",
    price: 1699,
    description: "Large Valentine’s hamper with extra add-ons.",
    image: "Website_Images/Valentine's Big Hamper (1).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-16",
    name: "Valentine's Big Hamper (Angle 2)",
    price: 1699,
    description: "Alternate view for the Valentine’s Big Hamper.",
    image: "Website_Images/Valentine's Big Hamper (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-17",
    name: "Valentine's Card Hamper",
    price: 1199,
    description: "Card-forward hamper with a romantic finish.",
    image: "Website_Images/Valentine's Card Hamper.jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-18",
    name: "Valentine's Card Hamper (Angle 1)",
    price: 1199,
    description: "Alternate view for the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (1).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-19",
    name: "Valentine's Card Hamper (Angle 2)",
    price: 1199,
    description: "Another angle of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-20",
    name: "Valentine's Card Hamper (Angle 3)",
    price: 1199,
    description: "Card hamper variant styling.",
    image: "Website_Images/Valentine's Card Hamper (3).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-21",
    name: "Valentine's Card Hamper (Angle 4)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (4).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-22",
    name: "Valentine's Card Hamper (Angle 5)",
    price: 1199,
    description: "Card hamper styling option.",
    image: "Website_Images/Valentine's Card Hamper (5).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-23",
    name: "Valentine's Card Hamper (Angle 6)",
    price: 1199,
    description: "Another card hamper angle.",
    image: "Website_Images/Valentine's Card Hamper (6).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-24",
    name: "Valentine's Card Hamper (Angle 7)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (7).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-25",
    name: "Valentine's Card Hamper (Angle 8)",
    price: 1199,
    description: "Card hamper with different styling.",
    image: "Website_Images/Valentine's Card Hamper (8).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-26",
    name: "Valentine's Card Hamper (Angle 9)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (9).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-27",
    name: "Valentine's Card Hamper (Angle 10)",
    price: 1199,
    description: "More angles for the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (10).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-28",
    name: "Valentine's Card Hamper (Angle 12)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (12).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-29",
    name: "Valentine's Card Hamper (Angle 13)",
    price: 1199,
    description: "Card hamper styling variation.",
    image: "Website_Images/Valentine's Card Hamper (13).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-30",
    name: "Valentine's Card Hamper (Angle 14)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (14).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-31",
    name: "Valentine's Card Hamper (Angle 15)",
    price: 1199,
    description: "Card hamper with fresh layout.",
    image: "Website_Images/Valentine's Card Hamper (15).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-32",
    name: "Valentine's Card Hamper (Angle 16)",
    price: 1199,
    description: "Alternate view of the card hamper.",
    image: "Website_Images/Valentine's Card Hamper (16).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-33",
    name: "Valentine's Chocolate Hamper (with lights)",
    price: 1399,
    description: "Lights-on Valentine’s hamper for a soft glow.",
    image: "Website_Images/Valentine's Chocolate Hamper (with lights).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-34",
    name: "Valentine's Chocolate Hamper (with lights) (Angle 2)",
    price: 1399,
    description: "Alternate view of the lights hamper.",
    image: "Website_Images/Valentine's Chocolate Hamper (with lights) (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-35",
    name: "Valentine's Small Chocolate Hamper (with polaroids)",
    price: 1099,
    description: "Compact hamper with polaroids and sweets.",
    image: "Website_Images/Valentine's small Chocolate Hamper (with polaroids).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-36",
    name: "Valentine's Small Hamper (with Teddy)",
    price: 999,
    description: "Teddy add-on hamper for cute surprises.",
    image: "Website_Images/Valentine's small Hamper (with Teddy).jpg",
    category: "Valentine's Collection",
  },
];

const baseName = (name) => name.replace(/\s*\(Angle\s*\d+\)$/i, "").trim();

const mergeProductVariants = (entries) => {
  const merged = new Map();

  entries.forEach((entry) => {
    const key = `${entry.category}::${baseName(entry.name)}`;
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, {
        id: entry.id,
        name: baseName(entry.name),
        price: entry.price,
        description: entry.description,
        category: entry.category,
        featured: Boolean(entry.featured),
        images: [entry.image],
      });
      return;
    }

    if (!existing.images.includes(entry.image)) {
      existing.images.push(entry.image);
    }
    if (entry.featured) {
      existing.featured = true;
    }
  });

  return Array.from(merged.values());
};

const products = mergeProductVariants(productEntries);

const state = {
  cart: JSON.parse(localStorage.getItem("ivooCart") || "[]"),
  user: JSON.parse(localStorage.getItem("ivooUser") || "null"),
  activeCategory: "All",
};

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartShipping = document.getElementById("cartShipping");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

const authModal = document.getElementById("authModal");
const cartModal = document.getElementById("cartModal");
const paymentModal = document.getElementById("paymentModal");
const paymentStatus = document.getElementById("paymentStatus");

const loginTrigger = document.getElementById("loginTrigger");
const logoutTrigger = document.getElementById("logoutTrigger");
const cartTrigger = document.getElementById("cartTrigger");
const checkoutTrigger = document.getElementById("checkoutTrigger");
const heroCarousel = document.getElementById("heroCarousel");
const heroDots = document.getElementById("heroDots");
const heroCounter = document.getElementById("heroCounter");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const saveState = () => {
  localStorage.setItem("ivooCart", JSON.stringify(state.cart));
  localStorage.setItem("ivooUser", JSON.stringify(state.user));
};

const generateOrderItems = () =>
  state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;
      return {
        id: product.id,
        name: product.name,
        unitPrice: product.price,
        qty: item.qty,
      };
    })
    .filter(Boolean);

const getCartTotals = () => {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  const shipping = 0;
  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
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
  const visibleProducts =
    state.activeCategory === "All"
      ? products
      : products.filter((product) => product.category === state.activeCategory);
  visibleProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    const imageSlides = product.images
      .map(
        (image, index) => `
        <img
          class="carousel-image ${index === 0 ? "active" : ""}"
          src="${encodeURI(image)}"
          alt="${product.name} view ${index + 1}"
          loading="lazy"
          data-index="${index}"
        />
      `
      )
      .join("");
    const imageDots = product.images
      .map(
        (_, index) => `
        <button
          type="button"
          class="carousel-dot ${index === 0 ? "active" : ""}"
          data-action="jump"
          data-index="${index}"
          aria-label="View image ${index + 1}"
        ></button>
      `
      )
      .join("");
    card.innerHTML = `
      <div class="product-image">
        <div class="image-carousel" data-index="0">
          ${imageSlides}
          ${
            product.images.length > 1
              ? `
            <button type="button" class="carousel-btn prev" data-action="prev" aria-label="Previous image">‹</button>
            <button type="button" class="carousel-btn next" data-action="next" aria-label="Next image">›</button>
            <div class="carousel-dots">${imageDots}</div>
          `
              : ""
          }
        </div>
        <span class="product-tag">${product.category}</span>
        ${product.featured ? '<span class="product-badge">Featured</span>' : ""}
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

const updateCarousel = (carousel, nextIndex) => {
  const slides = Array.from(carousel.querySelectorAll(".carousel-image"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  if (!slides.length) return;

  const boundedIndex = (nextIndex + slides.length) % slides.length;
  carousel.dataset.index = String(boundedIndex);

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === boundedIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === boundedIndex);
  });
};

const renderFilters = () => {
  if (!categoryFilters) return;
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const filters = ["All", ...categories];
  categoryFilters.innerHTML = "";
  filters.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-btn";
    if (category === state.activeCategory) {
      button.classList.add("active");
    }
    button.textContent = category;
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderFilters();
      renderProducts();
    });
    categoryFilters.appendChild(button);
  });
};

const initHeroCarousel = () => {
  if (!heroCarousel) return;
  const slides = Array.from(heroCarousel.querySelectorAll(".hero-slide"));
  if (!slides.length) return;
  let activeIndex = 0;
  let autoPlayTimer;

  slides.forEach((slide) => {
    const image = slide.dataset.image;
    if (image) {
      slide.style.backgroundImage = `url("${encodeURI(image)}")`;
    }
  });

  const goToSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === activeIndex);
    });
    if (heroDots) {
      const dots = Array.from(heroDots.querySelectorAll(".hero-dot"));
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeIndex);
      });
    }
    if (heroCounter) {
      heroCounter.textContent = `${activeIndex + 1} / ${slides.length}`;
    }
  };

  if (heroDots) {
    heroDots.innerHTML = slides
      .map(
        (_, index) =>
          `<button type="button" class="hero-dot ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="Go to slide ${
            index + 1
          }"></button>`
      )
      .join("");
    heroDots.addEventListener("click", (event) => {
      const dot = event.target.closest(".hero-dot");
      if (!dot) return;
      goToSlide(Number(dot.dataset.index || "0"));
      restartAutoPlay();
    });
  }

  const startAutoPlay = () => {
    autoPlayTimer = setInterval(() => {
      goToSlide(activeIndex + 1);
    }, 4200);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  const restartAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      goToSlide(activeIndex - 1);
      restartAutoPlay();
    });
  }

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      goToSlide(activeIndex + 1);
      restartAutoPlay();
    });
  }

  heroCarousel.addEventListener("mouseenter", stopAutoPlay);
  heroCarousel.addEventListener("mouseleave", startAutoPlay);

  goToSlide(0);
  startAutoPlay();
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

  const { subtotal, shipping, total } = getCartTotals();

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

  if (target.classList.contains("carousel-btn") || target.classList.contains("carousel-dot")) {
    const carousel = target.closest(".image-carousel");
    if (!carousel) return;
    const currentIndex = Number(carousel.dataset.index || "0");
    const action = target.dataset.action;
    if (action === "prev") {
      updateCarousel(carousel, currentIndex - 1);
    } else if (action === "next") {
      updateCarousel(carousel, currentIndex + 1);
    } else if (action === "jump") {
      updateCarousel(carousel, Number(target.dataset.index || "0"));
    }
    return;
  }

  if (!target.classList.contains("add-btn")) return;
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
paymentForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (state.cart.length === 0) {
    showToast("Cart is empty.");
    return;
  }
  const formData = new FormData(paymentForm);
  const { subtotal, shipping, total } = getCartTotals();
  const payload = {
    customer: {
      email: state.user?.email || "",
      name: String(formData.get("customerName") || "").trim(),
      phone: String(formData.get("customerPhone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
    },
    notes: String(formData.get("notes") || "").trim(),
    items: generateOrderItems(),
    amount: {
      subtotal,
      shipping,
      total,
      currency: "INR",
    },
  };

  try {
    paymentStatus.textContent = "Order status: placing order...";
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Unable to place order right now.");
    }

    state.cart = [];
    saveState();
    updateCartCount();
    renderCart();
    paymentForm.reset();
    paymentStatus.textContent = `Order status: placed (${data.orderId})`;
    showToast(`Order placed: ${data.orderId}`);

    if (data.paymentUrl) {
      window.open(data.paymentUrl, "_blank", "noopener,noreferrer");
    }
  } catch (error) {
    paymentStatus.textContent = "Order status: failed";
    showToast(error.message || "Order failed.");
  }
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Message sent. We'll reply soon.");
  contactForm.reset();
});

renderProducts();
renderFilters();
initHeroCarousel();
updateCartCount();
updateAuthUI();
