var array = [1, 9, 54, 8, 47, 2, 54, 3, 97, 4, 52, 37, 5];
array.sort(function (a, b) {
    return b - a;
});
console.log(array);

var arrayFirst = array.slice(0, 5);
console.log(arrayFirst);

var arrayLast = array.slice(array.length - 5, array.length);
console.log(arrayLast);

var sum = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sum = sum + array[i];
    }
}
console.log(sum);

var arrayOneToHundred = [];
for (i = 0; i < 100; i++) {
    arrayOneToHundred.push(i + 1);
}
console.log(arrayOneToHundred);
var arraySquare = [];
for (i = 0; i < arrayOneToHundred.length; i++) {
    if (arrayOneToHundred[i] % 2 === 0) {
        arraySquare.push(Math.pow(arrayOneToHundred[i], 2));
    }
}
console.log(arraySquare);