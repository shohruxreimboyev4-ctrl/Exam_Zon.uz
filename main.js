fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data) => console.log(data));

const cards = document.querySelector('.cards');

fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      cards.innerHTML += `<div class="flex flex-wrap gap-[px] ">
  <div
    class="bg-white rounded-[2px] border border-[#e6e6e6] shadow-md hover:shadow-lg transition w-full h-[380px] flex flex-col"
  >
    <div class="h-[250px] relative">
      <i class="fa-regular fa-heart absolute top-2 right-2 text-gray-600 bg-white p-2 rounded-full"></i>
      <img
        src="${item.image}"
        alt="Mahsulot rasmi"
        class="w-[80%] h-[80%] ml-[10%] object-cover"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-sm  font-medium text-gray-800 text-center">
          ${item.name}
        </h3>
        <p class="text-center text-blue-600 font-semibold text-l ">
          ${item.price} so'm
        </p>
      </div>

      <img
        class="w-[45px] ml-[70%] mb-[10px]  text-white rounded-lg text-sm border rounded-[50%] p-[10px]  hover:bg-blue-700 transition" src="${item.button}"
     / >
       
      
    </div>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log('xato', error));
