$(function () {

    $('#pType').on('click', function (e) {
        
        $(e).ready(function () {
            $('#pBrand').html('')
            var type = $('#pType li.selected').attr('value')
            var marks = marksOptions('pType')
            marks.sort(function (a, b) {
                if (a.mark > b.mark) {
                    return 1
                }
                if (a.mark < b.mark) {
                    return -1
                }
                return 0
            })
            marks.forEach(function (mark) {
                var markLi = document.createElement('li')
                markLi.innerHTML = mark.mark
                $('#pBrand').append(markLi)
            })
            $('#pBrand').on('click', function(e) {
                $(e).ready(function() {
                var models = carsList.cars.filter(function (x) {
                var e = document.getElementById("pBrand");
                var modelsOfE = $('#pBrand li.selected').html();
                return x.mark == modelsOfE
            })
                var usedModels = []
                models.forEach(function(car) {
                    var modelLi = document.createElement('li')
                    modelLi.innerHTML = car.model
                    if(!usedModels.some(function(x) {
                        return x.model == car.model
                    })) {
                         usedModels.push(car)
                         $('#pModel').append(modelLi)
                    } 
                   
                })
            })
            })
            
        })
    })

    $('#publishFormBtn').on('click', function(e) {
        event.preventDefault();
        $('#pType li.selected').attr('type')
        carsList.publishCar($('#pBrand li.selected').html(),$('#pModel li.selected').html(), $('#pType li.selected').attr('type'),$('#pYear').val(),  $('#pEngine li.selected').attr('value'),$('#pGearBox li.selected').attr('value'), $('#pImg').val(),$('#pPrice').val()   )
    })


})