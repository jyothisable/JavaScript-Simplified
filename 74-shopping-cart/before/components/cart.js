import jsonItems from "../data/items";
const cartContainer = document.querySelector("[data-cart-container]");
const cartButton = document.querySelector("[data-cart-button]");
const template = document.querySelector("#item-template");
const IMAGE_URL = "https://dummyimage.com/210x130/";
const currencyFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "INR",
});

export function setupCart() {
  // add to cart

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-add-to-cart-button]")) {
      const id = event.target.closest('[data-id]').dataset.id;
      addToCart(id);
    }
  });
  // Expand and collapse cart on click
  cartButton.addEventListener("click", () => {
    cartContainer.classList.toggle("invisible");
  });
}

function addToCart(id) {
  jsonItems.forEach((item) => {
    if (item.id == id) {
      const newItem = template.content.cloneNode(true);
      newItem.querySelector("[data-id]").dataset.id = item.id;
      newItem.querySelector("[data-name]").innerText = item.name;
      newItem.querySelector("[data-priceCents]").innerText =
        currencyFormatter.format(item.priceCents / 100);
      newItem.querySelector(
        "[data-imageColor]"
      ).src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`;
      template.parentElement.appendChild(newItem);
    }
  });
}
