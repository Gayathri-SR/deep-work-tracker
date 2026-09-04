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
});

taskList.addEventListener("click", function(e) {
    if(e.target.type === 'checkbox') {
        let taskItem = e.target.closest('.task-item');
        tasks.forEach((task) => {
            if(task.id === Number(taskItem.dataset.taskId)) {
                task.completed = !task.completed;
                renderTasks();
                return;
            }
        });
    }
});

function renderTasks() {
    const emptyText = document.querySelector('.empty-list');
    if(!emptyText.classList.contains('hidden')) emptyText.classList.add('hidden');

    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const taskItem = `<div class="task-item" data-task-id=${task.id}><input type="checkbox" ${task.completed ? "checked" : ""} />${task.name}</div>`;
        taskList.innerHTML += taskItem;
    });
    console.log(tasks);
}