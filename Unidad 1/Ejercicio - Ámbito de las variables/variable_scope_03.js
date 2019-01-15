
/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope"
// Esto muestra el valor de 'nested scope' ya que entra en la función checkscope la cual llama a lo que devuelva la función nested, que regresa el valor 'nested scope'.
console.log(scope);                     // => "global scope"  
//Esto muestra el valor de 'global scope' ya que 'local scope' es declarada dentro de la función, por lo tanto aquí no existe como 'local scope'.
