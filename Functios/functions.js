//Objeto Lenguaje JS debilmente tipado
//JS es un lenguaje interpretado
var name = "Rafa" //windos.name
var Persona1 = {
    nombre: "Rafa",
    apellido: "Lozano",
    edad: 23,
};
//Funciones para reutilizar codigo
function imprimirEdad() {
    console.log(`${Persona1.nombre} tiene ${Persona1.edad}`);
}
//Acepte parametros
function imprimirEdadV2(name, age) {
    console.log(`${name} tiene ${age}`);
}

//imprimir en mayusculas
function printUpperCase(name) {
    //name es variable local por lo que no afecta a windows.name
    name = name.toUpperCase();
    console.log(`${name}`);
}

imprimirEdad();
imprimirEdadV2("El patron", 99);
console.log(name);
printUpperCase(name);
console.log(name);