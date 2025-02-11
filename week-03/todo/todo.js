// Get the elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add a task
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'task-item');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="btn btn-sm btn-success me-2 complete-btn">Complete</button>
                <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </div>
        `;
        
        // Add task to the list
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input

        // Add event listener for complete button
        li.querySelector('.complete-btn').addEventListener('click', function() {
            li.querySelector('.task-text').classList.toggle('completed');
        });

        // Add event listener for delete button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
    }
});

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
