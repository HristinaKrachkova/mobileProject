document.addEventListener('DOMContentLoaded', function() {
    var hiddenElements = document.querySelectorAll("#wrapper"),
        loginBtn = document.getElementById("loginButton"),
        closeBtn = document.getElementById("x"),
        loginForm = document.getElementById("login");
    loginForm.style.top = window.innerHeight;
    loginForm.style.left = window.innerWidth;

    loginBtn.addEventListener("click", function() {
        loginForm.style.display = "block";
        Array.prototype.forEach.call(hiddenElements, el => el.style.display = "none");
    });

    closeBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
        Array.prototype.forEach.call(hiddenElements, el => el.style.display = "block");
    });
});