
window.onload = function() { 
    let parrafo = document.createElement("p");
    parrafo.appendChild(setInterval(function(){ cambia(); }, 1000));
    document.body.appendChild(parrafo);
}

function cambia(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horaTexto = hora+':'+minutos+':'+segundos;
    return horaTexto;
}