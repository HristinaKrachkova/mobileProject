document.addEventListener('DOMContentLoaded', function() {

    var index = 1;


    //IF WE WANT BUTTONS

    // function plusIndex(n) {
    //     index = index + n;
    //     showImage(index);
    // }

    // function showImage(n) {
    //     var slides = document.getElementsByClassName("slides");
    //     if (n > slides.length)
    //         index = 1;
    //     if (n < 1)
    //         index = slides.length;
    //     for (var i = 0; i < slides.length; i++)
    //         slides[i].style.display = "none";
    //     slides[index - 1].style.display = "block";
    // }
    // showImage(1);


    function autoSlide() {
        var slides = document.getElementsByClassName("slides");
        Array.prototype.forEach.call(slides, function(s) {
            s.style.display = "none";
        })
        if (index > slides.length)
            index = 1;
        slides[index - 1].style.display = "block";
        index++;
        setTimeout(autoSlide, 2000);
    }
    autoSlide();

});