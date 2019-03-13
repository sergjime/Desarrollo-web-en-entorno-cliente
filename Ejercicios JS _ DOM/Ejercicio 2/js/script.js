window.onload = function() {
    if (location.protocol != 'https:')
    {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }

    let parrafos = document.getElementsByTagName("p");
    for (var i = 0; i < parrafos.length; i++) {
        var claseDeParrafo = parrafos[i].getAttribute("class");
        if(claseDeParrafo == "importante"){
            cambiaAtributo(claseDeParrafo);
        }
    }
};

function cambiaAtributo(parrafo){
    parrafo.setAttribute("class", "resaltar");
}