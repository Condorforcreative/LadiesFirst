const products = [
    { 
        id: 1, 
        name: "صاك كروكو 3 قطع", 
        category: "حقائب", 
        price: "2300 دج", 
        variants: ["افتراضي"], 
        image: "assets/products/croco3set.png" 
    },
    { 
        id: 2, 
        name: "باك لي ساك قطعتين", 
        category: "حقائب", 
        price: "1700 دج", 
        variants: ["أسود", "أخضر", "بني"], 
        image: "assets/products/2piecespack.png" 
    },
    { 
        id: 3, 
        name: "بثلاث قطع GUESS باك لي ساك من علامة", 
        category: "حقائب", 
        price: "2900 دج", 
        variants: ["افتراضي"], 
        image: "assets/products/guess3set.png" 
    }
];

function renderProducts() {
    const productList = document.getElementById('productList');
    const categoryFilter = document.getElementById('filterCategory').value;
    const colorFilter = document.getElementById('filterColor').value;

    productList.innerHTML = "";

    products.filter(p => {
        return (!categoryFilter || p.category === categoryFilter) &&
               (!colorFilter || p.color === colorFilter);
    }).forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" style="width:100%">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="goToCheckout('${p.name}')">اكمال الطلبية</button>
        `;
        productList.appendChild(card);
    });
}

function goToCheckout(productName) {
    localStorage.setItem('selectedProduct', productName);
    window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productList')) {
        document.getElementById('filterCategory').addEventListener('change', renderProducts);
        document.getElementById('filterColor').addEventListener('change', renderProducts);
        renderProducts();
}

const shippingRates = {
    "Adrar": { home: 1100, office: 600 },
    "Chlef": { home: 700, office: 400 },
    "Laghouat": { home: 900, office: 400 },
    "Oum El Bouaghi": { home: 800, office: 400 },
    "Batna": { home: 800, office: 400 },
    "Béjaïa": { home: 700, office: 400 },
    "Biskra": { home: 1100, office: 600 },
    "Béchar": { home: 900, office: 500 },
    "Blida": { home: 500, office: 250 },
    "Bouira": { home: 650, office: 400 },
    "Tamanrasset": { home: 1300, office: 600 },
    "Tébessa": { home: 800, office: 500 },
    "Tlemcen": { home: 800, office: 400 },
    "Tiaret": { home: 800, office: 400 },
    "Tizi Ouzou": { home: 650, office: 400 },
    "Alger": { home: 700, office: 400 },
    "Djelfa": { home: 900, office: 500 },
    "Jijel": { home: 700, office: 400 },
    "Sétif": { home: 700, office: 400 },
    "Saïda": { home: 800, office: 400 },
    "Skikda": { home: 700, office: 400 },
    "Sidi Bel Abbès": { home: 700, office: 400 },
    "Annaba": { home: 700, office: 400 },
    "Guelma": { home: 800, office: 400 },
    "Constantine": { home: 700, office: 400 },
    "Médéa": { home: 700, office: 400 },
    "Mostaganem": { home: 700, office: 400 },
    "M’Sila": { home: 800, office: 500 },
    "Mascara": { home: 700, office: 400 },
    "Ouargla": { home: 1000, office: 500 },
    "Oran": { home: 700, office: 400 },
    "El Bayadh": { home: 1000, office: 500 },
    "Illizi": { home: 1300, office: 600 },
    "Bordj Bou Arreridj": { home: 700, office: 400 },
    "Boumerdès": { home: 600, office: 350 },
    "El Tarf": { home: 800, office: null },
    "Tindouf": { home: 1300, office: null },
    "Tissemsilt": { home: 800, office: 400 },
    "El Oued": { home: 900, office: 500 },
    "Khenchela": { home: 800, office: 500 },
    "Souk Ahras": { home: 800, office: 500 },
    "Tipaza": { home: 600, office: 350 },
    "Mila": { home: 700, office: 400 },
    "Aïn Defla": { home: 600, office: 400 },
    "Naâma": { home: 800, office: null },
    "Aïn Témouchent": { home: 700, office: 400 },
    "Ghardaïa": { home: 1000, office: 500 },
    "Relizane": { home: 700, office: 400 },
    "Timimoun": { home: 1300, office: null },
    "Ouled Djellal": { home: 900, office: null },
    "Beni Abbes": { home: 1300, office: null },
    "In Salah": { home: 1300, office: 600 },
    "Touggourt": { home: 900, office: null },
    "El M’Ghair": { home: 900, office: null },
    "El Meniaa": { home: 1000, office: null }
};

    }

});
