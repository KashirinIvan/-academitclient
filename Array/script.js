var array = [1, 9, 54, 8, 47, 2, 54, 3, 97, 4, 52, 37, 5];
array.sort(function (a, b) {
    return b - a;
});
console.log(array);

var arrayFirst = array.slice(0, 5);
console.log(arrayFirst);

var arrayLast = array.slice(array.length - 5);
console.log(arrayLast);

var result = array.reduce(function (sum, current) {
    if (current % 2 === 0) {
        return sum + current;
    } else {
        return sum;
    }
}, 0);
console.log(result);

var arrayOneToHundred = [];
for (var i = 1; i <= 100; i++) {
    arrayOneToHundred.push(i);
}
console.log(arrayOneToHundred);

var arraySquare = arrayOneToHundred.filter(function (value) {
    if (value % 2 === 0) {
        return value;
    } else {
        return 0;
    }
}).map(function (value) {
    return Math.pow(value, 2)
});
console.log(arraySquare);