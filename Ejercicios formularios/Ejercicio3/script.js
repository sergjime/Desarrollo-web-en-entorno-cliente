window.onload = function() {
    alert('SCRIPT LISTO');
    document.getElementById("txtNums").onkeypress = function(event) {
        return limitaCaracters(event, retornaValor(document.getElementById("selSistNum")));
    };
    document.getElementById("selSistNum").onchange = function() {
        document.getElementById("txtNums").value = "";
    }
}

function limitaCaracters(elEvento, sistNum) {
    var binari = "01";
    var octal = "01234567";
    var decimal = "0123456789";
    var hexadecimal = "0123456789abcdefABCDEF";

    var tecles_especials = [8, 37, 38, 39, 40, 46];
    var permesos = "";

    switch (sistNum) {
        case 'bin':
            permesos = binari;
            break;
        case 'oct':
            permesos = octal;
            break;
        case 'dec':
            permesos = decimal;
            break;
        case 'hex':
            permesos = hexadecimal;
            break;
        default:

    }

    var evento = elEvento || window.event;
    var codiCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codiCaracter);

    var tecla_especial = false;
    for (var i in tecles_especials) {
        if (codiCaracter == tecles_especials[i]) {
            tecla_especial = true;
            break;
        }
    }

    return permesos.indexOf(caracter) != -1 || tecla_especial;
}

function retornaValor(objeto) {
    switch (objeto.type) {
        case "text":
        case "textarea":
            return objeto.value;
        case "radio":
        case "checkbox":
            if (objeto.checked) {
                return objeto.value;
            } else {
                return "";
            }
            break;
        case "select-one":
            return objeto.options[objeto.selectedIndex].value;
    }
}