const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
const deleteButtons = document.querySelectorAll(".delete");

const listContain = document.getElementById("listContainer");
const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Write out your weekly goals';
item2.textContent = 'Write out your daily goals';

docFrag.appendChild(item1);
docFrag.appendChild(item2);

//console.log(docFrag);

listContain.appendChild(docFrag);

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
