function Car(mark, model, type, year, engine, gearBox) {
    this.id = Car.prototype.idNumber++;
    this.mark = mark;
    this.model = model;
    this.type = type;
    this.year = year;
    this.engine = engine;
    this.gearBox = gearBox;
}

Car.prototype.idNumber = 1

var cars = [new Car('chevy', 'stilo', 'car', 2001, 'gas', 'manual'),new Car('chevy', 'rezzo', 'car', 2002, 'gas', 'manual'),
new Car('bmw', '316', 'car', 2002, 'disel', 'manual'),new Car('Bmw', '112', 'car', 2010, 'gas', 'manual'),
new Car('Opel', 'Astra', 'car', 2004, 'gas', 'manual'),new Car('Opel', 'Vectra', 'car', 1999, 'gas', 'manual'),
new Car('Mercedes', 'S class', 'car', 2014, 'gas', 'manual'),new Car('Moskvich', '1', 'car', 2002, 'gas', 'manual'),
new Car('Yamaha', '2 gumi', 'bike', 2002, 'gas', 'manual'),new Car('Honda', 'NM4', 'bike', 2002, 'gas', 'manual'),
new Car('Da si ebe', 's edna guma', 'bike', 2002, 'gas', 'manual'),new Car('kamaz', 'truck', 'truck', 2002, 'gas', 'manual'),
new Car('mercedes', 'rezzo', 'truck', 2002, 'gas', 'manual'),new Car('chevy', 'kamion', 'truck', 2002, 'gas', 'manual'),
new Car('man', 'bah maamu', 'truck', 2002, 'gas', 'manual'),new Car('bmw', 'x5', 'bike', 2002, 'gas', 'manual')]
cars = cars.sort(function(a,b) {
    if(a.mark.toUpperCase() > b.mark.toUpperCase()) {
        return 1
    }
    if(a.mark.toUpperCase() < b.mark.toUpperCase()) {
        return -1
    }
    return 0
})
var marks = cars.slice()
for (var index = 0; index < cars.length; index++) {
    for (var num = 0; num < marks.length; num++) {
        if(num > index) {
        if (marks[num] == null || (cars[index].mark.toUpperCase() === marks[num].mark.toUpperCase())) {
            marks[num] = null;
            
        }
    }

    }
}
marks = marks.filter(function(x) {
    
    return x !== null
     
})

