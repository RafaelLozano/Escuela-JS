function Persona(nombre, apellido, altura) {
    this.name = nombre
    this.lastName = apellido
    this.heigh = altura
}
//prototype
/* Objeto.prototype.FunctionName=function(Parameter1,Parameter2) */
Persona.prototype.hello = function() {
    console.log(`Hola me llamo ${this.name}.`)
}
var Rafa = new Persona('Rafa', 'Lozano', 1.63)
Rafa.hello();