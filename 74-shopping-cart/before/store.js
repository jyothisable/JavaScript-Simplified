import jsonItems from './items';

const template = document.querySelector("#cart-item-template");
const IMAGE_URL = "https://dummyimage.com/420x260/";
const currencyFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'INR'
});

export function fetchData() {
  const newItem = template.content.cloneNode(true)
  jsonItems.forEach(item => fetchItem(item));
}

function fetchItem(item) {
  const newItem = template.content.cloneNode(true);
  newItem.querySelector('[data-id]').dataset.id = item.id;
  newItem.querySelector("[data-name]").innerText = item.name;
  newItem.querySelector("[data-priceCents]").innerText = currencyFormatter.format(item.priceCents/100);
  newItem.querySelector("[data-imageColor]").src = `${IMAGE_URL}${item.imageColor}/${item.imageColor}`;
  template.parentElement.appendChild(newItem)
}
