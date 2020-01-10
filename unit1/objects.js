var Rafa = {
    name: "Rafa",
    age: 23,
}

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