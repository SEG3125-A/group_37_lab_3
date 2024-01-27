const products = [
    { name: "Chicken", price: 2.5, organic: false, vegetarian: false, glutenFree: true },
    { name: "Apples", price: 3, organic: true, vegetarian: true, glutenFree: true },
    { name: "Carrot", price: 1.5, organic: true, vegetarian: true, glutenFree: true },
    { name: "Avocados", price: 2, organic: false, vegetarian: true, glutenFree: true },
    { name: "Rice", price: 1.8, organic: false, vegetarian: true, glutenFree: true },
    { name: "Frozen Pizza", price: 2.2, organic: false, vegetarian: false, glutenFree: false },
    { name: "Ramen", price: 3.5, organic: false, vegetarian: true, glutenFree: false },
    { name: "Milk", price: 2, organic: true, vegetarian: true, glutenFree: true },
    { name: "Eggs", price: 3, organic: true, vegetarian: true, glutenFree: true },
    { name: "Yogurt", price: 4, organic: true, vegetarian: true, glutenFree: false }
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

function filterProducts() {
    const isVegetarian = document.getElementById('vegetarian').checked;
    const isGlutenFree = document.getElementById('glutenAllergy').checked;
    const organicPreference = document.getElementById('organicPreference').value;

    return products.filter(product => {
        return (organicPreference === 'all' || (organicPreference === 'organic' && product.organic) || (organicPreference === 'nonOrganic' && !product.organic)) &&
               (!isVegetarian || product.vegetarian) &&
               (!isGlutenFree || product.glutenFree);
    });
}

function renderProducts() {
    const filteredProducts = filterProducts();
    productList.innerHTML = '';
    filteredProducts.sort((a, b) => a.price - b.price).forEach(product => {
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

// Show the Customer Page by default
showCustomerPage();
