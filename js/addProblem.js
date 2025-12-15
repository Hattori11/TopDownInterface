const modal = document.getElementById("add-problem");
const open = document.querySelector("section#container-problem > div.container-add");
const closed = document.getElementById("closed-modal");

open.addEventListener("click", () => {
  modal.showModal();
});

closed.addEventListener("click", () => {
  modal.close();
});