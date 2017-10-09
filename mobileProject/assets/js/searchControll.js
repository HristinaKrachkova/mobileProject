var marksOptions = function(typeButton) {

    var selectButton = document.getElementById(typeButton)
    if (selectButton.tagName == 'UL') {
        selectButton = document.querySelector('#pType li.selected')
    }
    var options = carsList.cars.filter(function(car) {
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
    return marks
}

document.addEventListener('DOMContentLoaded', function() {
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

    function changeSlogan(event) {
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
    }

    function clearMenu(searchOption) {
        if (searchOption == 'vModel' || searchOption == 'vBrand') {
            while (document.getElementById(searchOption).childNodes.length > 2) {
                document.getElementById(searchOption).removeChild(document.getElementById(searchOption).lastChild);
            }
        } else {
            if (searchOption == 'vPrice') {
                document.getElementById(searchOption).value = ''
            } else {
                document.getElementById(searchOption).value = 0
            }
        }

    }

    function searchByType() {

        var selectButton = document.getElementById('vType')
        Array.prototype.forEach.call(document.getElementById('searchMiniForm'), function(x) {
            if (x['id'] !== 'vType' && x['id'] !== 'searchButton') {
                clearMenu(x['id'])
            }
        })
        changeIcon()
        changeSlogan()


        var cars = carsList.cars.sort(function(a, b) {
            if (a.mark.toUpperCase() > b.mark.toUpperCase()) {
                return 1
            }
            if (a.mark.toUpperCase() < b.mark.toUpperCase()) {
                return -1
            }
            return 0
        })
        var marks = marksOptions('vType')


        marks.forEach(function(x) {
            var brand = document.createElement('option')
            brand.setAttribute('value', (marks.indexOf(x) + 1))
            brand.innerHTML = x.mark;
            document.getElementById('vBrand').appendChild(brand)
        })
        document.getElementById('vBrand').addEventListener('change', function(event) {
            var models = carsList.cars.filter(function(x) {
                var e = document.getElementById("vBrand");
                var strUser = e.options[e.selectedIndex];
                return x.mark.toUpperCase() == strUser.innerHTML.toUpperCase()
            })
            clearMenu('vModel')
            models.forEach(function(x) {
                if (document.getElementById('vBrand').options[document.getElementById('vBrand').selectedIndex].innerHTML !== 'Всички') {
                    var el = document.getElementById("vType");
                    var strUser = el.options[el.selectedIndex];

                    var mod = document.createElement('option');
                    mod.setAttribute('value', x.model)
                    if (x.type == strUser.getAttribute('type')) {
                        mod.innerHTML = x.model
                        if (!Array.prototype.some.call(document.querySelectorAll('#vModel option'), function(option) {
                                return mod.innerHTML == option.innerHTML
                            })) {
                            document.getElementById('vModel').appendChild(mod)
                        }
                    }
                }
            })
        });




    }
    document.getElementById('vType').addEventListener('change', searchByType, false)
    document.getElementById('searchButton').addEventListener('click', function(event) {
        event.preventDefault()
        var type = document.getElementById('vType').options[document.getElementById('vType').selectedIndex].getAttribute('type')
        var mark = document.getElementById('vBrand').options[document.getElementById('vBrand').selectedIndex].textContent
        var model = document.getElementById('vModel').options[document.getElementById('vModel').selectedIndex].textContent
        var price = document.getElementById('vPrice').value
        var year = document.getElementById('vYear').value
        var engine = document.getElementById('vEngine').value
        var gearBox = document.getElementById('vGear').value

        
        
        if ($('#vType').children(':selected').html() !== 'Всички') {
            result = carsList.cars.filter(function (x) {
                return x.type.toUpperCase() == type.toUpperCase()
            })
        if (mark !== 'Всички') {
            result = result.filter(function(x) {
                return x.mark.toUpperCase() == mark.toUpperCase()
            })
        }
        if (model !== 'Всички') {
            result = result.filter(function(x) {
                return x.model.toUpperCase() == model.toUpperCase()
            })
        }
        if (price !== '') {
            result = result.filter(function(x) {
                return x.price < price
            })
        }
        if (year != 0) {
            result = result.filter(function(x) {
                return x.year >= year
            })
        }

        if (engine != 0) {
            result = result.filter(function(x) {
                return x.engine == engine
            })
        }
        if (gearBox != 0) {
            result = result.filter(function(x) {
                return x.gearBox == gearBox
            })
        }

        var templateResult = document.getElementById('search-template').innerHTML
        var templateSearch = Handlebars.compile(templateResult)
        var readyHTML = templateSearch({ results: result })
        document.getElementById('searchResult').innerHTML = readyHTML
        var hidden = document.getElementsByClassName("hiddenDiv");
        document.getElementById('searchResult').style.display = "block";
        Array.prototype.forEach.call(hidden, function(m) {
            m.style.display = "none";
        }) } else {
            document.getElementById('searchResult').innerHTML = ''
            var p = document.createElement('p');
            p.textContent = 'Изберете тип на превозното средство'
            p.setAttribute('class', 'nothingP')
            document.getElementById('searchResult').appendChild(p);
            document.getElementById('searchResult').style.display = "block";
            
        }





    }, false)

    var iconsLi = Array.prototype.slice.call(document.querySelectorAll('#iconNavUl li a'))
    iconsLi.forEach(function(x) {
        x.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('vType').value = x.getAttribute('value');
            searchByType();
        });
    })
    $('#vPrice').on('keyup',function(){
        if(isNaN($('#vPrice').val())) { 
            $('#vPrice').css('color', 'red')
        } else {
            $('#vPrice').css('color', 'black')
        }})

}, false)


function getJSON() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/mobile/mobileProject/mobileProject/assets/js/cars.json', true);
        xhr.send(null);
        xhr.addEventListener('load', function() {
            if (xhr.status >= 200 && xhr.status <= 299) {
                var cars = JSON.parse(xhr.responseText)
                resolve(cars)
            } else {
                reject(xhr.statusText)
            }
        })
    })

}

getJSON().then(function(data) {

    carsList.cars = Array.prototype.slice.call(data.carList, 0)
})