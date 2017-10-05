$(function () {

    function changeBtn() {
        $('#publishBtn').text() == 'Публикувай' ? $('#publishBtn').text('HOME') : $('#publishBtn').text('Публикувай');

        $('#publishBtn').text() == 'Публикувай' ?
            $('.hiddenDiv').css('display', 'block') && $('#publish').css('display', 'none') && $('#termsAndConditions').css('display', 'none') :
            $('.hiddenDiv').css('display', 'none') && $('#publish').css('display', 'block') && $('#termsAndConditions').css('display', 'none');
    };

    $('#publishBtn').click(function () {
        changeBtn()
    });

    $('#btnSell').click(function () {
        changeBtn()
    });

    $('#logo>img').click(function () {
         $('.hiddenDiv').css('display', 'block') && $('#publish').css('display', 'none') && $('#termsAndConditions').css('display', 'none') && $('#publishBtn').text('Публикувай')
    })
})
