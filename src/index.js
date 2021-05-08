function addTask() {
  var taskDesc = document.getElementById("add-task");
  var li = document.createElement("li");
  var text = document.createTextNode(taskDesc.value);
  li.appendChild(text);

  var ul = document.querySelector("ul");
  ul.appendChild(li);
  taskDesc.value = "";
}

var addTaskButton = document.getElementById("add-task-btn");

addTaskButton.addEventListener("click", addTask); // always pass the function dont call it
