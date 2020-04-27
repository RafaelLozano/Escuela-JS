var frutas = ["Manzana", "platano", "cereza", "Fresa"];
//frutas.length //Cuantos elementos tiene el arreglo frutas
frutas[0]; //Accede al elemento 0->"Manzana"
console.log(frutas);
var mas_frutas = frutas.push("Uvas", "Melon"); //añade elementos al final del array
console.log(mas_frutas);
var nuevo_elemento = frutas.unshift("Naranja"); //Añade elementos al inicio del array
var borrar_elemento = frutas.shift("Naranja"); //Elimina el primer elemento
var posicion_array = frutas.indexOf("platano");
console.log(posicion_array);