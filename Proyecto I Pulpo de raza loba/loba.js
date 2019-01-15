var eventos = ["trabajar", "tocar un árbol", "hamburguesa", "correr", "twitter"];
var evento = prompt("Introduce un evento que hizo Mariano");
var pulpo = false;

function contieneEvento(evento, eventos) {
    for (i = 0; i < eventos.length; i++) {
        let ocurrido = false;
        while (!ocurrido) {
            if (evento == eventos[i]) {
                ocurrido = true;
            }
        }
    }
    return ocurrido;
}