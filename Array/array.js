function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
var Rafa = new Persona('Rafa', 'Lozano')
var Personas = [Rafa]

var Gus = new Persona('Gus', 'Lozano')
Personas[1] = Gus
console.log(Personas.length);
for (var i = 0; i < Persona.length; i++) {
    console.log("Me llamo " + Personas[i].nombre);
}