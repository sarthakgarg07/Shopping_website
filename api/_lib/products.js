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
        name: "Luxury Blue Hamper",
        price: 1499,
        image: "Website_Images/Big Blue Hamper.jpg",
        category: "Signature Big Hampers",
        featured: true,
    },
    {
        id: "hamper-02",
        name: "Luxury Blue Hamper (Angle 2)",
        price: 1499,
        image: "Website_Images/Big Blue Hamper (1).jpg",
        category: "Signature Big Hampers",
    },
    {
        id: "hamper-03",
        name: "Luxury Pink Hamper",
        price: 1999,
        image: "Website_Images/Big Pink Hamper.jpg",
        category: "Signature Big Hampers",
        featured: true,
    },
    {
        id: "hamper-04",
        name: "Luxury Pink Hamper (Angle 2)",
        price: 1999,
        image: "Website_Images/Big Pink Hamper (1).jpg",
        category: "Signature Big Hampers",
    },
    {
        id: "hamper-05",
        name: "Handmade Red Rose",
        price: 199,
        image: "Website_Images/Handmade Red Rose.jpg",
        category: "Bouquets & Roses",
        featured: true,
    },
    {
        id: "hamper-06",
        name: "Munch Bunch",
        price: 299,
        image: "Website_Images/Munch Bunch.jpg",
        category: "Occasion Hampers",
    },
    {
        id: "hamper-07",
        name: "Pink White Rose Bouquet",
        price: 899,
        image: "Website_Images/Pink White Rose Bouquet.jpg",
        category: "Bouquets & Roses",
    },
    {
        id: "hamper-08",
        name: "Polaroids 5 Star Bouquet",
        price: 1499,
        image: "Website_Images/Polaroids 5 Star Bouquet.jpg",
        category: "Bouquets & Roses",
        featured: true,
    },
    {
        id: "hamper-09",
        name: "Polaroids 5 Star Bouquet (Angle 2)",
        price: 1499,
        image: "Website_Images/Polaroids 5 Star Bouquet (1).jpg",
        category: " Bouquets & Roses",
    },
    {
        id: "hamper-10",
        name: "Polaroids 5 Star Bouquet (Angle 3)",
        price: 1499,
        image: "Website_Images/Polaroids 5 star bouquet (2).jpg",
        category: "Bouquets & Roses",
    },
    {
        id: "hamper-11",
        name: "Polaroids",
        price: 99,
        image: "Website_Images/Polaroids.jpg",
        category: "Polaroid Gifts",
    },
    {
        id: "hamper-12",
        name: "Sorry Hamper",
        price: 399,
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
    {
        id: "hamper-14",
        name: "Valentine's Big Box Chocolate Hamper",
        price: 699,
        image: "Website_Images/Valentine's Big Box Chocolate Hamper.jpg",
        category: "Valentine's Collection",
        featured: true,
    },
    {
        id: "hamper-15",
        name: "Valentine's Big Hamper",
        price: 999,
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
        description: "Card hamper with different styling.",
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
        image: "Website_Images/Valentine's small Chocolate Hamper (with polaroids).jpg",
        category: "Valentine's Collection",
    },
    {
        id: "hamper-36",
        name: "Valentine's Small Hamper (with Teddy)",
        price: 399,
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
