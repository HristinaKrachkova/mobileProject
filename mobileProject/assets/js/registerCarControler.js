$(function () {

    function changeBtn() {
        $('#publishBtn').text() == 'Публикувай' ? $('#publishBtn').text('HOME') : $('#publishBtn').text('Публикувай');

        $('#publishBtn').text() == 'Публикувай' ?
            $('.hiddenDiv').css('display', 'block') && $('#searchResult').css('display', 'none') && $('#publish').css('display', 'none') && $('.footerDivs').css('display', 'none') :
            $('.hiddenDiv').css('display', 'none') && $('#publish').css('display', 'block') && $('.footerDivs').css('display', 'none');
    };

    $('#publishBtn').click(function () {
        changeBtn();
    });

    $('#btnSell').click(function () {
        changeBtn();
        $('#searchResult').css('display', 'none');
    });

    $('#searchButton').click(function () {
        changeBtn();
        $('#publish').css('display', 'none');
    });

    $('.bigCatMenu').click(function () {
        changeBtn();
        $('#publish').css('display', 'none');

    });


    $('.item').on('click',function () {
        event.preventDefault();
     
        changeBtn();
        $('#searchResult').css('display', 'block')
        $('#publish').css('display', 'none');
        var randomImg = $(this).find('img').attr('src');
    
        var result = [carsList.cars.find(c => c.img == randomImg)];
        var searchTemplate = $('#search-template').html();
        var template = Handlebars.compile(searchTemplate);
        var resultRandom = { results: result };
        var result = template(resultRandom);
             
        $('#searchResult').html(result);
        $('.searchResult').css('display', 'block');
        $('.hiddenDiv').css('display', 'none');
      
    })


    $('#logo>img').click(function () {
        $('.hiddenDiv').css('display', 'block') && $('#publish').css('display', 'none') && $('#searchResult').css('display', 'none')
            && $('.footerDivs').css('display', 'none') && $('#publishBtn').text('Публикувай');
    })
})
