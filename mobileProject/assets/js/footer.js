document.addEventListener('DOMContentLoaded', function () {

    var divTC = document.getElementById("termsAndConditions");
    divTC.style.display = "none";

    var buttonTC = document.getElementById("tc");

    var hidden = document.getElementsByClassName("hiddenDiv");
    buttonTC.addEventListener("click", function () {
        event.preventDefault();
        document.getElementById('publishBtn').innerHTML = 'HOME';
        divTC.style.display = "block";
        Array.prototype.forEach.call(hidden, function (m) {
            m.style.display = "none";
        });
    });



});

