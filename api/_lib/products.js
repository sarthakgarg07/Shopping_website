const productEntries = [
    {
        id: "hamper-99",
        name: "Test Product (1 Rupee)",
        price: 1,
        description: "Temporary 1 Rupee item for live payment gateway testing.",
        image: "Website_Images/Handmade Red Rose.jpg",
        category: "Signature Big Hampers",
        featured: true,
    },
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

module.exports = {
    productEntries,
    products
};
