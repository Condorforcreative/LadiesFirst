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
    const categoryFilter = document.getElementById('filterCategory')?.value || "";
    const colorFilter = document.getElementById('filterColor')?.value || "";

    productList.innerHTML = "";

    products
        .filter(p => {
            return (!categoryFilter || p.category === categoryFilter) &&
                   (!colorFilter || p.variants.includes(colorFilter));
        })
        .forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';

            // Variant dropdown
            let variantDropdown = `
                <select id="variant-${p.id}">
                    ${p.variants.map(v => `<option value="${v}">${v}</option>`).join('')}
                </select>
            `;

            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}" style="width:100%">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
                ${variantDropdown}
                <button onclick="goToCheckout(${p.id})">اكمال الطلبية</button>
            `;

            productList.appendChild(card);
        });
}

function goToCheckout(productId) {
    const product = products.find(p => p.id === productId);
    const selectedVariant = document.getElementById(`variant-${productId}`).value;

    // Save both product and variant
    localStorage.setItem('selectedProduct', JSON.stringify({
        name: product.name,
        price: product.price,
        variant: selectedVariant
    }));

    window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productList')) {
        document.getElementById('filterCategory').addEventListener('change', renderProducts);
        document.getElementById('filterColor').addEventListener('change', renderProducts);
        renderProducts();
    }
});
