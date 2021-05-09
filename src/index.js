// var taskList = document.getElementsByTagName("li"); // get all li
// var item;
// for (item = 0; item < taskList.length; item++) {
//   // for loop to add bin icon to existing list items
//   var span = document.createElement("span");
//   var icon = document.createElement("i");
//   span.className = "delete-task-btn";
//   icon.className = "far fa-trash-alt";
//   span.appendChild(icon);
//   taskList[item].appendChild(span);
// }

function addTask(task) {
  var list = document.getElementById("list-ul");

  var newTask = document.createElement("li");
  var newTaskP = document.createElement("p");
  var newTaskText = document.createTextNode(task);

  newTaskP.appendChild(newTaskText);

  var completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.addEventListener("click", completeTask);

  var span = document.createElement("span");
  span.classList.add("delete-task-btn");

  var icon = document.createElement("i");
  icon.className = "far fa-trash-alt";

  span.appendChild(icon);
  span.addEventListener("click", removeTask);

  newTask.appendChild(completeButton);
  newTask.appendChild(newTaskP);
  newTask.appendChild(span);

  list.appendChild(newTask);
}

function completeTask() {
  var currTask = this;
  currTask.parentNode.classList.toggle("complete");
}

function removeTask() {
  var item = this.parentNode;
  var ul = item.parentNode;

  ul.removeChild(item);
}

document.getElementById("add-task-btn").addEventListener("click", function () {
  // add task to the task list
  var task = document.getElementById("add-task").value;

  if (task) {
    addTask(task);
    document.getElementById("add-task").value = "";
  } else {
    window.alert("Please Enter a task");
  }
});
