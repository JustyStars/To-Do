let todoListItem = document.getElementsByTagName('li');
let userName = document.getElementById("userName");
let todoTitle = document.getElementById("todoTitle"); 
let todoList = document.getElementById("todoList");

userName.innerHTML = "Austin";
todoTitle.setAttribute('class', 'newColor');

let newItem = document.createElement("li");
newItem.innerHTML = "Write ta least 1 page for your paper";
todoList.appendChild(newItem);

for (let i = 0; i < todoListItem.length; i++) {
    todoListItem[i].setAttribute('class' , 'listItem');

    if (i == 0) {
        todoListItem[i].style.color = "red";
    }
}

todoList.addEventListener('click', function (event) {
    if (event.target.tagName === "LI"){
        event.target.remove();
    }
})