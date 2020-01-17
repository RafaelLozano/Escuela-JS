/* En realidad no son clases son prototipos y no existe herencia como tal en JS  */
function Persona(nombre, apellido, altura) {
    this.name = nombre
    this.lastName = apellido
    this.heigh = altura
}

function Desarrollador(nombre, apellido) {
    this.name = nombre
    this.lastName = apellido
}
func
//prototype
/* Objeto.prototype.FunctionName=function(Parameter1,Parameter2) */
Persona.prototype.hello = function() {
    console.log(`Hola me llamo ${this.name}.`)
}
Desarrollador.prototype.hello = function() {
    console.log(`Hola me llamo ${this.name} y soy desarrollador.`)
}
var Rafa = new Persona('Rafa', 'Lozano', 1.63)
Rafa.hello();