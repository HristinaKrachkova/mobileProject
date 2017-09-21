var options1 = ['djipove', 'aston', 'babi'];
var opel = ['lodki', 'modki', 'takiva'];
function changeIcon() {
    var e = document.getElementById('vType').value;
    switch (e) {
        case '1': document.getElementById('picSelect').src = './assets/img/vehicle_1.gif'
            break;
        case '2': document.getElementById('picSelect').src = './assets/img/vehicle_2.gif'
            break;
        case '3': document.getElementById('picSelect').src = './assets/img/vehicle_3.gif'
            break;
        case '4': document.getElementById('picSelect').src = './assets/img/vehicle_4.gif'
            break;
        case '5': document.getElementById('picSelect').src = './assets/img/vehicle_5.gif'
            break;

        default:
            break;
    }
}
document.getElementById('vType').addEventListener('change', changeIcon, false)
document.getElementById('vType').addEventListener('change', function () {
    var e = document.getElementById('vType');
    document.getElementById('slogan').innerHTML
    
    switch (e.value) {
        case '1': document.getElementById('slogan').innerHTML = 'Сайт №1 за Автомобили '
            break;
        case '2': document.getElementById('slogan').innerHTML = 'Сайт №1 за Джипове'
            break;
        case '3': document.getElementById('slogan').innerHTML = 'Сайт №1 за Бусове'
            break;
        case '4': document.getElementById('slogan').innerHTML = 'Сайт №1 за Камиони'
            break;
        case '5': document.getElementById('slogan').innerHTML = 'Сайт №1 за Мотоциклети'
            break;

        default:
            break;
    }
})



