function Vehicle(mark, model, type, year, engine, gearBox, img) {
    this.id = Vehicle.prototype.idNumber++;
    this.mark = mark;
    this.model = model;
    this.type = type;
    this.year = year;
    this.engine = engine;
    this.gearBox = gearBox;
    this.img = img;
}

Vehicle.prototype.idNumber = 1




function Car(mark, model,year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'car', year, engine, gearBox, img)
}
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

function Bike(mark, model,year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'bike', year, engine, gearBox, img)
}
Bike.prototype = Object.create(Vehicle.prototype)
Bike.prototype.constructor = Bike

function Truck(mark, model,year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'truck', year, engine, gearBox, img)
}
Truck.prototype = Object.create(Vehicle.prototype)
Truck.prototype.constructor = Truck

function Jeep(mark, model,year, engine, gearBox, img) {
    Vehicle.call(this, mark, model, 'jeep', year, engine, gearBox, img)
}
Jeep.prototype = Object.create(Vehicle.prototype)
Jeep.prototype.constructor = Jeep

function Bus(mark, model,year, engine, gearBox, img) {
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