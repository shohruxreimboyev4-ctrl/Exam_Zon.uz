// --- Mahsulotlar ---
const fallbackProducts = [
  { id: 1, name: "Болгарка (УШМ) 180 мм Metabo WEPBA 19-180", price: "4 194 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%BA%D0%B0%20(%D0%A3%D0%A8%D0%9C)%20180%20%D0%BC%D0%BC%20Metabo%20WEPBA%2019-180%20Quick%20RT%20-%20601099000.png" },
  { id: 2, name: "Небулайзер Ulaizer Air+ VP-D2", price: "550 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%9A%D0%BE%D0%BC%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%BD%D1%8B%D0%B9%20%D0%B8%D0%BD%D0%B3%D0%B0%D0%BB%D1%8F%D1%82%D0%BE%D1%80%20Ulaizer%20Home%20CN-02MY.png" },
  { id: 3, name: "Строительный фен Hikoki RH650V", price: "1 100 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B5%D0%BD%20Hikoki%20RH650V.png" },
  { id: 4, name: "Ноутбук Lenovo IdeaPad Gaming 3 16 AMD Ryzen-7", price: "14 750 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%20Lenovo%20IdeaPad%20Gaming%203%2016_%20AMD%20Ryzen-7%206800H%2016%D0%93%D0%B1%20DDR5%20512%D0%93%D0%B1%20SSD%20(82SC0046RK).png" },
  { id: 5, name: "Ударная дрель Metabo SBE 650", price: "1 020 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%A3%D0%B4%D0%B0%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B4%D1%80%D0%B5%D0%BB%D1%8C%20Metabo%20SBE%20650.png" },
  { id: 6, name: "Паркетный лак 13 кг Sobsan Sobvernik Parket", price: "800 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BB%D0%B0%D0%BA%2013%20%D0%BA%D0%B3%20Sobsan%20Sobvernik%20Parket%20Laki%20-%20%20M%D0%90%D0%A2%D0%9E%D0%92%D0%AB%D0%99.png" },
  { id: 7, name: "Пятискоростная болгарка(УШМ) 125мм Makita", price: "7 250 000 сум", image: "https://raw.githubusercontent.com/Azamat493/images/f5f140635e428f9f31f0c71ff282c87ed4323b0c/%D0%9F%D1%8F%D1%82%D0%B8%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%B0%D1%8F%20%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%BA%D0%B0%20(%D0%A3%D0%A8%D0%9C)%20125%D0%BC%D0%BC%20Makita%20DGA511Z.png" },
  { id: 8, name: "Перфоратор Bosch GBH 2-26 DRE", price: "3 200 000 сум", image: "https://avatars.mds.yandex.net/get-mpic/4884224/2a0000019633b486f5d2b9d41d9aa1801afe/600x800" },
  { id: 9, name: "Отбойный молоток Makita HM1203C", price: "6 900 000 сум", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIkgUw_kXHOtbUwHnx_ZL_y0T9-Fc3_MZCnXy2Lx-ETI9teJOL1gZiqfl_VBUtHxGX39HdMO33U7HTTRb2BPU-NqHOVcV1raVaHoZLydbgIW-jsktCcHrGfr3X5yWSANOv0mS7WQE&usqp=CAc" },
  { id: 10, name: "Шлифовальная машина DeWalt DWE6423", price: "1 700 000 сум", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMttXTvrPtO0BDzaN7yKptRgARFuj_xcTV0tSAr2JWg-3RzCvCTKzt-eRqB987nr_CnEOsDCvDLXwiYMt_LwZaR5nF6rEcJBAEH1CQo9c7oU1MF-XplbmS0JNMyt9IqzjBXQM&usqp=CAc" },
  { id: 11, name: "Бетономешалка Denzel B-180", price: "2 450 000 сум", image: "https://elektrosnab.uz/thumb/2/iY9gIBI8XR0daDGbsnwDpQ/750r750/d/72947696-gigapixel-standard-scale-2_00x.webp" },
  { id: 12, name: "Генератор Firman ECO 8990ES", price: "4 600 000 сум", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPGveDXmKwmPO4nzRjLFRs5ZA8LfJZnbPbpUcNHVaxo1aWry3YqH9gmg72eRm5tFtDoX6Tu8BhJU97upTbgiusyyIF9ZsjRsctXM5uPMNUs950-DJQlGRULbZf7EMykM3o&usqp=CAc" },
];

// --- Section yaratish ---
function createSection(title, count) {
  const section = document.createElement("section");
  section.className = "max-w-[1320px] w-[90%] mx-auto mb-16";

  const heading = document.createElement("h2");
  heading.textContent = title;
  heading.className = "text-2xl font-bold mb-6";
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-6 gap-4";
  section.appendChild(grid);

  fallbackProducts.slice(0, count).forEach(item => addCard(item, grid));
  document.body.appendChild(section);
}

// --- Card yaratish ---
function addCard(item, grid) {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow flex flex-col relative";

  const imgWrap = document.createElement("div");
  imgWrap.className = "relative mb-3";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.className = "w-full h-40 object-contain rounded";
  imgWrap.appendChild(img);

  const heart = document.createElement("button");
  heart.className = "heart-btn absolute top-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100";
  heart.innerHTML = '<i class="fa-regular fa-heart text-gray-600"></i>';
  heart.dataset.id = item.id;
  imgWrap.appendChild(heart);

  const name = document.createElement("h3");
  name.className = "text-sm font-medium mb-2 h-10 overflow-hidden";
  name.textContent = item.name;

  const footer = document.createElement("div");
  footer.className = "flex items-center justify-between mt-auto";

  const price = document.createElement("p");
  price.className = "font-bold text-gray-800 text-lg";
  price.textContent = item.price;

  const cart = document.createElement("button");
  cart.className = "cart-btn bg-blue-500 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-blue-600";
  cart.innerHTML = '<i class="fa-solid fa-cart-shopping text-sm"></i>';
  cart.dataset.id = item.id;

  footer.append(price, cart);
  card.append(imgWrap, name, footer);
  grid.appendChild(card);
}

// --- Render ---
createSection("Популярные", 7);
createSection("Бестселлеры", 6);
createSection("Новинки", 6);
createSection("Товары со скидкой", 12);

// --- Eventlar ---
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".heart-btn");
  if (heart) {
    const icon = heart.querySelector("i");
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("text-red-500");
  }

  const cart = e.target.closest(".cart-btn");
  if (cart) {
    const id = cart.dataset.id;
    const product = fallbackProducts.find(p => p.id == id);
    if (!product) return;

    let basket = JSON.parse(localStorage.getItem("cart")) || [];
    const item = basket.find(i => i.id === product.id);
    const priceNum = parseInt(product.price.replace(/\s/g, '').replace('сум','')) || 0;

    if (item) item.count += 1;
    else basket.push({ id: product.id, title: product.name, price: priceNum, image: product.image, count: 1 });

    localStorage.setItem("cart", JSON.stringify(basket));

    cart.classList.add("scale-90");
    setTimeout(() => cart.classList.remove("scale-90"), 200);

    window.location.href = "basket/cart.html";
  }
});


