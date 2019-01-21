window.onload = function() {

   var num_links = document.getElementsByTagName("a").length;
    console.log("El número de enlaces es de: " + num_links);

    var num_parrafos = document.getElementsByTagName("p").length;
    console.log("El número de párrafos es de: " + num_parrafos);

    var penultimo_link = document.getElementsByTagName("a")[num_links -2];
    console.log("El penúltimo enlace es: " + penultimo_link);

    var ultimo_link = document.getElementsByTagName("a")[num_links - 1];
    console.log("El último de párrafos es de: " + ultimo_link);
   
    var arrayLinks = document.getElementsByTagName("a");
    var linkBuscado = "http://www.jurassicpark.com";

    console.log(busquedaLink(arrayLinks, linkBuscado));

    var p = document.getElementsByTagName("p");
    console.log(contadorLinksP(p));
};

function busquedaLink(arrayLink, link){
   var contador = 0;
    for (i = 0; i < arrayLink.length; i ++){
        if(arrayLink[i].href == link + "/"){
            contador ++;
        }
    }
    return contador;
}

function contadorLinksP (arrayP){
    var resultados = new Array();
    for (i = 0; i < arrayP.length; i ++){
        var resultadoLinks = arrayP[i].getElementsByTagName("a").length;
        resultados.push("El párrafo número " + (i + 1) + " tiene " + resultadoLinks + " enlaces");
    }
    return resultados;
}