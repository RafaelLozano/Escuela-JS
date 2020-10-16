var estudiantes = ["Rafa", "Maria", "Ana", "Gustavo"];

function saludo(nombre) {
    console.log(`Hola ${nombre} como estas?`);
}
for (var i = 0; i < estudiantes.length; i++) {
    saludo(estudiantes[i]);
}
console.log("\nNuevo for");
for (var estudiante of estudiantes) {
    saludo(estudiante);
}