$(function () {
    $('.searchButtons').on('click', function () {
        var int = setInterval(function () {
            if ($('.searchResult')) {
                $('.seeMore').on('click', function () {
                    event.preventDefault()
                    if ($(this).text() == 'Виж повече') {
                        $(this).text('Скрий информацията');
                        $(this).siblings('.carDescription').show('slow');
                        $(this).siblings('.buy').show('slow');
                        $(this).siblings('.buy').on('click', function() {
                            alert('kupih q')
                        })

                    } else {
                        $(this).text('Виж повече')
                        $(this).siblings('.carDescription').hide('slow')
                        $(this).siblings('.buy').hide('slow')
                    }
                });
                clearInterval(int)
            }
        }, 100)

        // $('.seeMore').live('click',function(){
        //     $(this).parent().animate({
        //     opacity: '0.5'})
        // })
    })
})

    // $("h2").on("click", "p.test", function(){
    //     alert($(this).text());
    // });

    // $("h2").delegate("p", "click", function(){
    //     alert('you clicked me again!');
    // });