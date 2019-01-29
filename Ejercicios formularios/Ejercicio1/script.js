window.onload = function() {
    var parrafo = document.getElementById('paragraf');
};

function validateForm() {
    var formulario = document.forms[0];
    var tipos = [];
    var valores = retornaValor(formulario, tipos);
    document.getElementById('paragraf').innerHTML = "Continguts dels diferents camps: " + valores;
    console.log(valores);
    return false;
}

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
                if (tipos[i] == "select") {
                    valores.push(elemento.options[elemento.selectedIndex].value);
                }
            }
        }
    }
    return valores;
}