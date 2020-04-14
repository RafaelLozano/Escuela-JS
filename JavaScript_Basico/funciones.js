var Nombre_global = "Rafa"
    //Función declarativa
function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(x, y) {
    var resultado = x + y;
    return resultado;
}

function name() {
    var apellido_local = "Lozano"
    console.log(`Hola ${Nombre_global} ${apellido_local}`);
}
//expresión funciones anonimas
/* var funcion_expresion = function(a, b){
    return a + b;
}
funcion_expresion(); */
saludar("Rafa");