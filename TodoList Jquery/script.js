$(document).ready(function () {
    $("#append").click(function () {
        var listItem = $("#inputValue").val();
        if (listItem.length > 0) {
            var buttonDelete = "<button>Удалить</button>";
            $("#list").append("<li>" + listItem + buttonDelete + "</li>");
            $("#inputValue").val('');
        } else {
            alert("Задача не введена");
            return;
        }
    });

    $("#list").click(function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") {
            var child = evt.target.parentNode;
            child.parentNode.removeChild(child);
        }
    });
});