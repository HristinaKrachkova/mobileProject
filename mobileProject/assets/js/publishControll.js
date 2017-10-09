$(function () {

    $('#pType').on('click', function (e) {

        $(e).ready(function () {
            $('#pBrand').html('')
            $('#pModel').html('')
            $('#pPrice').val($('#pPrice').attr('placeholder'))
            $('#pYear').val($('#pYear').attr('placeholder'))
            $('#pImg').val($('#pImg').attr('placeholder'))

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
                    $('#pModel').html('')
                var models = carsList.cars.filter(function (x) {
                var e = document.getElementById("pBrand");
                var modelsOfE = $('#pBrand li.selected').html();
                return x.mark == modelsOfE && x.type == $('#pType li.selected').attr('type');
            })  
            models.sort(function(a,b) {
                if(a.model > b.model) {
                    return 1;
                }
                if(a.model < b.model) {
                    return -1;
                }
                return 0;
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

    $('#publishFormBtn').on('click', function (e) {
        event.preventDefault();
        $('#pType li.selected').attr('type')
        var user = $('#userName').html();
        if(user != "") {
        carsList.publishCar($('#pBrand li.selected').html(),$('#pModel li.selected').html(), $('#pType li.selected').attr('type'),$('#pYear').val(),  $('#pEngine li.selected').attr('value'),$('#pGearBox li.selected').attr('value'), $('#pImg').val(),$('#pPrice').val()   )
        } else {
            var p = document.createElement('p');
            p.textContent = 'Изберете тип на превозното средство'
            p.setAttribute('class', 'nothingP')
            document.getElementById('searchResult').appendChild(p);
            document.getElementById('searchResult').style.display = "block";
            $('.hiddenDiv').css('display', 'none')
        }    
})


}) })