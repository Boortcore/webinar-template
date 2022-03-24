const todos = [
  'Сделать проектную работу',
  'Пройти туториал по Реакту',
  'Разобраться в замыканиях',
];

const todosContainer = document.querySelector('.todos__list');
const addTodoForm = document.querySelector('.todo-form');
const input = addTodoForm.querySelector('.todo-form__input')
const createTodo = (taskName) => {
  const string = `<li class="todo-item">
    <span class="todo-item__text"></span>
    <button class="todo-item__edit"></button>
    <button class="todo-item__copy"></button>
    <button class="todo-item__del"></button>
  </li>`  
  const element = document.createElement('div')
  element.insertAdjacentHTML('afterbegin', string);
  element.querySelector('.todo-item__text').textContent = taskName;
  return element.firstElementChild;
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