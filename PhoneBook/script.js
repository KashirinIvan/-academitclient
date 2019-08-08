function ready() {
    var name = document.querySelector(".name");
    var lastName = document.querySelector(".lastName");
    var phone = document.querySelector(".phone");
    var add = document.querySelector(".add");
    var phoneBook = document.querySelector(".phoneBook");
    var count = 0;
    add.addEventListener("click", function () {
        count++;
        var tbody = document.getElementsByTagName("TBODY")[0];
        var row = document.createElement("TR");
        var td1 = document.createElement("TD");
        td1.appendChild(document.createTextNode(count.toString()));
        var td2 = document.createElement("TD");
        td2.appendChild (document.createTextNode(lastName.value));
        var td3 = document.createElement("TD");
        td3.appendChild(document.createTextNode(name.value));
        var td4 = document.createElement("TD");
        td4.appendChild (document.createTextNode(phone.value));
        var td5 = document.createElement("BUTTON");
        td5.appendChild (document.createTextNode("X"));
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        tbody.appendChild(row);
    });

    phoneBook.addEventListener("click", function (evt) {
        if (evt.target.valueOf().tagName === "BUTTON") {
            var child = evt.target.parentNode;
            console.log(child.firstElementChild.nodeValue);

            child.parentNode.removeChild(child);

        }
    });
}

document.addEventListener("DOMContentLoaded", ready);