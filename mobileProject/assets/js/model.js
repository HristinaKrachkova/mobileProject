function Vehicle(mark, model, type, year, engine, gearBox, img, price) {
    this.id = Vehicle.prototype.idNumber++;
    if (typeof mark == 'string') {
        this.mark = mark;
    }
    if (typeof model == 'string') {
        this.model = model;
    }
    if (type == 'car' || type == 'bus' || type == 'bike' || type == 'truck' || type == 'jeep') {
        this.type = type;
    }
    if (year >= 1993 && year <= 2017) {
        this.year = year;
    }
    if (engine == 'electric' || engine == 'gas' || engine == 'disel') {
        this.engine = engine;

    }
    if (gearBox == 'automatic' || gearBox == 'manual') {
        this.gearBox = gearBox;
    }
    this.img = img;
    this.price = price;
}

Vehicle.prototype.idNumber = 43




function Car(mark, model, year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'car', year, engine, gearBox, img)
}
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

function Bike(mark, model, year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'bike', year, engine, gearBox, img)
}
Bike.prototype = Object.create(Vehicle.prototype)
Bike.prototype.constructor = Bike

function Truck(mark, model, year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'truck', year, engine, gearBox, img)
}
Truck.prototype = Object.create(Vehicle.prototype)
Truck.prototype.constructor = Truck

function Jeep(mark, model, year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'jeep', year, engine, gearBox, img)
}
Jeep.prototype = Object.create(Vehicle.prototype)
Jeep.prototype.constructor = Jeep

function Bus(mark, model, year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'bus', year, engine, gearBox, img)
}
Bus.prototype = Object.create(Vehicle.prototype)
Bus.prototype.constructor = Bus

function VehicleList() {
    this.cars = []
}


VehicleList.prototype.addCar = function(car) {
    this.cars.push(car)

}
VehicleList.prototype.removeCar = function(idto) {
    this.cars.splice(this.cars.findIndex(x => x.id === idto), 1)

}

VehicleList.prototype.publishCar = function(mark, model, type, year, engine, gearBox, img, price) {
    var car = new Vehicle(mark, model, type, year, engine, gearBox, img, price)
    this.cars.push(car)
}


var carsList = new VehicleList()




// cars = cars.sort(function (a, b) {
//     if (a.mark.toUpperCase() > b.mark.toUpperCase()) {
//         return 1
//     }
//     if (a.mark.toUpperCase() < b.mark.toUpperCase()) {
//         return -1
//     }
//     return 0
// })
// var marks = cars.slice()
// for (var index = 0; index < cars.length; index++) {
//     for (var num = 0; num < marks.length; num++) {
//         if (num > index) {
//             if (marks[num] == null || (cars[index].mark.toUpperCase() === marks[num].mark.toUpperCase())) {
//                 marks[num] = null;

//             }
//         }

//     }
// }
// marks = marks.filter(function (x) {

//     return x !== null

// })