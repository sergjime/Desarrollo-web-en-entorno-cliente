
/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */

var x = 1; // Variable x global
function f() {
    console.log(x); // Aquí la variable x no tiene valor
    var x = 2; // Variable x local
};

f();
