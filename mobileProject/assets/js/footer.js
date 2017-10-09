document.addEventListener('DOMContentLoaded', function() {

    function footerHide() {
        var hidden = document.getElementsByClassName("hiddenDiv");
        event.preventDefault();
        document.getElementById('publishBtn').innerHTML = 'HOME';
        document.getElementById('publish').style.display = "none";
        document.getElementById('searchResult').style.display = "none";
        Array.prototype.forEach.call(hidden, function(m) {
            m.style.display = "none";
        });
    }

    document.getElementById("tc").addEventListener("click", function() {
        footerHide();
        document.getElementById("termsAndConditions").style.display = "block";
        document.getElementById("contactList").style.display = "none";
    });

    document.getElementById("contacts").addEventListener("click", function() {
        footerHide();
        document.getElementById("contactList").style.display = "block";
        document.getElementById("termsAndConditions").style.display = "none";
    });

    document.getElementById("termsAndCons").addEventListener("click", function() {
        footerHide();
        document.getElementById("termsAndConditions").style.display = "block";
        document.getElementById("wrapper").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("contactList").style.display = "none";

    });
});