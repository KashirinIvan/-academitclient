var countries = [{
    countryName: "Russia",
    cities: [{
        cityName: "Moscow",
        population: 12000000
    }, {
        cityName: "Novosibirsk",
        population: 1600000
    }, {
        cityName: "Yekaterinburg",
        population: 1200000
    }, {
        cityName: "Saint Petersburg",
        population: 3000000
    }, {
        cityName: "Kazan",
        population: 1000000
    }]
}, {
    countryName: "Italy",
    cities: [{
        cityName: "Rim",
        population: 2800000
    }, {
        cityName: "Milan",
        population: 1300000
    }, {
        cityName: "Turin",
        population: 900000
    }]
}, {
    countryName: "USA",
    cities: [{
        cityName: "New-York",
        population: 8500000
    }, {
        cityName: "Los-Angele's",
        population: 3800000
    }, {
        cityName: "Chicago",
        population: 2700000
    }, {
        cityName: "Houston",
        population: 2300000
    }]
}, {
    countryName: "France",
    cities: [{
        cityName: "Paris",
        population: 2200000
    }, {
        cityName: "Marseille",
        population: 850000
    }, {
        cityName: "Lyon",
        population: 480000
    }, {
        cityName: "Toulouse",
        population: 400000
    }]
}];
console.log(countries);

countries.sort(function (a, b) {
    return b.cities.length - a.cities.length;
});
var maxCountCity = countries[0].cities.length;
console.log(countries.filter(function (value) {
    return maxCountCity === value.cities.length;
}).map(function (value) {
    return value.countryName;
}));

var object = {};
countries.forEach(function (value) {
    object[value.countryName] = value.cities.map(function (value) {
        return value.population
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0);
});
for (var propName in object) {
    console.log(propName + " : " + object[propName]);
}
