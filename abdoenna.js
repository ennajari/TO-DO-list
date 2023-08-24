document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            const deleteBtn = li.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', function () {
                li.remove();
            });
        }
    });
});
