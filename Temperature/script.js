var celsius = document.querySelector("input");
var kelvin = document.querySelector(".kelvin");
var fahrenheit = document.querySelector(".fahrenheit");

function computation() {
    kelvin.value = parseInt(celsius.value) + 273.15;
    fahrenheit.value = parseInt(celsius.value) * 9 / 5 + 32;
}
