document.addEventListener('DOMContentLoaded', function () {

    var divTC = document.getElementById("termsAndConditions");
    divTC.style.display = "none";

    var buttonTC = document.getElementById("tc");

    var hidden = document.getElementsByClassName("hidden");
    buttonTC.addEventListener("click", function () {
        divTC.style.display = "block";
        Array.prototype.forEach.call(hidden, function (m) {
            m.style.display = "none";
        })

    })

});