let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCheckoutCart() {
  let cartList = document.getElementById("checkoutCart");
  let total = 0;
  cartList.innerHTML = "";
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });
  document.getElementById("checkoutTotal").textContent = "Total: ₹" + total;
}

function placeOrder() {
  alert("✅ Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

displayCheckoutCart();
