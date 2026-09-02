const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');

const tasks = [];
let taskId=1;

addTaskButton.addEventListener("click", function() {
    const taskInput = document.querySelector('.task-input');
    const task = taskInput.value.trim();

    if(task === "") {
        alert("Please enter a valid text"); //To be made UI friendly later
        return;
    }

    tasks.push({
        id : taskId++,
        name : task,
        completed : false
    });
    renderTasks();
    taskInput.value = '';

    console.log(tasks);
});

taskList.addEventListener("click", function(e) {
    if(e.target.type === 'checkbox') {
        console.log("Checkbox clicked");
    }
});

function renderTasks() {
    const emptyText = document.querySelector('.empty-list');
    if(!emptyText.classList.contains('hidden')) emptyText.classList.add('hidden');

    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const taskItem = `<div class="task-item"><input type="checkbox" ${task.completed ? "checked" : ""} />${task.name}</div>`;
        taskList.innerHTML += taskItem;
    });
}