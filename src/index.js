var taskList = document.getElementsByTagName("li");

var item;

for (item = 0; item < taskList.length; item++) {
  var span = document.createElement("span");
  var icon = document.createElement("i");
  span.className = "delete-task-btn";
  icon.className = "far fa-trash-alt";
  span.appendChild(icon);
  taskList[item].appendChild(span);
}

function addTask() {
  var taskDesc = document.getElementById("add-task"); // get input data
  var li = document.createElement("li"); // create li element
  var p = document.createElement("p"); // create p element

  if (taskDesc.value === "") {
    window.alert("Please Enter a task");
    return;
  }

  var text = document.createTextNode(taskDesc.value); // create a textnode which holds the input value
  var checkBox = document.createElement("input"); // create the checkbox

  p.appendChild(text);
  checkBox.setAttribute("type", "checkbox");
  li.appendChild(checkBox);
  li.appendChild(p);

  var ul = document.querySelector("ul");
  ul.appendChild(li);
  taskDesc.value = ""; // clear the input field
}

var addTaskButton = document.getElementById("add-task-btn");

addTaskButton.addEventListener("click", addTask); // always pass the function dont call it
