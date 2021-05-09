var taskList = document.getElementsByTagName("li");
var checkBoxList = document.getElementsByClassName("check-task");
var item;

for (item = 0; item < taskList.length; item++) {
  // for loop to add bin icon to existing list items
  var span = document.createElement("span");
  var icon = document.createElement("i");
  span.className = "delete-task-btn";
  icon.className = "far fa-trash-alt";
  span.appendChild(icon);
  taskList[item].appendChild(span);
}

// function to add a task into the list
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

  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("check-task");

  var span = document.createElement("span"); // create span element
  var icon = document.createElement("i"); // create i element which is the bin icon

  span.className = "delete-task-btn";
  icon.className = "far fa-trash-alt"; // icon class from fontawesome
  span.appendChild(icon);

  p.appendChild(text);
  li.appendChild(checkBox);
  li.appendChild(p);
  li.appendChild(span);
  // li.classList.add("complete");

  var ul = document.querySelector("ul");
  ul.appendChild(li);
  taskDesc.value = ""; // clear the input field
}

var addTaskButton = document.getElementById("add-task-btn");

addTaskButton.addEventListener("click", addTask); // always pass the function dont call it

var k;

for (k = 0; k < checkBoxList.length; k++) {
  checkBoxList[k].addEventListener("click", function () {
    var j;
    // checkBoxList = document.getElementsByClassName("check-task");
    for (j = 0; j < checkBoxList.length; j++) {
      if (checkBoxList[j].checked === true) {
        checkBoxList[j].parentNode.classList.toggle("complete");
      } else {
        checkBoxList[j].parentNode.classList.remove("complete");
      }
    }
  });
}

var deleteButtonList = document.getElementsByClassName("delete-task-btn");

k = 0;

for (; k < deleteButtonList; k++) {
  deleteButtonList[k].addEventListener("click", function () {
    var parent = this.parentElement;
    parent.style.display = "none";
  });
}
