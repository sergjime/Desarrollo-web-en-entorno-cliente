window.onload = function() {
    alert('SCRIPT LISTO');
    actualizaInfo(150);
}

function limita(elEvento, maximoCaracteres) {
    var elemento = document.getElementById("myTextArea");
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;

    if (codigoCaracter == 37 || codigoCaracter == 38 || codigoCaracter == 39 || codigoCaracter == 40) {
        return true;
    }

    if (codigoCaracter == 8 || codigoCaracter == 46) {
        return true;
    } else if (elemento.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}

function actualizaInfo(maximoCaracteres) {
    var elemento = document.getElementById("myTextArea");
    var info = document.getElementById("info");

    if (elemento.value.length >= maximoCaracteres) {
        info.innerHTML = "Ha arribat al m&agrave;xim de " + maximoCaracteres + " car&agrave;cters.";
    } else {
        info.innerHTML = "Pots escriure " + (maximoCaracteres - elemento.value.length) + " car&agrave;cters m&eacute;s.";
    }
}