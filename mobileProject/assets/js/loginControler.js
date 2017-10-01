document.addEventListener('DOMContentLoaded', function() {
    var hiddenElements = document.getElementById("wrapper"),
        loginForm = document.getElementById("login");
    loginForm.style.top = window.innerHeight;
    loginForm.style.left = window.innerWidth;

    document.getElementById("loginButton").addEventListener("click", function() {
        loginForm.style.display = "block";
        hiddenElements.style.display = "none";
    });
    document.getElementById("x").addEventListener("click", function() {
        loginForm.style.display = "none";
        hiddenElements.style.display = "block";
    });
});

function sign_up() {
    var inputs = document.querySelectorAll('.input_form_sign');

    document.querySelectorAll('.ul_tabs > li')[0].className = "";
    document.querySelector('.btn_sign').className = "signUp";
    document.querySelectorAll('.ul_tabs > li')[1].className = "active";

    for (var i = 0; i < inputs.length; i++) {
        if (i == 2) {} else {
            document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
        }
    }

    setTimeout(function() {
        for (var d = 0; d < inputs.length; d++) {
            document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block active_inp";
        }
    }, 100);

    document.querySelector('.signUp').innerHTML = "SIGN UP";
    setTimeout(function() {
        document.querySelector('.terms_and_cons').style.opacity = "1";
        document.querySelector('.terms_and_cons').style.top = "5px";
    }, 500);
    setTimeout(function() {
        document.querySelector('.terms_and_cons').className = "terms_and_cons d_block";
    }, 450);

    document.querySelector('.signUp').addEventListener('click', function() {
        event.preventDefault();

        var username = document.querySelector('input[name = "name_us"]').value;
        var email = document.querySelector('input[name = "emauil_us"]').value;
        var password = document.querySelector('input[name = "pass_us"]').value;
        var confirmPassword = document.querySelector('input[name = "conf_pass_us"]').value;


        if (userList.addUser(username, email, password, confirmPassword, document.querySelector('input[name = "terms_and_cons"]').checked)) {
            // console.log(xxx)
            // if (xxx) {
            document.querySelector('p#error').textContent = 'Username already exists!';
            // }
            document.querySelector('p#error').style.color = 'rgb(17, 114, 149)';
            document.querySelector('p#error').textContent = 'Successful registration!';

            setTimeout(function() {
                document.getElementById("login").style.display = "none"
                document.querySelectorAll(".hidden").forEach(h => h.style.display = "block")
                document.getElementById("wrapper").style.display = "block";
            }, 2000);
        } else {
            document.querySelector('p#error').textContent = 'Invalid data! Please try again.';

            setTimeout(function() {
                document.querySelector('p#error').textContent = '';
                document.querySelector('input[name = "name_us"]').value = '';
                document.querySelector('input[name = "emauil_us"]').value = '';
                document.querySelector('input[name = "pass_us"]').value = '';
                document.querySelector('input[name = "conf_pass_us"]').value = '';
            }, 2000);
        }
    });
};


function sign_in() {
    var inputs = document.querySelectorAll('.input_form_sign');
    document.querySelector('.signUp').className = "btn_sign";
    document.querySelectorAll('.ul_tabs > li')[0].className = "active";
    document.querySelectorAll('.ul_tabs > li')[1].className = "";


    setTimeout(function() {
        for (var d = 0; d < inputs.length; d++) {
            switch (d) {
                case 1:
                    console.log(inputs[d].name);
                    break;
                case 2:
                    console.log(inputs[d].name);
                default:
                    document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block";
                    document.querySelectorAll('.input_form_sign')[2].className = "input_form_sign d_block active_inp";
            }
        }
    }, 100);

    document.querySelector('.terms_and_cons').style.opacity = "0";
    document.querySelector('.terms_and_cons').style.top = "-5px";

    setTimeout(function() {
        document.querySelector('.terms_and_cons').className = "terms_and_cons d_none";
    }, 500);

    setTimeout(function() {
        for (var d = 0; d < inputs.length; d++) {
            switch (d) {
                case 1:
                    console.log(inputs[d].name);
                    break;
                case 2:
                    console.log(inputs[d].name);
                    break;
                default:
                    document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign";
            }
        }
    }, 1500);
    document.querySelector('.btn_sign').innerHTML = "SIGN IN";

    document.querySelector('.btn_sign').addEventListener('click', function() {
        event.preventDefault();
        var email = document.querySelector('input[name = "emauil_us"]').value;
        var password = document.querySelector('input[name = "pass_us"]').value;
        if (userList.login(email, password)) {
            document.getElementById("login").style.display = "none"
            document.querySelectorAll(".hidden").forEach(h => h.style.display = "block")
            document.getElementById("wrapper").style.display = "block";
            document.getElementById("searchResult").style.display = "none"
        } else {
            document.querySelector('p#error').textContent = 'Invalid useraname or password!';

            setTimeout(function() {
                document.querySelector('p#error').textContent = '';
                document.querySelector('input[name = "emauil_us"]').value = ''
                document.querySelector('input[name = "pass_us"]').value = '';
            }, 2000);
        }
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "inline-block";
        document.getElementById("user").style.display = "block";
        document.getElementById("userName").innerHTML = userList.findUser(email, password).username;

    });
    document.getElementById("logoutButton").addEventListener("click", function() {
        document.getElementById("loginButton").style.display = "inline-block";
        document.getElementById("logoutButton").style.display = "none";
        document.getElementById("user").style.display = "none";
        document.getElementById("userName").innerHTML = "";
    })
}




window.onload = function() {
    document.querySelector('.cont_centrar').className = "cont_centrar cent_active";
}