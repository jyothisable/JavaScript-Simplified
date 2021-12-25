const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

const handleClick = () => {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    overlay.classList.remove("open");
  } else {
    modal.classList.add("open");
    overlay.classList.add("open");
  }
};

openModalButton.onclick = handleClick;
closeModalButton.onclick = handleClick;
overlay.onclick = handleClick;
