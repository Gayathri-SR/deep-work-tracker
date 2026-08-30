const addTaskButton = document.querySelector('.add-task');
addTaskButton.addEventListener("click", function() {
    const emptyText = document.querySelector('.empty-list');
    if(!emptyText.classList.contains('hidden')) emptyText.classList.add('hidden');

    const taskList = document.querySelector('.task-list');
    const task = document.querySelector('.task-input').value;
    const taskItem = `<div class="task-item"><input type="checkbox" />${task}</div>`;

    taskList.innerHTML += taskItem;
});