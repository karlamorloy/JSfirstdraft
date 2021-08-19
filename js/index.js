function TipoGasto (nombre, fecha, categoria, periodicidad) { //objeto para poder ingresar tipos de gastos
    this.nombre = nombre.toLowerCase();
    this.fecha = fecha;
    this.categoria = categoria.toLowerCase();
    this.periodicidad = periodicidad.toLowerCase();
};

  let inputNombre = "";
  let inputFecha = "";
  let inputCategoria = "";
  let inputPeriodicidad = "";

  const gastosIngresados = [];
  
  let registroGasto = prompt("Quiere registrar un gasto: si / no");
  
while (registroGasto != "no") {
  
    inputNombre = prompt("ingrese nombre que identifique el gasto");
    inputFecha = prompt("ingrese fecha en la que realizó el gasto (dd/mm/aaaa)");
    inputCategoria = prompt("ingrese la categoría del gasto");
    inputPeriodicidad = prompt("ingrese cada cuanto hace este gasto (diario, quincenal, mensual, anual, único");
    const gasto1 = new TipoGasto (inputNombre, inputFecha, inputCategoria, inputPeriodicidad);
  
    gastosIngresados.push(gasto1);
  
    registroGasto = prompt("Quiere registrar otro gasto si / no");
  }

  console.table(gastosIngresados);


//esta parte es para calcular los gastos y comparar con el ingreso

let egreso;
let gastoAcumulado;
let cantidad; 
let gasto;
let ingresarMas;
let balance;

let suma = (a,b) => { return a+b};
let resta = (a,b) => { return a-b};
let multiplicar = (a,b) => {return a*b};

let ingreso = parseFloat(prompt("Coloque cantidad de dinero ingresada en el mes"));

do {
    egreso = parseFloat(prompt("Coloque cantidad de dinero gastada"));
    cantidad = parseFloat(prompt("Coloque cantidad veces que hizo este gasto en el mes"));
    gasto = multiplicar(egreso, cantidad);
    gastoAcumulado =+ gasto;
    ingresarMas = prompt("Tiene otro dato que ingresar? s/n");

} while (ingresarMas != "n");

alert("El total gastado fue de " + gastoAcumulado);

balance = resta(ingreso, gastoAcumulado);

alert("El dinero restante disponible es " + balance);

///////// entrega 8 DOM

const expenses = [{ id: 1,  nombre: "Insumos", precio: 10000 },
                  {  id: 2,  nombre: "Marketing", precio: 5000 },
                  {  id: 3,  nombre: "Nomina"  , precio: 4000},
                  {  id: 4,  nombre: "Otros" , precio: 1000}];

for (const expense of expenses) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p> ID: ${expense.id}</p>
                            <h3>  Producto: ${expense.nombre}</h3>
                            <b> $ ${expense.precio}</b>`;
    document.body.appendChild(contenedor);
}
