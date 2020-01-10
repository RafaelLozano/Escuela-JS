var Rafa = {
    name: "Rafa",
    age: 25,
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
    return Person.age >= Major
}

function printAge(Person) {
    if (validateAge(Rafa)) {
        console.log(Person.name + " es mayor de edad");
    } else {
        console.log(Person.name + " es menor de edad");
    }
}
printAge(Rafa);