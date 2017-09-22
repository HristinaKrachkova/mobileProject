var options1 = ['djipove', 'aston', 'babi'];
var opel = ['lodki', 'modki', 'takiva'];

function changeIcon() {
    var e = document.getElementById('vType').value;
    switch (e) {
        case '1':
            document.getElementById('picSelect').src = './assets/img/vehicle_1.gif'
            break;
        case '2':
            document.getElementById('picSelect').src = './assets/img/vehicle_2.gif'
            break;
        case '3':
            document.getElementById('picSelect').src = './assets/img/vehicle_3.gif'
            break;
        case '4':
            document.getElementById('picSelect').src = './assets/img/vehicle_4.gif'
            break;
        case '5':
            document.getElementById('picSelect').src = './assets/img/vehicle_5.gif'
            break;

        default:
            break;
    }
}
document.getElementById('vType').addEventListener('change', changeIcon, false)
document.getElementById('vType').addEventListener('change', function(event) {
    var element = document.getElementById('vType');
    document.getElementById('slogan').innerHTML

    switch (element.value) {
        case '1':
            document.getElementById('slogan').innerHTML = 'Сайт №1 за Автомобили '
            break;
        case '2':
            document.getElementById('slogan').innerHTML = 'Сайт №1 за Джипове'
            break;
        case '3':
            document.getElementById('slogan').innerHTML = 'Сайт №1 за Бусове'
            break;
        case '4':
            document.getElementById('slogan').innerHTML = 'Сайт №1 за Камиони'
            break;
        case '5':
            document.getElementById('slogan').innerHTML = 'Сайт №1 за Мотоциклети'
            break;

        default:
            break;
    }
})


document.getElementById('vType').addEventListener('change', function(event) {
    var selectButton = document.getElementById('vType')
    while (document.getElementById('vBrand').childNodes.length > 2) {
        document.getElementById('vBrand').removeChild(document.getElementById('vBrand').lastChild);
    }

    cars = cars.sort(function(a, b) {
        if (a.mark.toUpperCase() > b.mark.toUpperCase()) {
            return 1
        }
        if (a.mark.toUpperCase() < b.mark.toUpperCase()) {
            return -1
        }
        return 0
    })
    var options = cars.filter(function(car) {
        if (selectButton.value == '1') {
            return car.type == 'car'
        }
        if (selectButton.value == '2') {
            return car.type == 'jeep'
        }
        if (selectButton.value == '3') {
            return car.type == 'bus'
        }
        if (selectButton.value == '4') {
            return car.type == 'truck'
        }
        if (selectButton.value == '5') {
            return car.type == 'bike'
        }
    })

    var marks = options.slice()
    for (var index = 0; index < options.length; index++) {
        for (var num = 0; num < marks.length; num++) {
            if (num > index) {
                if (marks[num] == null || (options[index].mark.toUpperCase() === marks[num].mark.toUpperCase())) {
                    marks[num] = null;

                }
            }
        }
    }
    marks = marks.filter(function(x) {
        return x !== null
    })

    marks.forEach(function(x) {
        var brand = document.createElement('option')
        brand.setAttribute('value', (marks.indexOf(x) + 1))
        brand.innerHTML = x.mark;
        document.getElementById('vBrand').appendChild(brand)
    })
    document.getElementById('vBrand').addEventListener('change', function(event) {
        var models = cars.filter(function(x) {
            var e = document.getElementById("vBrand");
            var strUser = e.options[e.selectedIndex];
            return x.mark.toUpperCase() == strUser.innerHTML.toUpperCase()
        })
        while (document.getElementById('vModel').childNodes.length > 2) {
            document.getElementById('vModel').removeChild(document.getElementById('vModel').lastChild);
        }
        models.forEach(function(x) {
            if (document.getElementById('vBrand').options[document.getElementById('vBrand').selectedIndex].innerHTML !== 'Всички')
                var el = document.getElementById("vType");
            var strUser = el.options[el.selectedIndex];

            var mod = document.createElement('option');
            var value = 1
            mod.setAttribute('value', value++)
            if (x.type == strUser.getAttribute('type')) {
                mod.innerHTML = x.model
                document.getElementById('vModel').appendChild(mod)
            }
        })
    });




}, false)