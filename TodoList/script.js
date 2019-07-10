function ready() {
    var inputValue = document.querySelector(".inputValue");
    var list = document.querySelector("ul");
    var appendTask = document.querySelector(".append");

    list.addEventListener("click", function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") {
            var child = evt.target.parentNode;
            child.parentNode.removeChild(child);
        }
    });

    appendTask.addEventListener("click", function () {
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