$(document).ready(function () {
    $("#append").click(function () {
        var listItem = $("#inputValue").text();
        console.log(listItem);
        if (listItem.length <= 0) {
            alert("Задача не введена");
            return;
        }
        var buttonDelete = "<button>Удалить</button>";
        $("#list").append("<li>" + listItem + buttonDelete + "</li>");
        $("#inputValue").val("");
    });

    $("#list").on("click", "li", function () {
        $(this).remove();
    });
});