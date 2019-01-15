
/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope);
    // No devuelve por consola nada porque la variable no existe todavía al estar inicializada justo en la línea posterior.
    scope = "local";
    console.log(scope);
    // Devuelve por consola la palabra 'local' ya que está inicializada dentro de la función.
}

f();

console.log(scope);
// Devuelve por consola la palabra 'global' ya que es una variable inicializada fuera de la función.