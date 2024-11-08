document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const taskForm = document.getElementById('taskForm');
    const closeModal = document.querySelector('.close');
    const taskNameInput = document.getElementById('taskName');
    const taskTimeInput = document.getElementById('taskTime');
    const submitTaskBtn = document.getElementById('submitTaskBtn');
    addTaskBtn.onclick = function() {
        taskForm.style.display = "block";
    };
    closeModal.onclick = function() {
        taskForm.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === taskForm) {
            taskForm.style.display = "none";
        }
    };
    submitTaskBtn.onclick = function() {
        const taskName = taskNameInput.value;
        const taskTime = taskTimeInput.value;

        if (taskName && taskTime) {
            const li = document.createElement('li');
            li.innerHTML = `${taskName} - ${taskTime} <button class="deleteBtn">Delete</button>`;
            taskList.appendChild(li);
            taskNameInput.value = '';
            taskTimeInput.value = '';
            taskForm.style.display = "none";
            const deleteBtn = li.querySelector('.deleteBtn');
            deleteBtn.onclick = function() {
                taskList.removeChild(li);
            };
        } else {
            alert('Please fill in both fields.');
        }
    };
    deleteAllBtn.onclick = function() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    };
});