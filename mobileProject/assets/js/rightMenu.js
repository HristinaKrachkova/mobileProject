$(function() {
    function buttonResult(results) {
        var templateResult = document.getElementById('search-template').innerHTML

        var templateRight = Handlebars.compile(templateResult)
        var readyHTML = templateRight({ results })


        document.getElementById('searchResult').innerHTML = readyHTML
        var hidden = document.getElementsByClassName("hiddenDiv");
        document.getElementById('searchResult').style.display = "block";
        Array.prototype.forEach.call(hidden, function(m) {
            m.style.display = "none";
        })
    }
    $('#firstTimersCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.price <= 4000
        })
        buttonResult(results)

    })
    $('#luxuryCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.price > 10000 && car.type === 'car'
        })
        buttonResult(results)

    })
    $('#cityCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.engine == 'electric' && car.type == 'car'
        })
        buttonResult(results)

    })
    $('#sportCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.price > 10000 && car.type === 'bike'
        })
        buttonResult(results)

    })
    $('#classicCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.year < 2009 && car.type == 'car'
        })
        buttonResult(results)

    })
    $('#familyCar').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.engine === 'electric' && car.type == 'jeep'
        })
        buttonResult(results)

    })
    $('#suv').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.engine !== 'electric' && car.type == 'jeep'
        })
        buttonResult(results)

    })
    $('#ecoFriendly').on('click', function() {
        event.preventDefault();
        var results = carsList.cars.filter(function(car) {
            return car.engine == 'electric'
        })
        buttonResult(results)

    })



})