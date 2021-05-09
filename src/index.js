function addTask(task) {
  // function to add a task into the list
  var list = document.getElementById("list-ul"); // get the unodered list

  var newTask = document.createElement("li"); // create a li
  var newTaskP = document.createElement("p"); // create the p tag for text
  var newTaskText = document.createTextNode(task);

  newTaskP.appendChild(newTaskText); // add the text to p

  var completeButton = document.createElement("button"); // create button element for complete task action
  completeButton.classList.add("complete");
  completeButton.addEventListener("click", completeTask); // add evetn listener to the buttons craeted

  var span = document.createElement("span");
  span.classList.add("delete-task-btn");

  var icon = document.createElement("i");
  icon.className = "far fa-trash-alt";

  span.appendChild(icon);
  span.addEventListener("click", removeTask); // add event listenser to the delete logo / button

  // append all the items to the li in the correct order
  newTask.appendChild(completeButton);
  newTask.appendChild(newTaskP);
  newTask.appendChild(span);

  list.appendChild(newTask);
}

function completeTask() {
  // function to denote a completed task by
  var currTask = this;
  currTask.parentNode.classList.toggle("complete");
}

function removeTask() {
  // function to remove task from the list
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
    // if task is empty show a prompt message
    window.alert("Please Enter a task");
  }
});
