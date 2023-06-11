
const taskInput = document.getElementById("taskInput");
const button = document.getElementById("taskBtn");
const taskList = document.getElementById("toDoTask");
const master = document.getElementById("checkMaster");
const clearAllBtn = document.getElementById("clearAllBtn");
const deleteIcon = document.querySelector(".delete-icon");

button.addEventListener("click", () => {
  master.style.display = "flex";
  const inputValue = taskInput.value;

  if (inputValue !== "") {
    const listItem = document.createElement("li");
    listItem.classList.add("todoClass");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = inputValue;

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
    deleteIcon.addEventListener("click", () => {
      listItem.remove();

    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteIcon);
    taskList.appendChild(listItem);

    taskInput.value = "";
  } else {
    alert("Please add your task first!");
    master.style.display = "none";
  }
});

clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
