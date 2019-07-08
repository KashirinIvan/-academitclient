var inputValue = document.querySelector(".new-task");
var list = document.querySelector("ul");
var buttonNewTask = document.querySelector(".button-new-task");

function ready() {
    list.addEventListener('click', function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") evt.target.parentElement.remove();
    }, false);

    buttonNewTask.addEventListener("click", function newTask() {
        if (inputValue.value === "") {
            alert("Задача не введена");
            return;
        }
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputValue.value));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Удалить"));
        li.appendChild(deleteButton);

        list.appendChild(li);
        inputValue.value = "";
    });
}

document.addEventListener("DOMContentLoaded", ready);