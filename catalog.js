let catalogItem = [
  { image: "assets/images/about/item1.jpg", name: "Коврик", price: 5100 },
  { image: "assets/images/about/item2.jpg", name: "Аромапалочки", price: 2000 },
  { image: "assets/images/about/item3.jpg", name: "Глюкофон", price: 900 },
  { image: "assets/images/about/5.jpg", name: "Свечи", price: 1100 },
  { image: "assets/images/about/8.jpg", name: "Медитация(1 час)", price: 2000 },
];

let catalogItemNow = [];

document.querySelector("button").addEventListener("click", function () {
  let minPrice = parseInt(document.querySelector("input:nth-of-type(1)").value);
  let maxPrice = parseInt(document.querySelector("input:nth-of-type(2)").value);
  catalogItemNow = catalogItem;
  let filteredItems;
  if (minPrice < maxPrice) {
    filteredItems = catalogItemNow.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    displayCatalogItems(filteredItems);
  }
});

// Обработчик события на кнопку "По убыванию"
document.getElementById("incr_button").addEventListener("click", function () {
  catalogItemNow.sort((a, b) => b.price - a.price);
  displayCatalogItems(catalogItemNow);
});

// Обработчик события на кнопку "По возрастанию"
document.getElementById("decr_button").addEventListener("click", function () {
  catalogItemNow.sort((a, b) => a.price - b.price);
  displayCatalogItems(catalogItemNow);
});

function displayCatalogItems(items) {
  let catalogContainer = document.querySelector(".container1");
  catalogContainer.innerHTML = "";
  items.forEach((item) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    let itemName = document.createElement("div");
    itemName.textContent = item.name;
    itemName.classList.add("caption");

    let itemPrice = document.createElement("div");
    itemPrice.textContent = item.price + "р";
    itemPrice.classList.add("caption-price");

    let itemImg = document.createElement("img");
    itemImg.src = item.image;
    itemImg.classList.add("product-img");

    productContainer.appendChild(itemImg);
    productContainer.appendChild(itemName);
    productContainer.appendChild(itemPrice);
    catalogContainer.appendChild(productContainer);
  });
  catalogItemNow = items;
}
displayCatalogItems(catalogItem);
