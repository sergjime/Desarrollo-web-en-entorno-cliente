window.onload = function() {
    let fecha = new Date();
    let parrafo = document.createElement("p");
    // let horaActual = setTimeout(cambia(fecha), 1000);
    let textoHora = document.createTextNode(cambia(fecha));
    parrafo.appendChild(textoHora);
    document.body.appendChild(parrafo);
}

function cambia(fecha){
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horaTexto = hora+':'+minutos+':'+segundos;
    return horaTexto;
}