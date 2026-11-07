let products = [
  {name: "Shoes", price: 1200, img: "images/shoes.jpg", category: "men"},
  {name: "Bag", price: 800, img: "images/bag.jpg", category: "women"},
  {name: "Watch", price: 1500, img: "images/watch.jpg", category: "accessories"},
  {name: "T-Shirt", price: 500, img: "images/T-Shirt.jpg", category: "men"},
  {name: "Dress", price: 2999, img: "images/dress.jpg", category: "women"},
  {name: "Saree", price: 3000, img: "images/Saree.jpg", category: "women"},
  {name: "Mens Jeans", price: 1500, img: "images/Mens Jeans.jpg", category: "men"},
  {name: "Kurti Pant Set", price: 2500, img: "images/Kurti Pant Set.jpg", category: "women"}
];

let cart = [];

function displayProducts(list) {
  let container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(i) {
  cart.push(products[i]);
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart");
  let total = 0;
  cartList.innerHTML = "";
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });
  document.getElementById("total").textContent = "Total: ₹" + total;

  localStorage.setItem("cart", JSON.stringify(cart));
}

document.getElementById("search").addEventListener("input", filterProducts);
document.getElementById("category").addEventListener("change", filterProducts);

function filterProducts() {
  let query = document.getElementById("search").value.toLowerCase();
  let category = document.getElementById("category").value;

  let filtered = products.filter(p => {
    let matchesSearch = p.name.toLowerCase().includes(query);
    let matchesCategory = (category === "all" || p.category === category);
    return matchesSearch && matchesCategory;
  });

  displayProducts(filtered);
}

displayProducts(products);
