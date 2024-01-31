const products = [
    { name: "Chicken", price: 2.5, organic: false, vegetarian: false, glutenFree: true, category: "Meats", imageUrl:'https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/chicken-at-grocery-store.jpg?quality=82&strip=1' },
    { name: "Apples", price: 3, organic: true, vegetarian: true, glutenFree: true, category: "Fruits", imageUrl:'https://i.cbc.ca/1.4878519.1540496659!/fileImage/httpImage/apples-in-a-grocery-store.JPG'},
    { name: "Carrot", price: 1.5, organic: true, vegetarian: true, glutenFree: true, category: "Vegetables", imageUrl:'https://previews.123rf.com/images/pixinoo/pixinoo1610/pixinoo161000589/64844738-closeup-on-fresh-carrots-in-the-grocery-store.jpg' },
    { name: "Avocados", price: 2, organic: false, vegetarian: true, glutenFree: true, category: "Fruits", imageUrl:'https://www.tastingtable.com/img/gallery/the-real-reason-you-will-see-more-avocados-at-the-grocery-store/l-intro-1657825961.jpg' },
    { name: "Rice", price: 1.8, organic: false, vegetarian: true, glutenFree: true, category: "Grains", imageUrl:'https://www.thedailymeal.com/img/gallery/is-there-any-benefit-to-freezing-uncooked-rice/intro-1682088327.jpg' },
    { name: "Frozen Pizza", price: 2.2, organic: false, vegetarian: false, glutenFree: false, category: "Processed Foods", imageUrl:'https://www.biggerbolderbaking.com/wp-content/uploads/2022/05/Frozen-Pizza-Thumbnail1-1-scaled.jpg' },
    { name: "Ramen", price: 3.5, organic: false, vegetarian: true, glutenFree: false, category: "Processed Foods", imageUrl:'https://www.killingthyme.net/wp-content/uploads/2015/10/homemade-ramen-bowls-5.jpg' },
    { name: "Milk", price: 2, organic: true, vegetarian: true, glutenFree: true, category: "Dairy", imageUrl:'https://www.southernliving.com/thmb/zCKBQZG85v0gxUpn5Nm_8elGJaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1413944242-79c406e0bbe4435596bc671f95a949cb.jpg' },
    { name: "Eggs", price: 3, organic: true, vegetarian: true, glutenFree: true, category: "Dairy", imageUrl:'https://www.treehugger.com/thmb/awFw6Q8oeCGnyWsWRucYSPN7tuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brown-eggs-529835225-0a51ab197b4b4f959fa06319c26e61fd.jpg' },
    { name: "Yogurt", price: 4, organic: true, vegetarian: true, glutenFree: false, category: "Dairy", imageUrl:'https://cdn.shopify.com/s/files/1/0571/3933/1129/files/Spoonful_greek-yog1.png?v=1664900508' }
];

// DOM elements
const customerPage = document.getElementById('customerPage');
const productsPage = document.getElementById('productsPage');
const cartPage = document.getElementById('cartPage');
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const total = document.getElementById('total');

// Page Display Functions
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

// Product Filtering
function filterProducts() {
    const isVegetarian = document.getElementById('vegetarian').checked;
    const isGlutenFree = document.getElementById('glutenAllergy').checked;
    const organicPreference = document.getElementById('organicPreference').value;
    const selectedCategory = document.getElementById('categoryFilter').value;

    return products.filter(product => {
        return (selectedCategory === 'all' || product.category === selectedCategory) &&
               (organicPreference === 'all' || (organicPreference === 'organic' && product.organic) || (organicPreference === 'nonOrganic' && !product.organic)) &&
               (!isVegetarian || product.vegetarian) &&
               (!isGlutenFree || product.glutenFree);
    });
}

// Render Products
function renderProducts() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredProducts = filterProducts().filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
    );

    productList.innerHTML = '';

    const categories = [...new Set(filteredProducts.map(product => product.category))];
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h3');
        categoryTitle.innerText = category;
        categoryDiv.appendChild(categoryTitle);

        const productsDiv = document.createElement('div');
        productsDiv.classList.add('products');

        filteredProducts.filter(product => product.category === category).forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
                <img src="${product.imageUrl}" alt="Image of ${product.name}">
                <p>${product.name}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            `;
            productsDiv.appendChild(div);
        });

        categoryDiv.appendChild(productsDiv);
        productList.appendChild(categoryDiv);
    });
}

// Cart Functionality
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
