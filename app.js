//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

//functions
function addTodo(event){
  //prevent form from submitting
  event.preventDefault();
 //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
 //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
//CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerText = ' - ';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerText = 'Del';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv); 
  //clear todo input value 
  todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.remove();
  }
}