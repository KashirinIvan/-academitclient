var inputValue = document.querySelector(".new-task");
var list = document.querySelector('ul');

list.addEventListener('click', function (evt) {
    if (evt.target.valueOf().tagName === "BUTTON") {
        var dir = evt.target.parentNode;
        dir.remove();
    }
}, false);

function newTask() {
    if (inputValue.value === "") {
        alert("Задача не введена");
        return;
    }
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue.value));
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("Удалить"));
    li.appendChild(deleteButton);
    list.appendChild(li);
    inputValue.value = "";
}