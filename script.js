const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";

        // Add event listener for deleting tasks
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
    }
}

// Event listener for adding tasks
addButton.addEventListener("click", addTask);

// Event listener for adding tasks on Enter key press
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
