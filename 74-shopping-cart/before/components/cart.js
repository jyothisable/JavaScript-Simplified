import jsonItems from "../data/items";
const cartContainer = document.querySelector("[data-cart-container]");
const cartButton = document.querySelector("[data-cart-button]");
const template = document.querySelector("#item-template");
const IMAGE_URL = "https://dummyimage.com/210x130/";
const currencyFormatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "INR",
});

let cartValue = 0

export function setupCart() {
  // add to cart
  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-add-to-cart-button]")) {
      const id = event.target.closest("[data-id]").dataset.id;
      addToCart(id);
    }
  });
  // Expand and collapse cart on click
  cartButton.addEventListener("click", () => {
    cartContainer.classList.toggle("invisible");
  });
}

function addToCart(id) {
  // make cart button visible
  cartButton.classList.remove("invisible");
  // add value to cart
  cartValue = cartValue + jsonItems.find((item) => item.id == id).priceCents;
  // update cart value
  document.querySelector("[data-cartValue]").innerText = currencyFormatter.format(cartValue/100);
  // see if it already exist => just increase count
  const item = cartContainer.querySelector(`[data-id="${id}"]`);
  if (item) {
    const counter = item.querySelector("[data-count]");
    counter.innerText = parseInt(counter.innerText) + 1;
    return
  }

  // if not exist => create new item
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
