const todos = [
  'Сделать проектную работу',
  'Пройти туториал по Реакту',
  'Разобраться в замыканиях',
];

const todosContainer = document.querySelector('.todos__list');
const addTodoForm = document.querySelector('.todo-form');
const input = addTodoForm.querySelector('.todo-form__input')
const button = addTodoForm.querySelector('.todo-form__submit-btn');
let editTodo = null;

function setToEditMode(taskName) {
  button.textContent = 'Изменить';
  input.value = taskName;
  addTodoForm.removeEventListener('submit', addTodo);
}

function setToAddMode() {
  button.textContent = 'Добавить';
  input.value = '';
  addTodoForm.removeEventListener('submit', editTodo);
  addTodoForm.addEventListener('submit', addTodo)
}

const createTodo = (taskName) => {
  const template = document.querySelector('#todo-item-template');
  const task = template.content.querySelector('.todo-item').cloneNode(true);

  task.querySelector('.todo-item__text').textContent = taskName;

  task.querySelector('.todo-item__copy').addEventListener('click', () => {
    renderTodo(taskName);
  });
  task.querySelector('.todo-item__del').addEventListener('click', () => {
    task.remove();
  });

  task.querySelector('.todo-item__edit').addEventListener('click', (e) => {
    addTodoForm.removeEventListener('submit', editTodo);
 
    editTodo = (e) => {
      e.preventDefault();
      todosContainer.replaceChild(createTodo(input.value), task)
      setToAddMode()
    }
    setToEditMode(taskName)
    addTodoForm.addEventListener('submit', editTodo);
  })
  return task;
}

const renderTodo = (taskName) => {
  todosContainer.prepend(createTodo(taskName))
}

const addTodo = (event) => {
  event.preventDefault();
  const taskName = input.value;
  renderTodo(taskName);
  input.value = '';
}
const elements = todos.map(function(taskName) {
  return createTodo(taskName);
})
todosContainer.append(...elements)
addTodoForm.addEventListener('submit', addTodo);