import { state } from "./state.js";

function openMenu(problem) {
  if (!state.canListenAction) return;

  const problemName = problem.textContent;

  problem.innerHTML =
    "<button>Adicionar subproblema</button> <button>Adicionar função</button> <div><input type='checkbox' /> <label>Problema resolvido</label></div>";
  problem.style.fontSize = "initial"; // normaliza a font
  problem.style.justifyContent = "space-evenly";

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

  const problemName = openMenu(problem);
});
