var Rafa = {
    name: "Rafa",
    age: 20,
    engineer: true,
}
const AGE_MAJOR = 18 //best practice use capital letters and const for variables const

function printProfession(Person) {
    console.log(`${Person.name} is `)
    if (Person.engineer) {
        console.log("an engineer");
    }
}

function validateAge(Person) {
    return Person.age >= AGE_MAJOR
}
//Arrow function v2
const esMayorDeEdad = ({ age }) => { age >= AGE_MAJOR }
    // Arrow function v2
    // const esMayorDeEdad = Person => Person.age >= AGE_MAJOR //busca en el objeto
    // que se le pasa el atributo age

function printAge(Person) {
    if (esMayorDeEdad(Person)) {
        console.log(Person.name + " es mayor de edad");
    } else {
        console.log(Person.name + " es menor de edad");
    }
}

function permitirAcceso(Person) {
    if (!esMayorDeEdad(Person)) {
        console.log("Acceso denegado")
    }
}
permitirAcceso(Rafa);
printAge(Rafa);