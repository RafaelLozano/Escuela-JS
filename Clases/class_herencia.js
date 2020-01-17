const PERSONA_ALTA = 1.8
class Persona {
    constructor(nombre, apellido, altura) {
        this.name = nombre
        this.lastName = apellido
        this.height = altura
    }
    hello(fn) {
        console.log(`Hola me llamo ${this.name} ${this.lastName}`)
        if (fn) {
            //si recibio una funcion
            fn(this.name, this.lastName, false)
        }
    }
    soyalto() {
        return this.height > PERSONA_ALTA
    }
}
class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) //constructor de la clase padre
            //this no funciona
    }

    hello(fn) {
        console.log(`Hola me llamo ${this.name} ${this.lastName} y soy desarrollador/a.`)
        if (fn) {
            //si recibio una funcion
            fn(this.name, this.lastName, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log("No sabia que eras desarrollador/a.")
    }
}
var Rafa = new Persona('Rafa', 'Lozano', 1.65)
var Gus = new Desarrollador('Gustavo', 'Lozano', 1.85)

Rafa.hello(responderSaludo)
debugger
Gus.hello(responderSaludo)