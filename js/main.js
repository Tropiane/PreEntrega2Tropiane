//Solicitamos botones
const botones = document.querySelectorAll(".buscar button"),
btn1 = botones[0],
btn2 = botones[1];

//Solicitamos Search
const inputs= document.querySelectorAll(".buscar input"),
inputBuscador = inputs[0];

//Arrays alimentos
const alimentoAñadido = [{}];
const caloriasAlimentos = [{}];

console.log(alimentoAñadido);
console.log(caloriasAlimentos);
//Saludo de bienvenida
// let saludoUsuario = prompt("Ingresá tu nombre");

//Array de alimentos
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
let saludos = [
    "¡Bienvenido de nuevo! ¡Qué gusto verte! ",
  "¡Hola de nuevo! ¡Me alegra verte! ",
  "¡Qué bueno es verte de nuevo por aquí! ",
  "¡Bienvenido de vuelta! ¿Cómo has estado? ",
  "¡Hola otra vez! ¡Espero que estés bien! ",
  "¡Qué alegría verte de nuevo! ¿Cómo te ha ido? ",
  "¡Hola otra vez! ¿Cómo va todo? ",
  "¡Bienvenido de regreso! Siempre es un placer verte. ",
  "¡Qué bueno es tenerte de vuelta! ¿Cómo te ha tratado el tiempo? ",
  "¡Hola de nuevo! ¿Cómo te ha ido desde la última vez? "
  ];
  
  let saludoInicio = document.querySelector("h1");
  console.log(saludoInicio.innerHTML);

  let saludo = "";
  for (let i = 0; i < 1; i++) {
     let random = Math.round(Math.random() * saludos.length)
     saludo = saludo + saludos[random]
  }
  saludoInicio.innerText = saludo; //+ saludoUsuario;
  //Fin saludo bienvenida

//Añadir info a tarjetas
function tarjetasHtml(arr){
    tarjetasPrueba.innerHTML = "";
    //Si no se recibe nada, se arroja eso
    let html;
    for (const element of arr) {
        html = `
        <div id="class="tarjeta">
                <h3>${element.nombre}</h3>
                <ul>
                    <li>Gramos: ${element.gramos}</li>
                    <li>Calorias: ${element.calorias}</li>
                </ul>
            </div>
        `;
        tarjetasPrueba.innerHTML = tarjetasPrueba.innerHTML + html;
    }
}


//Mostramos los alimentos disponibles junto a sus calorias para que el usuario los tenga en cuenta
console.log("Los alimentos disponibles son: ");
let disponibles= listaAlimentos.forEach((elemento)=>(console.log("-"+elemento.nombre + "--->Calorías: " + elemento.calorias)));

//Funcion creada para que el cliente pueda seleccionar los alimentos y buscarlos dentro de listaAlimentos
//Se pueden buscar de forma abreviada

function buscarAlimentos(arr, nombre){
    const buscar = arr.find((elemento)=> elemento.nombre.includes(nombre));
    return(buscar);
}

//Añadir alimentos a "alimentoAñadido"


//Buscar alimento
btn1.addEventListener("click", ()=>{
    const buscar = buscarAlimentos(listaAlimentos, inputBuscador.value)
    tarjetasHtml(listaAlimentos)
})

btn2.addEventListener("click", ()=>{
    const buscar = buscarAlimentos(listaAlimentos, inputBuscador.value)
    alimentoAñadido.push(buscar)
    caloriasAlimentos.push(buscar.calorias)
    console.log("Los alimentos añadidos son: " + alimentoAñadido);
    console.log("Las calorias totales son: " + caloriasAlimentos);
})