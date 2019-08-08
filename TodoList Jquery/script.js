$(document).ready(function () {
    $("#append").click(function () {
        var listItem = $("#inputValue").val();
        if (listItem.length > 0) {
            var buttonDelete = "<button>Удалить</button>";
            $("#list").append("<li>" + listItem + buttonDelete + "</li>");
            $("#inputValue").val("");
        } else {
            alert("Задача не введена");
        }
    });

    $("#list").click(function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") {
            $(this).remove();
        }
    });
});