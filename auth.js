function signup(event) {
  event.preventDefault();
  let username = document.getElementById("newUsername").value;
  let password = document.getElementById("newPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let exists = users.find(u => u.username === username);

  if (exists) {
    alert("❌ Username already exists!");
  } else {
    users.push({username, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("✅ Signup successful! Please login.");
    window.location.href = "login.html";
  }
}

function login(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let validUser = users.find(u => u.username === username && u.password === password);

  if (validUser) {
    localStorage.setItem("loggedInUser", username);
    alert("✅ Login successful!");
    window.location.href = "index.html";
  } else {
    alert("❌ Invalid credentials!");
  }
}
