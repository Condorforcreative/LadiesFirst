const products = [
    { id: 1, name: "حقيبة يد فاخرة", category: "حقائب", color: "بني", price: "3000 دج", image: "assets/products/bag1.png" },
    { id: 2, name: "محفظة جلد", category: "محافظ", color: "أسود", price: "1500 دج", image: "assets/products/wallet1.png" },
    { id: 3, name: "حقيبة GUESS", category: "حقائب", color: "أسود", price: "4000 دج", image: "assets/products/bag2.png" }
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
});
