var objeto_carro = {
    marca: "BMW",
    color: "Rojo",
    num_puertas: 2,
    //metodo del objeto
    print_model: function() {
        console.log(`El ${objeto_carro.marca} es de color ${objeto_carro.color} tiene ${objeto_carro.num_puertas} puertas \n`);
        //this hace referencia al objeto, el padre
        console.log(`El ${this.marca} es de color ${this.color} tiene ${this.num_puertas} puertas \n`);
    }
};
//manda a llamar la función de print model
objeto_carro.print_model();

function constructor_objeto(marca, color, num_puertas) {
    this.marca = marca;
    this.color = color;
    this.num_puertas = num_puertas;
}

var civic = new constructor_objeto("honda", "Azul", 4);
civic.print_model();