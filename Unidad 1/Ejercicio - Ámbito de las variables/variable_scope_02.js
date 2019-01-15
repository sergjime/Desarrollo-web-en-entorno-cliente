
/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2()); // Esto muestra en consola un array con dos posiciones 'local' y 'local'

console.log(scope); // Esto muestra en consola la palabra 'global'
console.log(myscope);           // => WTF ¿?    Esto es una variable la cual no existe, ya que sólo existe dentro de la función
