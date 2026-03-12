const productEntries = [
  {
    id: "hamper-bb-1",
    name: "Big Blue Hamper",
    price: 999,
    description: "It contain 12 blue items. Things may vary on availability. We will provide you more than mentioned but we can’t guarantee exact things … but we will try our best to satisfy your need as we send you a video before dispatching so you can make changes in your order ❤️",
    image: "Website_Images/Big Blue New (Angle 1).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bb-2",
    name: "Big Blue Hamper (Angle 2)",
    price: 999,
    image: "Website_Images/Big Blue New (Angle 2).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bb-3",
    name: "Big Blue Hamper (Angle 3)",
    price: 999,
    image: "Website_Images/Big Blue New (Angle 3).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bb-4",
    name: "Big Blue Hamper (Angle 4)",
    price: 999,
    image: "Website_Images/Big Blue New (Angle 4).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bp-1",
    name: "Pink big hamper",
    price: 999,
    description: "It’s contain 12 pink items Things may vary on availability We will provide you more than mentioned but we can’t guarantee exact things … but we will try our best to satisfy your need as we send you a video before dispatching so you can make changes in your order ❤️",
    image: "Website_Images/Big Pink New (Angle 1).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bp-2",
    name: "Pink big hamper (Angle 2)",
    price: 999,
    image: "Website_Images/Big Pink New (Angle 2).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bp-3",
    name: "Pink big hamper (Angle 3)",
    price: 999,
    image: "Website_Images/Big Pink New (Angle 3).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-bp-4",
    name: "Pink big hamper (Angle 4)",
    price: 999,
    image: "Website_Images/Big Pink New (Angle 4).jpeg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-01",
    name: "Luxury Blue Hamper",
    price: 1499,
    description: "Premium quality box containing 12 blue items. Things may vary on availability — we will provide you more than mentioned but we can't guarantee exact things, but we will try our best to satisfy your needs.",
    image: "Website_Images/Big Blue Hamper (1).jpg",
    category: "Signature Big Hampers",
    featured: true,
  },
  {
    id: "hamper-02",
    name: "Luxury Blue Hamper (Angle 2)",
    price: 1499,
    image: "Website_Images/Big Blue Hamper.jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-02b",
    name: "Luxury Blue Hamper (Angle 3)",
    price: 1499,
    image: "Website_Images/Big Blue Hamper (2).jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-03",
    name: "Luxury Pink Hamper",
    price: 1999,
    description: "Premium quality box containing 12 luxury pink items. Things may vary on availability — we will provide you more than mentioned but we can't guarantee exact things, but we will try our best to satisfy your needs.",
    image: "Website_Images/Big Pink Hamper (1).jpg",
    category: "Signature Big Hampers",
    featured: true,
  },
  {
    id: "hamper-04",
    name: "Luxury Pink Hamper (Angle 2)",
    price: 1999,
    image: "Website_Images/Big Pink Hamper.jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-04b",
    name: "Luxury Pink Hamper (Angle 3)",
    price: 1999,
    image: "Website_Images/Big Pink Hamper (3).jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-04c",
    name: "Luxury Pink Hamper (Angle 4)",
    price: 1999,
    image: "Website_Images/Big Pink Hamper (4).jpg",
    category: "Signature Big Hampers",
  },
  {
    id: "hamper-05",
    name: "Handmade Red Rose",
    price: 199,
    description: "Handcrafted rose made from satin ribbon. Colors available. Perfect for romantic gestures or as a keepsake gift.",
    image: "Website_Images/Handmade Red Rose.jpg",
    category: "Bouquets & Roses",
    featured: true,
  },
  {
    id: "hamper-rose-4",
    name: "4 Handmade Rose Bouquet",
    price: 899,
    description: "Beautiful bouquet of 4 handmade roses made from satin ribbon. Colors available. A perfect romantic gift.",
    image: "Website_Images/Pink White Rose Bouquet.jpg",
    category: "Bouquets & Roses",
    featured: true,
  },
  {
    id: "hamper-06",
    name: "Munch Bunch",
    price: 299,
    description: "A fun snack-forward chocolate hamper with a variety of chocolates. Great for birthdays and surprises.",
    image: "Website_Images/Munch Bunch.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-08",
    name: "Polaroids 5 Star Bouquet",
    price: 1499,
    description: "A stunning bouquet featuring 6-7 polaroids and 10-11 five star chocolates. Fragile item — difficult to deliver far.",
    image: "Website_Images/Polaroids 5 Star Bouquet.jpg",
    category: "Polaroid Gifts",
    featured: true,
  },
  {
    id: "hamper-09",
    name: "Polaroids 5 Star Bouquet (Angle 2)",
    price: 1499,
    image: "Website_Images/Polaroids 5 Star Bouquet (1).jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-10",
    name: "Polaroids 5 Star Bouquet (Angle 3)",
    price: 1499,
    image: "Website_Images/Polaroids 5 star bouquet (2).jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-polaroid-choc",
    name: "Polaroid Chocolate Hamper",
    price: 1499,
    description: "A unique hamper combining polaroid memories with premium chocolates. Makes for a wonderful personalised gift.",
    image: "Website_Images/Polaroid Chocolate Hamper.jpg",
    category: "Polaroid Gifts",
    featured: true,
  },
  {
    id: "hamper-11",
    name: "Polaroids",
    price: 99,
    description: "Cute polaroid prints — a keepsake gift to cherish memories forever.",
    image: "Website_Images/Polaroids.jpg",
    category: "Polaroid Gifts",
  },
  {
    id: "hamper-12",
    name: "Sorry Hamper",
    price: 399,
    description: "Apology hamper with comfort picks and a heartfelt note. Say sorry in style.",
    image: "Website_Images/Sorry Hamper (1).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-13",
    name: "Sorry Hamper (Angle 2)",
    price: 399,
    image: "Website_Images/Sorry Hamper (2).jpg",
    category: "Occasion Hampers",
  },
  // ── New Hampers ──
  {
    id: "hamper-chocolate-sq",
    name: "Chocolate Square Hamper",
    price: 599,
    description: "A delightful chocolate box containing 2 gold chocolates, 4 five stars, 4 Kit Kats and 2 Dairy Milks.",
    image: "Website_Images/Chocolate Square Hamper.jpg",
    category: "Occasion Hampers",
    featured: true,
  },
  {
    id: "hamper-choc-jhumka",
    name: "Chocolate Hamper + Jhumka",
    price: 599,
    description: "5-6 chocolate cards paired with 3 beautiful pairs of jhumkas. A sweet and stylish gift combo.",
    image: "Website_Images/Chocolate Hamper Jhumka.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-choc-jhumka-2",
    name: "Chocolate Hamper + Jhumka (Angle 2)",
    price: 599,
    image: "Website_Images/Chocolate Hamper Jhumka (2).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-small-choc",
    name: "Chocolate Hamper",
    price: 299,
    description: "Compact chocolate hamper with 5-6 chocolate cards — perfect for a sweet surprise.",
    image: "Website_Images/Small Chocolate Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-bitcoin-lights",
    name: "Big Chocolate Hamper + Lights",
    price: 599,
    description: "Premium big box with lights containing 10 chocolate cards. A glowing gift that stands out!",
    image: "Website_Images/Valentine's Big Box Chocolate Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-lit",
    name: "Lit Hamper 🔥",
    price: 999,
    description: "3 medium claw clips, 3 small claw clips, 2 satin scrunchies, 1 necklace, 1 pair of earrings, 1 Kinder Joy, 4-5 polaroids, 4-5 quotes and a happy birthday greeting.",
    image: "Website_Images/Lit Hamper.png",
    category: "Occasion Hampers",
    featured: true,
  },
  {
    id: "hamper-lit-2",
    name: "Lit Hamper 🔥 (Angle 2)",
    price: 999,
    image: "Website_Images/Lit Hamper (2).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-lit-3",
    name: "Lit Hamper 🔥 (Angle 3)",
    price: 999,
    image: "Website_Images/Lit Hamper (3).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-birthday-pink",
    name: "Birthday Pink Hamper",
    price: 999,
    description: "This hamper contains 12 items. Things may vary on availability — we will provide more than 12 but can't guarantee exact things. We send a video before dispatching so you can make changes.",
    image: "Website_Images/Birthday Pink Hamper.jpg",
    category: "Occasion Hampers",
    featured: true,
  },
  {
    id: "hamper-tennie",
    name: "Tennie Hamper",
    price: 799,
    description: "This hamper contains 10 items. Things may vary on availability — we will provide more than 10 but can't guarantee exact things. We send a video before dispatching so you can make changes.",
    image: "Website_Images/Tennie Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-boom-pink",
    name: "Boom Pink Hamper",
    price: 499,
    description: "This hamper contains 6 items. Things may vary on availability — we will provide more than 6 but can't guarantee exact things. We send you a video before dispatching so you can make changes.",
    image: "Website_Images/Boom Pink Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-boom-pink-2",
    name: "Boom Pink Hamper (Angle 2)",
    price: 499,
    image: "Website_Images/Boom Pink Hamper (2).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-eightieee",
    name: "Eightiee Jewel Hamper",
    price: 699,
    description: "8 beautiful jewels: 2 necklaces, 2 jhumkas, 2 studs and 2 bracelets. Perfect for the jewellery lover.",
    image: "Website_Images/Eightieee Hamper.jpg",
    category: "Occasion Hampers",
    featured: true,
  },
  {
    id: "hamper-batman",
    name: "Batman Hamper",
    price: 1499,
    description: "Batman big letter with customisation, Batman mug, Batman action figure, Batman keychain and some chocolates. Perfect for Batman fans!",
    image: "Website_Images/Batman Hamper.jpg",
    category: "Occasion Hampers",
    featured: true,
  },
  {
    id: "hamper-batman-2",
    name: "Batman Hamper (Angle 2)",
    price: 1499,
    image: "Website_Images/Batman Hamper (2).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-best-friend",
    name: "For My Best Friend Hamper",
    price: 699,
    description: "A heartfelt hamper curated for your best friend. Currently out of stock — check back soon!",
    image: "Website_Images/For My Best Friend Hamper.png",
    category: "Occasion Hampers",
    outOfStock: true,
  },
  {
    id: "hamper-best-friend-2",
    name: "For My Best Friend Hamper (Angle 2)",
    price: 699,
    image: "Website_Images/For My Best Friend Hamper (2).png",
    category: "Occasion Hampers",
    outOfStock: true,
  },
  {
    id: "hamper-best-friend-sm",
    name: "Best Friend Hamper",
    price: 599,
    description: "A sweet and thoughtful hamper for your best friend. Currently out of stock — check back soon!",
    image: "Website_Images/For My Best Friend Hamper.png",
    category: "Occasion Hampers",
    outOfStock: true,
  },
  {
    id: "hamper-blue-small",
    name: "Blue Hamper (Small)",
    price: 599,
    description: "Cute small blue hamper containing 11-12 blue items. Items depend on availability.",
    image: "Website_Images/Blue Hamper Small.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-green-small",
    name: "Green Hamper (Small)",
    price: 599,
    description: "Cute small green hamper containing 11-12 green items. Items depend on availability.",
    image: "Website_Images/Green Hamper Small.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-pink-lippie",
    name: "Small Pink Lippie Hamper",
    price: 299,
    description: "A cute pink gift set with a pink lip gloss, pink keychain and a pair of earrings.",
    image: "Website_Images/Small Pink Lippie Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-pink-lippie-3",
    name: "Small Pink Lippie Hamper (Angle 2)",
    price: 299,
    image: "Website_Images/Pink Lippie Hamper (3).jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-blue-lippie",
    name: "Small Blue Lippie Hamper",
    price: 299,
    description: "A cute blue gift set with a blue lip gloss, blue keychain and a pair of earrings.",
    image: "Website_Images/Small Blue Lippie Hamper.jpg",
    category: "Occasion Hampers",
  },
  {
    id: "hamper-small-lippie",
    name: "Small Lippie Hamper",
    price: 299,
    description: "A mini lip gloss hamper — great as a small treat or add-on gift.",
    image: "Website_Images/Small Lippie Hamper.jpg",
    category: "Occasion Hampers",
  },
  // ── Valentine's Collection ──
  {
    id: "hamper-14",
    name: "Valentine's Big Box Chocolate Hamper",
    price: 699,
    description: "Classic Valentine's gift packed with premium chocolates in a beautiful gift box.",
    image: "Website_Images/Valentine's Big Box Chocolate Hamper.jpg",
    category: "Valentine's Collection",
    featured: true,
  },
  {
    id: "hamper-15",
    name: "Valentine's Big Hamper",
    price: 999,
    description: "A grand Valentine's hamper with a rose, propose day card, teddy, Cadbury celebration, promise day card, Kisses, hug day card and a Valentine's card with a pendant.",
    image: "Website_Images/Valentine's Big Hamper (1).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-16",
    name: "Valentine's Big Hamper (Angle 2)",
    price: 999,
    image: "Website_Images/Valentine's Big Hamper (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-17",
    name: "Valentine's Card Hamper",
    price: 799,
    description: "Card-forward hamper with a romantic finish. Perfect for expressing your love.",
    image: "Website_Images/Valentine's Card Hamper.jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-18",
    name: "Valentine's Card Hamper (Angle 1)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (1).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-19",
    name: "Valentine's Card Hamper (Angle 2)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-20",
    name: "Valentine's Card Hamper (Angle 3)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (3).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-21",
    name: "Valentine's Card Hamper (Angle 4)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (4).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-22",
    name: "Valentine's Card Hamper (Angle 5)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (5).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-23",
    name: "Valentine's Card Hamper (Angle 6)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (6).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-24",
    name: "Valentine's Card Hamper (Angle 7)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (7).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-25",
    name: "Valentine's Card Hamper (Angle 8)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (8).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-26",
    name: "Valentine's Card Hamper (Angle 9)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (9).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-27",
    name: "Valentine's Card Hamper (Angle 10)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (10).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-28",
    name: "Valentine's Card Hamper (Angle 12)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (12).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-29",
    name: "Valentine's Card Hamper (Angle 13)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (13).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-30",
    name: "Valentine's Card Hamper (Angle 14)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (14).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-31",
    name: "Valentine's Card Hamper (Angle 15)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (15).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-32",
    name: "Valentine's Card Hamper (Angle 16)",
    price: 799,
    image: "Website_Images/Valentine's Card Hamper (16).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-33",
    name: "Valentine's Chocolate Hamper (with lights)",
    price: 349,
    description: "A romantic Valentine's hamper with 5-6 chocolate cards and 2-3 love cards in a glowing light setup.",
    image: "Website_Images/Valentine's Chocolate Hamper (with lights).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-34",
    name: "Valentine's Chocolate Hamper (with lights) (Angle 2)",
    price: 349,
    image: "Website_Images/Valentine's Chocolate Hamper (with lights) (2).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-35",
    name: "Valentine's Small Chocolate Hamper (with polaroids)",
    price: 349,
    description: "Compact Valentine's chocolate hamper with polaroid memories and sweets.",
    image: "Website_Images/Valentine's small Chocolate Hamper (with polaroids).jpg",
    category: "Valentine's Collection",
  },
  {
    id: "hamper-36",
    name: "Valentine's Small Hamper (with Teddy)",
    price: 399,
    description: "Sweet small Valentine's hamper with a handmade rose, a teddy, a KitKat and a cute bow. Colors depend on availability.",
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
        description: entry.description || "",
        category: entry.category,
        featured: Boolean(entry.featured),
        outOfStock: Boolean(entry.outOfStock),
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
    if (entry.outOfStock) {
      existing.outOfStock = true;
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

const adminTrigger = document.getElementById("adminTrigger");
const myOrdersModal = document.getElementById("myOrdersModal");
const myOrdersTrigger = document.getElementById("myOrdersTrigger");
const ordersList = document.getElementById("ordersList");
const cartModal = document.getElementById("cartModal");
const paymentModal = document.getElementById("paymentModal");
const productModal = document.getElementById("productModal");
const paymentStatus = document.getElementById("paymentStatus");
const detailImage = document.getElementById("detailImage");
const detailThumbs = document.getElementById("detailThumbs");
const detailCategory = document.getElementById("detailCategory");
const detailName = document.getElementById("detailName");
const detailDescription = document.getElementById("detailDescription");
const detailPrice = document.getElementById("detailPrice");
const detailAddBtn = document.getElementById("detailAddBtn");
const detailShareBtn = document.getElementById("detailShareBtn");

const loginTrigger = document.getElementById("loginTrigger");
const logoutTrigger = document.getElementById("logoutTrigger");
const cartTrigger = document.getElementById("cartTrigger");
const checkoutTrigger = document.getElementById("checkoutTrigger");
const heroCarousel = document.getElementById("heroCarousel");
const heroDots = document.getElementById("heroDots");
const heroCounter = document.getElementById("heroCounter");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

const mobileCartTrigger = document.getElementById("mobileCartTrigger");
const mobileProfileTrigger = document.getElementById("mobileProfileTrigger");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const mobileCartCount = document.querySelector(".mobile-cart-count");

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const detailState = {
  productId: null,
  imageIndex: 0,
};

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

const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 99;

const getCartTotals = () => {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  const shipping = subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
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

let backTimeout;
const updateHistoryState = () => {
  const anyModalActive = document.querySelectorAll('.modal.active').length > 0;
  const isModalState = history.state && history.state.modalOpen;

  if (anyModalActive && !isModalState) {
    history.pushState({ modalOpen: true }, "", window.location.href);
  } else if (!anyModalActive && isModalState) {
    history.back();
  }
};

const setModal = (modal, active) => {
  modal.classList.toggle("active", active);
  modal.setAttribute("aria-hidden", String(!active));

  clearTimeout(backTimeout);
  backTimeout = setTimeout(updateHistoryState, 50);
};

window.addEventListener("popstate", (event) => {
  clearTimeout(backTimeout);
  if (!event.state || !event.state.modalOpen) {
    document.querySelectorAll('.modal.active').forEach(m => {
      m.classList.remove("active");
      m.setAttribute("aria-hidden", "true");
    });
  }
});

const renderProducts = () => {
  productGrid.innerHTML = "";

  const searchTerm = mobileSearchInput ? mobileSearchInput.value.toLowerCase() : "";

  const visibleProducts = products.filter((product) => {
    const matchesCategory = state.activeCategory === "All" || product.category === state.activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  visibleProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    const imageSlides = product.images
      .map(
        (image, index) => `
        <img
          class="carousel-image ${index === 0 ? "active" : ""}"
          src="${encodeURI(image)}"
          alt="${product.name} view ${index + 1}"
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
      <div class="product-image${product.outOfStock ? ' out-of-stock-img' : ''}">
        <div class="image-carousel" data-index="0">
          ${imageSlides}
          ${product.images.length > 1
        ? `
            <button type="button" class="carousel-btn prev" data-action="prev" aria-label="Previous image">‹</button>
            <button type="button" class="carousel-btn next" data-action="next" aria-label="Next image">›</button>
            <div class="carousel-dots">${imageDots}</div>
          `
        : ""
      }
        </div>
        <span class="product-tag">${product.category}</span>
        ${product.outOfStock ? '<span class="product-badge out-of-stock-badge">Out of Stock</span>' : (product.featured ? '<span class="product-badge">Featured</span>' : "")}
      </div>
      <div>
        <h3>${product.name}</h3>
      </div>
      <div class="price-row">
        <span class="price">${formatter.format(product.price)}</span>
        <button class="add-btn" data-id="${product.id}"${product.outOfStock ? ' disabled style="opacity:0.45;cursor:not-allowed;"' : ''}>${
          product.outOfStock ? 'Out of Stock' : 'Add to cart'
        }</button>
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

const renderProductModalImage = (product) => {
  const images = product.images || [];
  if (!images.length || !detailImage || !detailThumbs) return;
  const image = images[detailState.imageIndex] || images[0];
  detailImage.src = encodeURI(image);
  detailImage.classList.remove("zoomed");

  detailThumbs.innerHTML = images
    .map(
      (entry, index) => `
      <button type="button" class="detail-thumb ${index === detailState.imageIndex ? "active" : ""
        }" data-index="${index}" aria-label="Open image ${index + 1}">
        <img src="${encodeURI(entry)}" alt="${product.name} thumbnail ${index + 1}" />
      </button>
    `
    )
    .join("");
};

const openProductModal = (productId) => {
  const product = products.find((entry) => entry.id === productId);
  if (!product || !productModal) return;

  detailState.productId = product.id;
  detailState.imageIndex = 0;
  if (detailCategory) detailCategory.textContent = product.category;
  if (detailName) detailName.textContent = product.name;
  if (detailDescription) detailDescription.textContent = product.description || "";
  if (detailPrice) detailPrice.textContent = formatter.format(product.price);

  renderProductModalImage(product);
  setModal(productModal, true);
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
          `<button type="button" class="hero-dot ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="Go to slide ${index + 1
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
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = count;
  if (mobileCartCount) mobileCartCount.textContent = count;
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
  if (cartSubtotal) cartSubtotal.textContent = formatter.format(subtotal);
  if (cartShipping) {
    if (shipping > 0) {
      const needed = FREE_SHIPPING_THRESHOLD - subtotal;
      cartShipping.innerHTML = `<span>${formatter.format(shipping)}</span><br><small style="color:var(--pink-400);font-size:0.75rem;">Add ${formatter.format(needed)} more for free delivery!</small>`;
    } else if (subtotal > 0) {
      cartShipping.innerHTML = `<span style="color:#27ae60;font-weight:600;">FREE 🎉</span>`;
    } else {
      cartShipping.textContent = formatter.format(0);
    }
  }
  if (cartTotal) cartTotal.textContent = formatter.format(total);
};

// Handle shared URLs
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const sharedProductSlug = params.get("product");
  if (sharedProductSlug) {
    const matchingProduct = products.find(p => p.name.replace(/\s+/g, '-') === sharedProductSlug);
    if (matchingProduct) {
      openProductModal(matchingProduct.id);
    }
  }
});

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
  if (myOrdersTrigger) {
    myOrdersTrigger.style.display = loggedIn ? "inline-flex" : "none";
  }
};

const requireLogin = () => {
  if (!state.user) {
    setModal(authModal, true);
    return false;
  }
  return true;
};

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;
  const productId = card.dataset.id;
  if (!productId) return;
  const target = event.target.closest("button");

  if (target && (target.classList.contains("carousel-btn") || target.classList.contains("carousel-dot"))) {
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

  if (target && target.classList.contains("add-btn")) {
    const id = target.dataset.id;
    if (!id) return;
    const clickedProduct = products.find(p => p.id === id);
    if (clickedProduct && clickedProduct.outOfStock) return;
    if (!requireLogin()) return;
    addToCart(id);
    return;
  }

  openProductModal(productId);
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

// Modal close utilities
Array.from(document.querySelectorAll("[data-close]"), (btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.close;
    const modal = document.getElementById(id);
    if (modal) setModal(modal, false);
  });
});

// Close modals when clicking outside the modal-card
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    setModal(event.target, false);
  }
});


