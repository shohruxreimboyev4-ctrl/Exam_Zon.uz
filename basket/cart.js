// cart.js

const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (!cart.length) {
    cartList.innerHTML = `
      <div class="bg-white p-8 rounded shadow text-center text-lg">
        Ваша корзина пуста
      </div>`;
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;
  cartList.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${cart
        .map(
          (item) => `
        <div class="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row items-center gap-4">
          <img src="${item.image}" alt="${item.title}" class="w-32 h-32 object-contain" />
          <div class="flex-1">
            <div class="font-bold mb-2">${item.title}</div>
            <div class="mb-2">Цена: <b>${item.price} сум</b></div>
            <div class="flex items-center gap-2">
              <button class="minus-btn px-2 py-1 bg-gray-200 rounded" data-id="${item.id}">-</button>
              <span class="font-bold">${item.count}</span>
              <button class="plus-btn px-2 py-1 bg-gray-200 rounded" data-id="${item.id}">+</button>
            </div>
          </div>
          <button class="remove-btn text-red-500 text-xl" data-id="${item.id}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>`
        )
        .join("")}
    </div>`;

  cart.forEach((item) => (total += item.price * item.count));
  cartTotal.textContent = total.toLocaleString();

  // button actions
  cartList.querySelectorAll(".plus-btn").forEach((btn) =>
    btn.addEventListener("click", () => updateCount(btn.dataset.id, 1))
  );
  cartList.querySelectorAll(".minus-btn").forEach((btn) =>
    btn.addEventListener("click", () => updateCount(btn.dataset.id, -1))
  );
  cartList.querySelectorAll(".remove-btn").forEach((btn) =>
    btn.addEventListener("click", () => removeItem(btn.dataset.id))
  );
}

function updateCount(id, delta) {
  const item = cart.find((i) => i.id == id);
  if (!item) return;
  item.count += delta;
  if (item.count < 1) cart = cart.filter((i) => i.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
