const todoList = [
  {
    name: "make dinner",
    dueDate: "2023-08-15",
  },
  {
    name: "wash dishes",
    dueDate: "2023-08-25",
  },
];
renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;

    const html = `
    <div>${name}</div
    <div>${dueDate}</div> 
    <button onclick = "
     todoList.splice(${i},1);
     renderTodoList(); "
    class= "todo-delete-button" >Delete</button>    
    `;
    todoListHtml += html;
  }
  // console.log(todoListHtml);
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-duedate-input");
  const dueDate = dateInputElement.value;
  todoList.push({name, dueDate});
  // console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
