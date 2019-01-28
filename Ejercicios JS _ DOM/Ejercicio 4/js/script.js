function numAzar(){
    var aleatorio = Math.floor(Math.random() * 100) + 1;
    for (i = 1; i < 3; i ++){
        var num = document.getElementById("cuadrado"+i).innerHTML = aleatorio;
        document.getElementById("cuadrado"+i).appendChild(num);     
    }
}