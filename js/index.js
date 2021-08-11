function TipoGasto (nombre, fecha, categoria, periodicidad) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.categoria = categoria;
    this.periodicidad = periodicidad;
  }
  let inputNombre = "";
  let inputFecha = "";
  let inputCategoria = "";
  let inputPeriodicidad = "";
  
  let registroGasto = prompt("Quiere registrar un gasto: si / no");
  
  while (registroGasto != "no") {
  
    inputNombre = prompt("ingrese nombre que identifique el gasto");
    inputFecha = prompt("ingrese fecha en la que realizó el gasto (dd/mm/aaaa)");
    inputCategoria = prompt("ingrese la categoría del gasto");
    inputPeriodicidad = prompt("ingrese cada cuanto hace este gasto (diario, quincenal, mensual, anual, único");
    const gasto1 = new TipoGasto (inputNombre, inputFecha, inputCategoria, inputPeriodicidad);
  
    console.log(gasto1);
  
    registroGasto = prompt("Quiere registrar otro gasto si / no");
  }


// tarea 4


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