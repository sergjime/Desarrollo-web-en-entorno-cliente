
/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") { // Si la variable o es un objeto...
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
            // Devuelve por consola del 0 al 9 ya que es declarada en el mismo bucle for.
        }
    
        console.log(k);                 // prints 10
        // Devuelve por consola un 10 ya que es declarada en el bucle for el cual ya finalizado.
    }
    
    console.log(j);                     // j is defined, but may not be initialized
    // La variable j no devolverá nada ya que está declarada dentro de la condición if.
}

o = {};
test(o);
