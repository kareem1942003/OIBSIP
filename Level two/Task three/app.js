const inputTitel = document.getElementById("inputTitel");
const textarea = document.getElementById("textarea");
const addTaskBtn = document.getElementById("addTask");
const tasksBox = document.getElementById("tasks");

addTaskBtn.addEventListener("click", () => {
  if (inputTitel.value !== "" && textarea.value !== "") {
    console.log("succss");
    const task = document.createElement("div");
    task.className = "task";
    const title = document.createElement("h4");
    title.textContent = inputTitel.value;
    task.appendChild(title);
    const desc = document.createElement("textarea");
    desc.className = "descarea";
    desc.type = "text";
    desc.setAttribute("readonly", "readonly");
    desc.value = textarea.value;
    task.appendChild(desc);
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    task.appendChild(edit);
    const deBtn = document.createElement("button");
    deBtn.id = "delete";
    deBtn.textContent = "Delete";
    task.appendChild(deBtn);
    tasksBox.append(task);
    inputTitel.value = "";
    textarea.value = "";

    title.addEventListener("click", () => {
      task.style.color = "rgb(208, 57, 57)";
      desc.style.color = "rgb(208, 57, 57)";
    });

    edit.addEventListener("click", () => {
      if (edit.textContent === "Edit") {
        desc.removeAttribute("readonly");
        desc.focus();
        desc.style.backgroundColor = "rgb(121, 163, 200)";
        edit.textContent = "Save";
      } else {
        edit.textContent = "Edit";
        desc.style.backgroundColor = "white";
        desc.setAttribute("readonly", "readonly");
      }
    });

    deBtn.addEventListener("click", () => {
      tasksBox.removeChild(task);
    });
  }
});
