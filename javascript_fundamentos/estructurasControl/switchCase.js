var signo = prompt("¿Cual es tu signo?");

switch (signo) {
    case "acuario":
    case "ACUARIO":
        console.log("Deja de atiborrar tu mente con sentimientos que no te corresponde ni tiene correlación con los hechos que estás viviendo actualmente.")
        break;
    case "piscis":
        console.log("Estás enfrentando de mala forma una situación que necesita que seas maduro y respetuoso.")
        break;
    default:
        console.log("No se encontro su signo");
        break;
}