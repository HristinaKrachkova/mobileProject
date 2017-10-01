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
    this.cars = [new Car('Fiat', 'Stilo',2009, 'gas', 'manual','./assets/img/imgCar/cars/fiatStilo.jpg'), new Car('Fiat', 'Doblo',2012, 'gas', 'automatic','.assets\img\imgCars\cars\fiatDoblo.jpg'),
new Car('Bmw', '316',2008, 'disel', 'manual','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmboLWxy-h7BrkGj17XRQe0HniSfHCW677wFMH9KZxoztdJEYxA'), new Car('Bmw', '316',2012, 'disel', 'manual','\assets\img\imgCars\cars\bmw316novo.jpg'), new Car('Bmw', '123',2010, 'gas', 'manual', 'assets\img\imgCars\cars\bmw123.jpg'),
new Car('Opel', 'Astra',2010, 'diesel', 'automatic','.\assets\img\imgCars\cars\opelAstra.jpg'), new Car('Opel', 'Vectra',2012, 'gas', 'manual','\assets\img\imgCars\cars\OpelAstraNova.jpg'),
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