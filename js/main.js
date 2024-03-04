const listaAlimentos = [
    { id: 1, nombre: "manzana", gramos: 100, porcion: 1, calorias: 26 },
    { id: 2, nombre: "banana", gramos: 100, porcion: 1, calorias: 89 },
    { id: 3, nombre: "arroz", gramos: 100, porcion: 1, calorias: 130 },
    { id: 4, nombre: "pollo", gramos: 100, porcion: 1, calorias: 165 },
    { id: 5, nombre: "brocoli", gramos: 100, porcion: 1, calorias: 34 },
    { id: 6, nombre: "zanahoria", gramos: 100, porcion: 1, calorias: 41 },    
    { id: 7, nombre: "huevo", gramos: 100, porcion: 1, calorias: 155 },
    { id: 8, nombre: "papas", gramos: 100, porcion: 1, calorias: 77 },
    { id: 9, nombre: "atun", gramos: 100, porcion: 1, calorias: 113 },
    { id: 10, nombre: "lechuga", gramos: 100, porcion: 1, calorias: 15 }
];
const alimentoSumado = [];

//Mensaje de aviso
alert("Antes de empezar, colocá Listo, luego abri la consola y recargá el codigo");

//Mostramos los alimentos disponibles junto a sus calorias para que el usuario los tenga en cuenta
console.log("Los alimentos disponibles son: ");
let disponibles= listaAlimentos.forEach((elemento)=>(console.log("-"+elemento.nombre + "--->Calorías: " + elemento.calorias)));


//Funcion creada para que el cliente pueda seleccionar los alimentos y buscarlos dentro de listaAlimentos
//Se pueden buscar de forma abreviada
function alimentos(nombre){

    const buscar = listaAlimentos.find(elemento=> elemento.nombre.includes(nombre));
    if (buscar){
        alimentoSumado.push(buscar.nombre)
    } else{
        console.log("Seleccione un alimento dentro de la lista");
    }
}

//Bucle doWile creado para que solo frene cuando el cliente indica "Listo" y deje de seleccionar comidas
let encontrar;
do {
    encontrar = prompt("Seleccioná un alimento de la lista e indica 'Listo' cuando no quieras agregar mas")
    if(encontrar != "Listo"){
        alimentos(encontrar)
    }
} while (encontrar !== "Listo");

// Funcion flecha utilizada para sumar las calorías de los elementos agregados a alimentoSumado
//Se utiliza el método .reduce para acumular los valores y no estén por separados como los alimentos
const totalCals = alimentoSumado.reduce((total, nombre)=>{
    const buscar = listaAlimentos.find(elemento=> elemento.nombre.includes(nombre));
    if(buscar){
        return total = total + buscar.calorias;
    }else{
        console.log("alimento no encontrado");
        return total;
    }
    
}, 0);

//Mostramos en consola el array de alimentoSumado y el total de calorías
console.log("Los alimentos que seleccionaste son: " + alimentoSumado);
console.log(("El total de calorías de los alimentos es de: " + totalCals));