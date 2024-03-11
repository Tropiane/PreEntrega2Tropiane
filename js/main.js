
const listaAlimentos = [
    {nombre: "manzana", gramos: 100, porcion: 1, calorias: 26 },
    {nombre: "banana", gramos: 100, porcion: 1, calorias: 89 },
    {nombre: "arroz", gramos: 100, porcion: 1, calorias: 130 },
    {nombre: "pollo", gramos: 100, porcion: 1, calorias: 165 },
    {nombre: "brocoli", gramos: 100, porcion: 1, calorias: 34 },
    {nombre: "zanahoria", gramos: 100, porcion: 1, calorias: 41 },    
    {nombre: "huevo", gramos: 100, porcion: 1, calorias: 155 },
    {nombre: "papas", gramos: 100, porcion: 1, calorias: 77 },
    {nombre: "atun", gramos: 100, porcion: 1, calorias: 113 },
    {nombre: "lechuga", gramos: 100, porcion: 1, calorias: 15 }
];
const alimentoSumado = [];

//Mensaje de aviso
// alert("Antes de empezar, colocá Listo, luego abri la consola y recargá el codigo");

//Mostramos los alimentos disponibles junto a sus calorias para que el usuario los tenga en cuenta
console.log("Los alimentos disponibles son: ");
let disponibles= listaAlimentos.forEach((elemento)=>(console.log("-"+elemento.nombre + "--->Calorías: " + elemento.calorias)));


//Solicitamos botones
const botones = document.querySelectorAll(".buscar button"),
btn1 = botones[0];
console.log(btn1);

//Solicitamos Search
const inputs= document.querySelectorAll(".buscar input");
const inputBuscador = inputs[0];
console.log(inputBuscador);


//Funcion creada para que el cliente pueda seleccionar los alimentos y buscarlos dentro de listaAlimentos
//Se pueden buscar de forma abreviada

function alimentos(arr, nombre){
    const buscar = arr.find((elemento)=> elemento.nombre.includes(nombre));
    return(buscar);
}


//Añadir alimentos a "alimentoSumado"

btn1.addEventListener("click", ()=>{
    const buscar = alimentos(listaAlimentos, inputBuscador.value)
    alimentoSumado.push(buscar.nombre)
    alimentoSumado.push(buscar.calorias)
    console.log(alimentoSumado);
})
console.log(alimentoSumado);
//Contar cals
// const cals = btn1.addEventListener("click", ()=>{
//     const buscar = alimentos(listaAlimentos, inputBuscador.value)
//     alimentoSumado.push(buscar.calorias)
//     console.log(alimentoSumado);
// })
// Funcion flecha utilizada para sumar las calorías de los elementos agregados a alimentoSumado
//Se utiliza el método .reduce para acumular los valores y no estén por separados como los alimentos
// // // const totalCals = alimentoSumado.reduce((total, nombre)=>{
// // //     const buscar = listaAlimentos.find(elemento=> elemento.nombre.includes(nombre));
// // //     if(buscar){
// // //         return total = total + buscar.calorias;
// // //     }else{
// // //         console.log("alimento no encontrado");
// // //         return total;
// // //     }
    
// // // }, 0);

//Mostramos en consola el array de alimentoSumado y el total de calorías


