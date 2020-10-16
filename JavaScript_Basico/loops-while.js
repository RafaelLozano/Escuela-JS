var estudiantes = ['Rafa', 'Maria', 'Ana', 'Gustavo'];

function saludo(nombre) {
    console.log(`Hola ${nombre} como estas?`);
}
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift(); //saca el primer elemento del array 
    saludo(estudiante);

}