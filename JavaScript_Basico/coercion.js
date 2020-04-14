//Existen dos tipos de coerciones, implicita o explicitas.
//Coerción implicita el + es una contenacion. junta ambos valores
var A = 2 + "3";
console.log(typeof(A));

//coerción implicita cambia string a numero (Operador de numero)
var numero = 4 * "7";
console.log(typeof(numero));

//coerción explicita obligar cambiar el typop de una variable a otra
//Explicacion: La variable a se convirtio en un string
var a = 20;
var b = a + "semanas";
console.log(typeof(b));

//Convertir a en string sin usar el operador de concatenar (+)
var c = String(a);
console.log(typeof(c));

//convertir c de String a numero
var d = Number(c);
console.log(typeof(d));

//Conclusión COERCIÓN es como typecast en el lenguaje de embedded C.