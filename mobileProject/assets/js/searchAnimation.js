$(function () {
    $(document).on('click', '.cars .seeMore', function () {
        event.preventDefault()
        if ($(this).text() == 'Виж повече') {
            $(this).text('Скрий информацията');
            $(this).siblings('.carDescription').show('slow');
            $(this).siblings('.buy').show('slow');

        } else {
            $(this).text('Виж повече')
            $(this).siblings('.carDescription').hide('slow')
            $(this).siblings('.buy').hide('slow')
        }
    })





    $(document).on('click', '.cars .buy', function () {
        alert('kupih q')

    })







    $(document).on('click', '.cars .likeBtn', function (e) {
        event.preventDefault();
        $(e).ready(function () {
            var users = JSON.parse(localStorage.getItem('users'))
            var likedCar = $(e.target).parent().find('img').attr('src')
            var c = carsList.cars.find(function (x) {
                return x.img == likedCar
            })
            console.log(likedCar)
            console.log(c)
            var user = users.find(function (user) {
                return user.username == $('#userName').html()
            })

            if (user) {
                var imaLi = user.likes.some(x => x.img === c.img)
                console.log(imaLi)
                if (!imaLi) {
                    user.likes.push(c)
                    localStorage.setItem('users', JSON.stringify(users));
                }
            }
        })

    })


})