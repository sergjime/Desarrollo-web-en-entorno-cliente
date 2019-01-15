
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"


/* En nuestra pantalla nos mostrará la palabra 'local' ya que en el console.log llama a la función checkscope
la cual devuelve a través de return el valor de la variable scope que es 'local'. */