
/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // WTF !!
    // No devuelve por consola nada porque la variable no existe todavía al estar inicializada justo en la línea posterior. 
    var scope = "local";
    console.log(scope);             // Prints "local"
    // Devuelve por consola la palabra 'local' ya que está inicializada dentro de la función.
}

f();

console.log(scope);                 // Prints "global"
// Devuelve por consola la palabra 'global' ya que es una variable inicializada fuera de la función.