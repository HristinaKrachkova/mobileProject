function Vehicle(mark, model, type, year, engine, gearBox) {
    this.id = Vehicle.prototype.idNumber++;
    this.mark = mark;
    this.model = model;
    this.type = type;
    this.year = year;
    this.engine = engine;
    this.gearBox = gearBox;
    this.img = 'http://via.placeholder.com/200'
}

Vehicle.prototype.idNumber = 1




function Car(mark, model, year, engine, gearBox) {
    Vehicle.call(this, mark, model, 'car', year, engine, gearBox)
}
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

function Bike(mark, model, year, engine, gearBox) {
    Vehicle.call(this, mark, model, 'bike', year, engine, gearBox)
}
Bike.prototype = Object.create(Vehicle.prototype)
Bike.prototype.constructor = Bike

function Truck(mark, model, year, engine, gearBox) {
    Vehicle.call(this, mark, model, 'truck', year, engine, gearBox)
}
Truck.prototype = Object.create(Vehicle.prototype)
Truck.prototype.constructor = Truck

function Jeep(mark, model, year, engine, gearBox) {
    Vehicle.call(this, mark, model, 'jeep', year, engine, gearBox)
}
Jeep.prototype = Object.create(Vehicle.prototype)
Jeep.prototype.constructor = Jeep

function Bus(mark, model, year, engine, gearBox) {
    Vehicle.call(this, mark, model, 'bus', year, engine, gearBox)
}
Bus.prototype = Object.create(Vehicle.prototype)
Bus.prototype.constructor = Bus

function VehicleList() {
    this.cars = [new Car('chevy', 'stilo',2001, 'gas', 'manual'), new Car('chevy', 'rezzo',2002, 'gas', 'manual'),
new Car('bmw', '316',2008, 'disel', 'manual'), new Car('bmw', '316',2009, 'disel', 'manual'), new Car('Bmw', '112',2010, 'gas', 'manual'),
new Car('Opel', 'Astra',2004, 'gas', 'manual'), new Car('Opel', 'Vectra',1999, 'gas', 'manual'),
new Car('Mercedes', 'S class',2014, 'gas', 'manual'), new Car('Moskvich', '1',2002, 'gas', 'manual'),
new Bike('Yamaha', '2 gumi',2002, 'gas', 'manual'), new Bike('Honda', 'NM4',2002, 'gas', 'manual'),
new Bike('Da si ebe', 's edna guma',2002, 'gas', 'manual'), new Truck('kamaz', 'truck',2002, 'gas', 'manual'),
new Truck('mercedes', 'rezzo',2002, 'gas', 'manual'), new Truck('chevy', 'kamion',2002, 'gas', 'manual'),
new Truck('man', 'bah maamu',2002, 'gas', 'manual'), new Bike('bmw', 'x5',2002, 'gas', 'manual')
]
}

VehicleList.prototype.addCar = function(car) {
    if(car instanceof Vehicle) {
        this.cars.push(car)
    }
}

var carsList = new VehicleList()
var bus = new Bus('Bus', 'bus', 1999, 'gas', 'manual')

carsList.addCar(bus)




// var xhr = new XMLHttpRequest()
// xhr.open('GET', 'http://localhost/mobile/mobileProject/json/cars.json', true);
// xhr.send(null);




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