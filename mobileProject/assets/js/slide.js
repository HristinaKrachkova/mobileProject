document.addEventListener('DOMContentLoaded', function() {

    var index = 1;
    var slides = document.getElementsByClassName("slides");
    var newsList = document.getElementsByClassName("newsList");
    Array.prototype.forEach.call(slides, function(s) {
        s.style.display = "none";
    });

    function autoSlide() {
        Array.prototype.forEach.call(slides, function(s) {
            s.style.display = "none";
        });
        Array.prototype.forEach.call(newsList, function(n) {
            n.style.fontWeight = "normal";
            n.addEventListener("mouseover", newsHover);
            var id = n.id;
        });

        function newsHover() {
            Array.prototype.forEach.call(slides, function(s) {
                s.style.display = "none";
            });
            Array.prototype.forEach.call(newsList, function(n) {
                n.style.fontWeight = "normal";
                n.addEventListener("mouseout", autoSlide);
            });
            slides[this.id - 1].style.display = "block";
            clearTimeout(idTimeout);
        }
        if (index > newsList.length)
            index = 1;
        slides[index - 1].style.display = "block";
        newsList[index - 1].style.fontWeight = "bold";
        index++;
        var idTimeout = setTimeout(autoSlide, 3000);
    };
    autoSlide();

});