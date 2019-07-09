function ready() {
    var celsius = document.querySelector(".celsius");
    var kelvin = document.querySelector(".kelvin");
    var fahrenheit = document.querySelector(".fahrenheit");
    var convertButton = document.querySelector(".convert-button");

    convertButton.addEventListener("click", function () {
        if (celsius.value.replace(/\s/g, '').length === 0 || isNaN(celsius.value)) {
            alert("Нужно вести число!");
        } else {
            kelvin.value = parseInt(celsius.value) + 273.15;
            fahrenheit.value = parseInt(celsius.value) * 9 / 5 + 32;
        }
    });
}

document.addEventListener("DOMContentLoaded", ready);