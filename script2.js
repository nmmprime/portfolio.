const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = [];

// Toggle cart sidebar
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.toggle("hidden");
});

// Add to cart
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCart();
  });
});

// Update cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - $${item.price * item.qty}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  alert("Checkout complete! 🎉");
  cart = [];
  updateCart();
  cartSidebar.classList.add("hidden");
});
