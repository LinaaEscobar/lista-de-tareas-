
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        // Crear botón para eliminar tarea
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "❌"; // Emoji de eliminar
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Evitar que se ejecute el evento del li
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskItem.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
