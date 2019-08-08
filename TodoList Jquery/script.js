$(document).ready(function () {
    $("#append").click(function () {
        var listItem = $("#inputValue").val();
        if (listItem.length <= 0) {
            alert("Задача не введена");
        } else {
            var buttonDelete = "<button>Удалить</button>";
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(listItem));
            li.appendChild(document.createElement(buttonDelete));
            $("#list").append(li);
            $("#inputValue").val("");
        }
    });

    $("#list").click(function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") {
            $(this).remove();
        }
    });
});