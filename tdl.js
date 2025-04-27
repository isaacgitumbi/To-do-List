
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const li = document.createElement('li');
      li.textContent = taskText;
  
      li.addEventListener('click', function () {
        li.classList.toggle('done');
      });
  
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'deleteBtn';
      deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation(); 
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  
    addBtn.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  
