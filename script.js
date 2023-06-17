// GETTING SELECTORS
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');
let todos = [];

// Events
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const todo = todoInput.value;
  if (todo !== '') {
  todos.push({ task: todo, completed: false });
  todoInput.value = '';
  renderTodos(todos);
  }else {
  alert('werey, input something!');
}
});

// A function that renders todos
const renderTodos = (arr) => {
  // Clear existing todos
  todoList.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const todoItem = arr[i];

    // Create todo item UI and append to todoList
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerText = todoItem.task;

    if (todoItem.completed) {
      li.classList.add('completed');
    }

    todoDiv.appendChild(li);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add ('delete-btn');
    todoDiv.appendChild(deleteButton);

    // Add check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn');
    todoDiv.appendChild(checkButton);

    // Delete button click event
    deleteButton.addEventListener('click', (function(index) {
      return function() {
        deleteTodoItem(index);
      };
    })(i));

    // Check button click event
    checkButton.addEventListener('click', (function(index) {
      return function() {
        toggleTodoCompletion(index);
      };
    })(i));

    // Append todoDiv to todoList
    todoList.appendChild(todoDiv);
  }
};

// Function to delete a todo item
const deleteTodoItem = (index) => {
  todos.splice(index, 1);
  renderTodos(todos);
};

// Function to toggle the completion status of a todo item
const toggleTodoCompletion = (index) => {
  todos[index].completed = !todos[index].completed;
  renderTodos(todos);
};
