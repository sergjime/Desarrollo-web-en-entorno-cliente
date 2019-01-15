/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             
        console.log(x);         // 71
        // Esto es una variable local, por lo tanto imprime 71
    }

    console.log(x);             // 71
    // Sigue imprimiendo 71 porque está inicializada dentro de la función dándole igual que esté inicializada en el condicional o cualquier otro módulo
}


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               
      console.log(x);           // 71
      // Esto es una variable local, por lo tanto imprime 71
    }
    
    console.log(x);             // 31
    // Imprime 31 ya que el valor de 71 fue inicializado dentro de otro módulo y con la palabra reservada let
}


function hoistingTest() {

    console.log(w);               
    // console.log(z);               // ReferenceError
    // A esta variable se le da un valor inicial más tarde y por lo tanto en esta instrucción aún no sabe qué valor tiene, sin embargo encuentra la variable

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
        // Esto es una variable local inicializada dentro del mismo módulo, por lo tanto imprime 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;             
    }
      
    console.log(x);               // 31
    // Al ser declarada con la palabra var, tiene valor en toda la función, incluído dentro de módulos como condicionales o bucles
    // console.log(z);             // ReferenceError
    // Al ser declarada con la palabra let, no tiene valor en toda la función, sólo en el condicional de la misma
    console.log(w);               // 1001
    // Al ser declarada con la palabra var, tiene valor en toda la función, incluído dentro de módulos como condicionales o bucles
  }


varTest();

letTest();

hoistingTest();

console.log(u); 
// Esta variable pasa a ser global del objeto this ya que al declararla no le pusimos ni var ni let, es visible en todo el documento