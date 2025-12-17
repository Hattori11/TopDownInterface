const inputSubproblem = document.querySelector("dialog#add-problem form input");
const containerProblens = document.getElementById("container-problem");

let localLevel = 0;

export function addSubproblem(level) {
    if (level.className == `level level-${localLevel}`) {
        localLevel++;
        const newLevel = document.createElement("div");
        newLevel.setAttribute("class", `level level-${localLevel}`);
        const node = document.createElement("div");
        node.setAttribute("class", "node");
        node.textContent = inputSubproblem.value;
        inputSubproblem.value = "";

        newLevel.appendChild(node);
        containerProblens.appendChild(newLevel);
    } else {
        const containerBottom = level.nextElementSibling;
        const node = document.createElement("div");
        node.setAttribute("class", "node");
        node.textContent = inputSubproblem.value;
        inputSubproblem.value = "";

        containerBottom.appendChild(node);
    }
}