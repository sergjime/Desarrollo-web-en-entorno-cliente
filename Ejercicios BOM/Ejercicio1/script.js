window.onload = function() {
    let nombre = prompt("¿Cómo te llamas?");
    let parrafo = document.createElement("p");
    let textoMayus = document.createTextNode(nombre.toUpperCase());
    parrafo.appendChild(textoMayus);
    document.body.appendChild(parrafo);
    alert(nombre.toUpperCase);
}