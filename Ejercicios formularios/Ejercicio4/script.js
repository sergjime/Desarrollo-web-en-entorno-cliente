window.onload = function() {
    alert('SCRIPT LISTO');
};

function numRandom(inferior, superior) {
    return Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
}

function init() {
    document.getElementById('num1').innerHTML = numRandom(0, 10);
    document.getElementById('num2').innerHTML = numRandom(0, 10);
}

function comprobarForm() {
    resetErrors();

    var nombre = document.getElementById('nombre');
    var email = document.getElementById('correo');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var num1 = document.getElementById('num1').innerHTML;
    var num2 = document.getElementById('num2').innerHTML;
    var res = document.getElementById('resultado');

    if (!comprobarNombre(nombre)) {
        nombre.focus();
        return false;
    }
    if (!comprobarEmail(email)) {
        email.focus();
        return false;
    }
    if (!comprobarPass(pass1)) {
        pass1.focus();
        return false;
    }
    if (!comprobarPass2(pass1, pass2)) {
        pass2.focus();
        return false;
    }
    if (!comprobarOperacion(num1, num2, res)) {
        res.focus();
        return false;
    }
}

function comprobarNombre(nombre) {
    var element = document.getElementById('nombreError');

    if (nombre.value == "") {
        element.innerHTML = "El NOMBRE introducido está vacio.";

        return false;
    }
    return true;
}

function comprobarEmail(correo) {
    var email = correo.value;
    var element = document.getElementById('correoError');

    if (email == "") {
        element.innerHTML = "El CORREO introducido está vacio.";
        return false;
    }

    var cortar = email.split("@");

    if (!cortar[1] || cortar[0] == "") {
        element.innerHTML = "El CORREO no es válido.";
        return false;
    } else {
        var dominio = cortar[1].split(".");

        if (!dominio[1]) {
            element.innerHTML = "El CORREO no es válido.";
            return false;
        }
    }

    return true;
}

function comprobarPass(passwd) {
    var pass = passwd.value;
    var element = document.getElementById('pass1Error');
    var nMay = 0,
        nNum = 0;
    var valNum = "0123456879";
    var valMay = "QWERTYUIOPASDFGHJKLÑMNBVCXZ";

    if (pass == "") {
        element.innerHTML = "La CONTRASEÑA introducida está vacia.";
        return false;
    }

    if (pass.length < 8) {
        element.innerHTML = "La CONTRASEÑA introducida es muy débil introduzca una con más caracteres.";
        return false;
    }

    for (var i = 0; i < pass.length; i++) {
        if (valNum.indexOf(pass.charAt(i)) != -1) nNum++;
        if (valMay.indexOf(pass.charAt(i)) != -1) nMay++;
    }

    if (nMay < 1) {
        element.innerHTML = "La CONTRASEÑA debe contener algún carácter en mayuscula.";
        return false;
    }

    if (nNum < 1) {
        element.innerHTML = "La CONTRASEÑA debe contener algún carácter númerico.";
        return false;
    }

    return true;

}

function comprobarPass2(passwd1, passwd2) {
    var pass1 = passwd1.value;
    var pass2 = passwd2.value;
    var element = document.getElementById('pass2Error');

    if (pass2 == "") {
        element.innerHTML = "La CONTRASEÑA está vacia.";
        return false;
    }

    if (pass1 != pass2) {
        element.innerHTML = "La CONTRASEÑAS introducidas no coinciden.";
        return false;
    }

    return true;
}

function comprobarOperacion(num1, num2, res) {
    var elemento = document.getElementById('resultadoError');
    var resultado = res.value;

    if (resultado == "") {
        elemento.innerHTML = "El RESULTADO esta vacio.";
        init();
        return false;
    }

    if (parseInt(num1) + parseInt(num2) != resultado) {
        elemento.innerHTML = "El resultado de la operación es Erroneo.";
        init();
        return false;
    }

    return true;
}

function resetErrors() {
    document.getElementById('nombreError').innerHTML = "";
    document.getElementById('correoError').innerHTML = "";
    document.getElementById('pass1Error').innerHTML = "";
    document.getElementById('pass2Error').innerHTML = "";
    document.getElementById('resultadoError').innerHTML = "";
}

function myCheck() {
    if (document.getElementById('check').checked)
        document.getElementById('submit').removeAttribute("disabled");
    else
        document.getElementById('submit').setAttribute("disabled", "");
}