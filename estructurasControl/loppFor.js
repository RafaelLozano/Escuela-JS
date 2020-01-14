var Rafa = {
    Nombre: "Rafa",
    Apellido: "Lozano",
    Peso: 65,
    edad: 23
}
const INCREMENTO_PESO = .20;
const DIAS_ANO = 365;
console.log("Iniciamos con: " + Rafa.Peso)
const aumentarPeso = (persona) => {
    persona.peso += INCREMENTO_PESO
}
const adelgazar = persona => persona.Peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_ANO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarPeso(Rafa)
    } else if (random < 0.5) {
        adelgazar(Rafa)
    }
}
console.log("Terminamos con: " + Rafa.Peso.toFixed(2));