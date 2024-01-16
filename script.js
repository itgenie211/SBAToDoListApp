const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
const removeTaskButton = document.getElementById("removeTaskButton");
const iterateTasksButton = document.getElementById("iterateTasksButton");


// Register event listeners
document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});
addButton.addEventListener("click", handleButtonClick);
inputBox.addEventListener("keypress", handleKeyPress);
removeTaskButton.addEventListener("click", removeTask);
iterateTasksButton.addEventListener("clcik", iterateOverTasks);

// Event handler for button click
function handleButtonClick() {
    alert("Button Clicked!");
}

// Event handler for key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask(); // Call your addTask function when Enter key is pressed
    }
}

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function iterateOverTasks() {
    const listItems = document.querySelectorAll("#listContainer li");
    listItems.forEach((item, index) => {
        console.log(`Task ${index + 1}: ${item.textContent}`);
    });
}

//event handler for removing tasks
function removeTask() {
    const checkedItems = document.querySelectorAll("#listContainer li.checked");
    checkedItems.forEach((item) => {
        item.remove();
    });
}

//Button to trigger iteration
const iterateButton = document.createElement('button');
iterateButton.textContent = 'Iterate Over Tasks';
iterateButton.addEventListener('click', iterateOverTasks);
document.body.appendChild(iterateButton);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

showTask();

