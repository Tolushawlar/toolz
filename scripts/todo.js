var cardCon = document.getElementById("tasks");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const textInput = document.getElementById("textInput").value;
  const dateInput = document.getElementById("dateInput").value;
  const textarea = document.getElementById("textarea").value;
  const msg = document.getElementById("msg");

  const todoData = {
    textInput,
    dateInput,
    textarea,
  };

  const todoArray = JSON.parse(localStorage.getItem("todos")) || [];
  todoArray.push(todoData);
  localStorage.setItem("todos", JSON.stringify(todoArray));

  form.reset();
  window.location.reload();
});

localTodo = localStorage.getItem("todos");
const arrayTodo = localTodo ? JSON.parse(localTodo) : [];
arrayTodo.forEach((item, index) => {
  var todoCard = document.createElement("div");
  var btn = document.createElement("button");
  todoCard.classList.add("todo");
  btn.classList.add("remove");

  todoCard.innerHTML = `
    <h3><span>Task</span> ${item.textInput}</h3>
    <h3><span>Description</span> ${item.textarea}</h3>
    <h3><span>Due Date</span> ${item.dateInput}</h3>`;

  cardCon.appendChild(todoCard);
});
