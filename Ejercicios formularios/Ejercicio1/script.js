window.onload = function() {
    var formulario = document.forms[0];
    var tipos = [];
    var valores = retornaValor(formulario, tipos);
};

function validateForm() {
    var formulario = document.forms[0];
    var tipos = [];
    var valores = retornaValor(formulario, tipos);
    for (i = 0; i < valores.length; i++) {
        valores[i] = ' ' + valores[i];
    }
    document.getElementById('paragraf').innerHTML = "Continguts dels diferents camps: " + valores;
    return false;
}

// Esta función devolverá un array de valores en el cual estarán los valores de cada tipo de elemento
function retornaValor(formulario, tipos) {
    var valores = [];
    for (i = 0; i < formulario.elements.length; i++) {
        var elemento = formulario.elements[i];
        var tipo = elemento.type;
        tipos.push(tipo);
        if (tipos[i] == "text" || tipos[i] == "textarea") {
            valores.push(elemento.value);
        } else {
            if (tipos[i] == "radio" || tipos[i] == "checkbox") {
                if (elemento.checked) {
                    valores.push(elemento.value);
                }
            } else {
                if (tipos[i] == "select-one") {
                    valores.push(elemento.options[elemento.selectedIndex].value);
                }
            }
        }
    }
    return valores;
}
