const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let list = document.createElement("li"); // this creates a new li element in the HTML file
    list.innerHTML = inputBox.value; // this sets the innerHTML of the li to the value of the input box
    listContainer.appendChild(list); // this appens the new li to the list container div in the HTML file
    let span = document.createElement("span"); // this creates a new span element in the HTML file
    span.innerHTML = "\u00d7"; // this sets the innerHTML of the span to the unicode for the multiplication sign
    list.appendChild(span); // this appends the span to the li
  }
  inputBox.value = ""; // this clears the input box after the task has been added
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
