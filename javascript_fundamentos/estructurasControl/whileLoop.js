var Rafa = {
    Nombre: "Rafa",
    Apellido: "Lozano",
    Peso: 65,
    edad: 23
}

const INCREMENTO_PESO = .30;
const DIAS_ANO = 365;
const PESO_META = Rafa.Peso - 3


console.log("Iniciamos con: " + Rafa.Peso)
const aumentarPeso = (persona) => {
    persona.peso += INCREMENTO_PESO
}
const adelgazar = persona => persona.Peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const haceEjercicio = () => Math.random() < 0.4
var dias = 0
while (Rafa.Peso > PESO_META) {
    if (comeMucho()) {
        //aumenta peso
        aumentarPeso(Rafa);
    }
    if (haceEjercicio()) {
        adelgazar(Rafa);
    }
    dias += 1;
    console.log(dias);
    //breack point debugger
}
console.log("Terminamos con: " + Rafa.Peso.toFixed(2));