// ── Mobile Bottom Nav & Search Logic ──
if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", renderProducts);
}

if (mobileCartTrigger) {
  mobileCartTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    if (cartTrigger) cartTrigger.click();
  });
}

if (mobileProfileTrigger) {
  mobileProfileTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    if (state.user) {
      if (myOrdersTrigger) myOrdersTrigger.click();
    } else {
      if (loginTrigger) loginTrigger.click();
    }
  });
}

// Ensure the category tiles filter the grid and smoothly scroll down
document.querySelectorAll(".mobile-category-grid .filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Scroll to products
    const target = document.getElementById("collections");
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    // Use the existing logic of the desktop buttons to trigger the specific filter
    const cat = btn.dataset.filter;
    const matchingDesktopBtn = Array.from(document.querySelectorAll("#categoryFilters .filter-btn")).find(b => b.dataset.category === cat);
    if (matchingDesktopBtn) {
      matchingDesktopBtn.click();
    }
  });
});

if (myOrdersTrigger) {
  myOrdersTrigger.addEventListener("click", async () => {
    setModal(myOrdersModal, true);
    if (!state.user?.email) return;

    ordersList.innerHTML = `<p style="color: var(--gray);">Loading orders...</p>`;

    try {
      const response = await fetch(`/api/my-orders?email=${encodeURIComponent(state.user.email)}`);
      const data = await response.json();

      if (!response.ok || !data.orders || data.orders.length === 0) {
        ordersList.innerHTML = `<p style="color: var(--gray);">No orders found for this email.</p>`;
        return;
      }

      ordersList.innerHTML = data.orders.map(order => `
        <div style="border: 1px solid var(--border); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong>Order ${order.order_id}</strong>
            <span style="background: var(--surface); padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">
              ${order.order_status === 'confirmed' ? 'Confirmed' : 'Pending'}
            </span>
          </div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--gray);">
            Date: ${new Date(order.created_at).toLocaleDateString()}<br>
            Total: ${formatter.format(order.amount_total)}<br>
            Payment: ${order.payment_status === 'paid' ? 'Paid ✅' : 'Pending ⏳'}
          </p>
        </div>
      `).join("");

    } catch (err) {
      ordersList.innerHTML = `<p style="color: var(--text-error);">Could not load orders.</p>`;
    }
  });
}

