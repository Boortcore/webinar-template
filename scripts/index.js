const todos = [
  'Сделать проектную работу',
  'Пройти туториал по Реакту',
  'Разобраться в замыканиях',
];

const todosContainer = document.querySelector('.todos__list');
const addTodoForm = document.querySelector('.todo-form');
const input = addTodoForm.querySelector('.todo-form__input')
const createTodo = (taskName) => {
  return `<li class="todo-item">
    <span class="todo-item__text">${taskName}</span>
    <button class="todo-item__edit"></button>
    <button class="todo-item__copy"></button>
    <button class="todo-item__del"></button>
  </li>`  
}

const renderTodo = (taskName) => {
  todosContainer.insertAdjacentHTML('afterbegin', createTodo(taskName))
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
todosContainer.insertAdjacentHTML('afterbegin', elements.join(''))
addTodoForm.addEventListener('submit', addTodo);