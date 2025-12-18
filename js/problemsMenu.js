import { state } from "./state.js";
import { addSubproblem } from "./addSubProblems.js";
import { addFunction } from "./addFunction.js";

const modal = document.getElementById("add-problem");
const modalF = document.getElementById("add-function");
const closed = document.getElementById("closed-modal-p");
const closedF = document.getElementById("closed-modal-f");

function openMenu(problem) {
  if (!state.canListenAction) return;

  const problemName = problem.textContent;

  problem.innerHTML =
    "<button class='add-sub'>Adicionar subproblema</button> <button class='add-fun'>Adicionar função</button> <div><input type='checkbox' /> <label>Problema resolvido</label></div>";
  problem.style.fontSize = "initial"; // normaliza a font
  problem.style.justifyContent = "space-evenly";

  // Adiciona event listener pro botão add function
  const opensModalF = document.getElementsByClassName("add-fun");

  for (const open of opensModalF) {
    open.addEventListener("click", () => {
      modalF.showModal();
      const inputFuncName = document.querySelector(
        "dialog#add-function > form > input"
      );


      closedF.addEventListener("click", (event) => {
        event.preventDefault();

        addFunction(inputFuncName.value, problemName);

        inputFuncName.value = ""; // Apaga o que foi digitado

        const allStatus = document.getElementsByClassName("status pendente");
        for (const status of allStatus) {
          status.addEventListener("click", () => {
            status.classList.remove("pendente");
            status.classList.add("concluido");
            status.textContent = "concluído";
          });
        }

        closedMenu(problem, problemName);

        modalF.close();
      }, {once: true});
    });
  }

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

  const addSub = document.getElementsByClassName("add-sub");

  for (const add of addSub) {
    add.addEventListener("click", () => {
      closedMenu(problem, problemName);
      modal.showModal();

      // addSubproblem(containerDad);

      closed.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          addSubproblem(containerDad);
          modal.close();
        },
        { once: true }
      );
    });
  }
});
