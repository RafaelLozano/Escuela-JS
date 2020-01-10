var Rafa = {
    name: "Rafa",
    age: 23,
}
var persona = Rafa; //Persona==Rafa ? si lo es ya que tienen la misma referencia
var x = 4,
    y = "4"

function printStunt(student) {
    console.log("hola" + student.name + " bienvenido");
}

function returnObject(object) {
    return {
        ...object,
        age: object.age + 1
    }
    console.log("DONE");
}
//2 == igual apara comparar en valor
//3 === igual para comparar en valor y tipo
//Comparar objetos