window.onload = function() {
    let fecha = new Date();
    let parrafo = document.createElement("p");
    let textoHora = document.createTextNode(setInterval(function(){ cambia(fecha); }, 1000));
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
