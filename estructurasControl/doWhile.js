var contador = 0
const llueve = () => Math.random() < 0.25
const printMsj = (contador) => {
    if (contador === 1) {
        console.log("llovio " + contador + " vez.");
    } else {
        console.log("llovio " + contador + " veces.");
    }
}
do {
    contador++
} while (!llueve())
printMsj(contador);