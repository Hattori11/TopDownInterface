const modal = document.getElementById("add-problem");
const open = document.querySelector("section#container-problem > div.container-add");
const closed = document.getElementById("closed-modal-p");
const input = document.querySelector("dialog#add-problem > form > input");
const containerProblem = document.getElementById("container-problem");
const select = document.getElementById("options-problems");

import { state } from './state.js';

open.addEventListener("click", () => {
  modal.showModal();
});

function addProblem(event) {
  event.preventDefault();

  const level0 = document.createElement("div");
  level0.setAttribute("class", "level level-0");
  const problem = document.createElement("div");
  problem.setAttribute("class", "node");

  problem.textContent = input.value;
  const option = document.createElement("option");
  option.setAttribute("value", `${input.value}`);
  option.textContent = `${input.value}`;
  select.appendChild(option);
  input.value = ""; // Deixa vazio o input

  level0.appendChild(problem);
  containerProblem.appendChild(level0);

  open.style.display = "none";
  containerProblem.style.justifyContent = "flex-start";

  state.canListenAction = true;

  closed.removeEventListener("click", addProblem);

  modal.close();
}

closed.addEventListener("click", addProblem);