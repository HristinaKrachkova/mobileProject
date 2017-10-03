$(function(){
    var randomTemplate = $("#random-template").html();
    var template = Handlebars.compile(randomTemplate);
    var cars = []
    for (var index = 0; index < 5; index++) {
        var i = Math.floor(Math.random()*carsList.cars.length)
        if(!cars.some((x) => x.id === carsList.cars[i].id)) {
        cars.push(carsList.cars[i])        
        } else {
            index--
        }
    }
    var result = template({cars});
    $('#newest').html(result)
})