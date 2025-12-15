const modal = document.getElementById("add-problem");
const open = document.querySelector("section#container-problem > div.container-add");
const closed = document.getElementById("closed-modal");
const input = document.querySelector("dialog#add-problem > form > input");
const containerProblem = document.getElementById("container-problem");

import { state } from './state.js';

open.addEventListener("click", () => {
  modal.showModal();
});

closed.addEventListener("click", (event) => {
  event.preventDefault();
  
  const level0 = document.createElement("div");
  level0.setAttribute("class", "level level-0");
  const problem = document.createElement("div");
  problem.setAttribute("class", "node");

  problem.textContent = input.value;

  level0.appendChild(problem);
  containerProblem.appendChild(level0);

  open.style.display = "none";
  containerProblem.style.justifyContent = "flex-start";

  state.canListenAction = true;

  modal.close();
});