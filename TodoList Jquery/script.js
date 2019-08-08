$(document).ready(function () {
    $("#append").click(function () {
        var listItem = $("#inputValue").val();
        listItem = listItem.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (listItem.length > 0) {
            var buttonDelete = "<button>Удалить</button>";
            $("#list").append("<li>" + listItem + buttonDelete + "</li>");
            $("#inputValue").val("");
        } else {
            alert("Задача не введена");
        }
    });

    $("#list").on("click", "li", function () {
        $(this).remove();
    });
});