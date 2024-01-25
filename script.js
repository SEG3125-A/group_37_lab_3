const products = [
    { name: "Chicken", price: 2.5 },
    { name: "Apples", price: 3 },
    { name: "Carrot", price: 1.5 },
    { name: "Avacados", price: 2 },
    { name: "Rice", price: 1.8 },
    { name: "Frozen Pizza", price: 2.2 },
    { name: "Ramen", price: 3.5 },
    { name: "Milk", price: 2 },
    { name: "Eggs", price: 3 },
    { name: "Yogurt", price: 4 }
];

const customerPage = document.getElementById('customerPage');
const productsPage = document.getElementById('productsPage');
const cartPage = document.getElementById('cartPage');
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const total = document.getElementById('total');

function showCustomerPage() {
    customerPage.style.display = 'block';
    productsPage.style.display = 'none';
    cartPage.style.display = 'none';
}

function showProductsPage() {
    customerPage.style.display = 'none';
    productsPage.style.display = 'block';
    cartPage.style.display = 'none';
    renderProducts();
}

function showCartPage() {
    customerPage.style.display = 'none';
    productsPage.style.display = 'none';
    cartPage.style.display = 'block';
    displayCart();
}

function renderProducts() {
    productList.innerHTML = '';
    products.sort((a, b) => a.price - b.price).forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <p>${product.name}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
        totalPrice += item.price;
    });
    total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

showCustomerPage(); 