if (detailThumbs) {
  detailThumbs.addEventListener("click", (event) => {
    const thumb = event.target.closest(".detail-thumb");
    if (!thumb) return;
    const product = products.find((entry) => entry.id === detailState.productId);
    if (!product) return;
    detailState.imageIndex = Number(thumb.dataset.index || "0");
    renderProductModalImage(product);
  });
}

if (detailImage) {
  detailImage.addEventListener("click", () => {
    detailImage.classList.toggle("zoomed");
  });
}

if (detailAddBtn) {
  detailAddBtn.addEventListener("click", () => {
    if (!detailState.productId) return;
    if (!requireLogin()) return;
    addToCart(detailState.productId);
    if (productModal) setModal(productModal, false);
  });
}

if (detailShareBtn) {
  detailShareBtn.addEventListener("click", () => {
    if (!detailState.productId) return;
    const product = products.find(p => p.id === detailState.productId);
    const url = window.location.origin + window.location.pathname + "?product=" + product.name.replace(/\s+/g, '-') + (product.description ? `&description=${encodeURIComponent(product.description)}` : '');

    if (navigator.share) {
      navigator.share({
        title: product ? product.name : "ivoo.re",
        text: `Check out this amazing gift on ivoo.re! ${product.description || ""}`,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url).then(() => {
        showToast("Link copied to clipboard!");
      });
    }
  });
}

Array.from(document.querySelectorAll("[data-scroll]"), (btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.scroll;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Google Sign-In Handler
window.handleGoogleLogin = (response) => {
  try {
    const base64Url = response.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);

    state.user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture
    };
    saveState();
    updateAuthUI();
    setModal(document.getElementById("authModal"), false);

    const firstName = payload.name.split(' ')[0];
    showToast(`Welcome, ${firstName}!`);
  } catch (err) {
    console.error("Google login failed", err);
    showToast("Login failed. Please try again.");
  }
};

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

    if (data.razorpayOrderId) {
      const options = {
        key: data.keyId,
        amount: data.amount * 100,
        currency: data.currency,
        name: "ivoo.re by silky",
        description: "Order " + data.orderId,
        order_id: data.razorpayOrderId,
        handler: async function (response) {
          try {
            paymentStatus.textContent = "Verifying payment...";
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.error || "Verification failed");
            }
            paymentStatus.textContent = `Payment successful. Txn: ${response.razorpay_payment_id}`;
            showToast("Payment successful!");

            // Allow the user to close the modal after a successful payment
            setTimeout(() => {
              setModal(paymentModal, false);
            }, 3000);

          } catch (err) {
            paymentStatus.textContent = "Payment verification failed.";
            showToast("Payment verification failed.");
          }
        },
        prefill: {
          name: payload.customer.name,
          email: payload.customer.email,
          contact: payload.customer.phone
        },
        theme: {
          color: "#1b1c24"
        }
      };

      if (typeof window.Razorpay === "undefined") {
        showToast("Payment system is loading. Please reload the page.");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        paymentStatus.textContent = "Payment failed. Please try again.";
        showToast("Payment failed.");
      });
      rzp.open();
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

// ── Back to Top Button ──
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Smooth Scroll Navigation ──
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (target) {
      // Offset by 80px to account for the sticky header
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});