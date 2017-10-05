document.addEventListener('DOMContentLoaded', function () {

    var divTC = document.getElementById("termsAndConditions");
    divTC.style.display = "none";

    var buttonTC = document.getElementById("tc");

    var hidden = document.getElementsByClassName("hiddenDiv");
    buttonTC.addEventListener("click", function () {
        event.preventDefault();
        document.getElementById('publishBtn').innerHTML = 'HOME';
        document.getElementById('publish').style.display = "none";
        document.getElementById('searchResult').style.display = "none";
        divTC.style.display = "block";
        Array.prototype.forEach.call(hidden, function (m) {
            m.style.display = "none";
        });
    });




});

