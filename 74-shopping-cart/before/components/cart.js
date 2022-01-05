const cartContainer = document.querySelector('[data-cart-container]');
const cartButton = document.querySelector('[data-cart-button]');

export function setupCart() {

  // Expand and collapse cart on click
  cartButton.addEventListener("click",() => {
    cartContainer.classList.toggle("invisible");
  })
}


