const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');
addTaskButton.addEventListener("click", function() {
    const taskInput = document.querySelector('.task-input');
    const task = taskInput.value.trim();

    if(task === "") {
        alert("Please enter a valid text"); //To be made UI friendly later
        return;
    }
    const emptyText = document.querySelector('.empty-list');
    if(!emptyText.classList.contains('hidden')) emptyText.classList.add('hidden');

    const taskItem = `<div class="task-item"><input type="checkbox" />${task}</div>`;
    taskList.innerHTML += taskItem;
    taskInput.value = '';
});

taskList.addEventListener("click", function(e) {
    if(e.target.type === 'checkbox') {
        console.log("Checkbox clicked");
    }
});