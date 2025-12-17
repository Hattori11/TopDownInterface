import { state } from "./state.js";
import { addSubproblem } from "./addSubProblems.js";

const modal = document.getElementById("add-problem");
const modalF = document.getElementById("add-function");
const closed = document.getElementById("closed-modal-p");
const closedF = document.getElementById("closed-modal-f");

function openMenu(problem) {
  if (!state.canListenAction) return;

  const problemName = problem.textContent;

  problem.innerHTML =
    "<button id='add-sub'>Adicionar subproblema</button> <button id='add-fun'>Adicionar função</button> <div><input type='checkbox' /> <label>Problema resolvido</label></div>";
  problem.style.fontSize = "initial"; // normaliza a font
  problem.style.justifyContent = "space-evenly";

  // Adiciona event listener pro botão add function
  const openModalF = document.getElementById("add-fun");
  openModalF.addEventListener("click", () => {
    modalF.showModal();

    closedF.addEventListener("click", (event) => {
      event.preventDefault();

      modalF.close();
    })
  })

  return problemName;
}

function closedMenu(containerProblem, problemName) {
  containerProblem.innerHTML = "";
  containerProblem.textContent = problemName;

  containerProblem.style.fontSize = "1.8em";
  containerProblem.style.justifyContent = "center";
}

const containerProblens = document.getElementById("container-problem");

containerProblens.addEventListener("click", (event) => {
  const problem = event.target.closest(".node");
  if (!problem) return;

  const containerDad = problem.parentNode;

  const problemName = openMenu(problem);

  const addSub = document.getElementById("add-sub");
  addSub.addEventListener("click", () => {
    closedMenu(problem, problemName);
    modal.showModal();

    // addSubproblem(containerDad);

    closed.addEventListener("click", (event) => {
      event.preventDefault();
      addSubproblem(containerDad);
      modal.close();
    }, { once: true });
  });
});