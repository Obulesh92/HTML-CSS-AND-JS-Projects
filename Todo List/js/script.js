function addTask() {
    let taskInput = document.querySelector(".taskinput");
    let taskValue = taskInput.value.trim();
    if (taskValue == "") {
        alert("Add some Task!");
        exit();
    }

    let li = document.createElement("li");
    li.textContent = taskValue;
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.onclick = function() {
        this.remove();
        li.remove();
    }
    a = document.querySelector(".list").appendChild(li);
    a.appendChild(button)
    taskInput.value = "";
}
