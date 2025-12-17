const openModalF = document.querySelector(
  "section#container-functions > div.container-add"
);
const closedModalF = document.getElementById("closed-modal-f");
const modalFunction = document.getElementById("add-function");

openModalF.addEventListener("click", () => {
    modalFunction.showModal();

    closedModalF.addEventListener("click", (event) => {
        event.preventDefault();

        modalFunction.close(); 
    });
});