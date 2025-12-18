const openModalF = document.querySelector(
  "section#container-functions > div.container-add"
);
const closedModalF = document.getElementById("closed-modal-f");
const modalFunction = document.getElementById("add-function");
const containerFunctions = document.querySelector("tbody");

export function addFunction(functionName, problem) {
  const row = document.createElement("tr");

  // TD da função
  const tdFunction = document.createElement("td");
  tdFunction.textContent = functionName;
  row.appendChild(tdFunction);

  // TD do problema
  const tdProblem = document.createElement("td");
  tdProblem.textContent = problem;
  row.appendChild(tdProblem);

  // TD do status
  const tdStatus = document.createElement("td");
  const span = document.createElement("span");
  span.className = "status pendente";
  span.textContent = "pendente";
  span.style.cursor = "pointer";
  tdStatus.appendChild(span);
  row.appendChild(tdStatus);

  containerFunctions.appendChild(row);
}

openModalF.addEventListener("click", () => {
  modalFunction.showModal();

  const functionContainer = modalFunction.querySelector("form > input");
  const select = modalFunction.querySelector("select");


  closedModalF.addEventListener("click", (event) => {
    event.preventDefault();

    const functionName = functionContainer.value;
    const problemName = select.value;

    console.log(functionName);
    console.log(problemName);

    addFunction(functionName, problemName);

    const allStatus = document.getElementsByClassName("status pendente");
    for (const status of allStatus) {
      status.addEventListener("click", () => {
        status.classList.remove("pendente");
        status.classList.add("concluido");
        status.textContent = "concluído";
      });
    }

    modalFunction.close();
  }, {once: true});
});
