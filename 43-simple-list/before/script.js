const input = document.querySelector("#item-input");
const form = document.querySelector("#new-item-form");

const handleSubmit = (e) => {
  e.preventDefault();
  let newItem = document.createElement("div");
  newItem.classList.add("list-item");
  newItem.innerText = input.value;
  document.querySelector("#list").appendChild(newItem);
  input.value = "";
  newItem.onclick = () => {
    newItem.remove();
  }
  
};

form.onsubmit = handleSubmit;
