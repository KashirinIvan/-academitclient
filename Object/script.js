var country = [{
    countryName: "Russia",
    cityList: [{
        cityName: "Moscow",
        number: "12000000"
    }, {
        cityName: "Novosibirsk",
        number: "1600000"
    }, {
        cityName: "Yekaterinburg",
        number: "1200000"
    }, {
        cityName: "Saint Petersburg",
        number: "3000000"
    }, {
        cityName: "Kazan",
        number: "1000000"
    }]
}, {
    countryName: "Italy",
    cityList: [{
        cityName: "Rim",
        number: "2800000"
    }, {
        cityName: "Milan",
        number: "1300000"
    }, {
        cityName: "Turin",
        number: "900000"
    }]
}, {
    countryName: "USA",
    cityList: [{
        cityName: "New-York",
        number: "8500000"
    }, {
        cityName: "Los-Angele's",
        number: "3800000"
    }, {
        cityName: "Chicago",
        number: "2700000"
    }, {
        cityName: "Houston", "number": "2300000"
    }]
}, {
    countryName: "France",
    cityList: [{
        cityName: "Paris",
        number: "2200000"
    }, {
        cityName: "Marseille",
        number: "850000"
    }, {
        cityName: "Lyon",
        number: "480000"
    }, {
        cityName: "Toulouse",
        number: "440000"
    }]
}];
console.log(country);

country.sort(function (a, b) {
    return b.cityList.length - a.cityList.length;
});
var maxCountCity = country[0].cityList.length;
console.log(country.filter(function (value) {
    return maxCountCity === value.cityList.length;
}).map(function (value) {
    return value.countryName;
}));

var object = {};
for (var i = 0; i < country.length; i++) {
    object[country[i].countryName] = country[i].cityList.map(function (value) {
        return value.number
    }).reduce(function (sum, current) {
        return parseInt(sum) + parseInt(current)
    },0);
}
for (var propName in object) {
    console.log(propName + " : " + object[propName]);
}