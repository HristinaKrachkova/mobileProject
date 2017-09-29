document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginAndRegisterBtn').addEventListener('click', function () {
        event.preventDefault();
        var email = document.querySelector('input[name = "emauil_us"]').value;
        var password = document.querySelector('input[name = "pass_us"]').value;
        if (userList.login(email, password)) {
            document.getElementById("login").style.display = "none"
            document.querySelectorAll(".hidden").forEach(h => h.style.display = "block")
            document.getElementById("wrapper").style.display = "block";

        } else {
            document.querySelector('p#error').textContent = 'Invalid useraname or password!';

            setTimeout(function () {
                document.querySelector('p#error').textContent = '';
                var email = document.querySelector('input[name = "emauil_us"]').value = ''
                var password = document.querySelector('input[name = "pass_us"]').value = '';
            }, 2000);
        }
    });

    document.getElementById('loginAndRegisterBtn').addEventListener('click', function () {
        event.preventDefault();

        var username = document.querySelector('input[name = "name_us"]').value;
        var email = document.querySelector('input[name = "emauil_us"]').value;
        var password = document.querySelector('input[name = "pass_us"]').value;
        var confirmPassword = document.querySelector('input[name = "conf_pass_us"]').value;

        userList.addUser(username, email, password, confirmPassword, document.querySelector('input[name = "terms_and_cons"]').checked);
    });


});