const todos = [
  'Сделать проектную работу',
  'Пройти туториал по Реакту',
  'Разобраться в замыканиях',
];

const todosContainer = document.querySelector('.todos__list');

const createTodo = (taskName) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  const span = document.createElement('span');
  span.classList.add('todo-item__text');
  span.textContent = taskName;
  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('todo-item__edit');
  const buttonCopy = document.createElement('button');
  buttonCopy.classList.add('todo-item__copy');
  const buttonDel = document.createElement('button');
  buttonDel.classList.add('todo-item__del');
  li.append(span, buttonEdit, buttonCopy, buttonDel);
  return li;
}


const elements = todos.map(function(taskName) {
  return createTodo(taskName);
})
todosContainer.append(...elements)
