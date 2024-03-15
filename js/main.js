//Solicitamos botones para añadir a las diferentes comidas
const botones = document.querySelectorAll(".buscar button"),
btnBiblioteca = botones[0],
btnDesayuno = botones[1],
btnAlmuerzo= botones[2],
btnMerienda = botones[3],
btnCena = botones[4];

//Boton en tarjetas
const añadirTarjeta = document.querySelectorAll(".tarjeta"),
 btnTarjeta= añadirTarjeta[0];

//Solicitamos Search
const inputs= document.querySelectorAll(".buscar input"),
inputBuscador = inputs[0];

//Arrays alimentos
const alimentoAñadido = [];
const caloriasAlimentos = [];



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

//Saludo de bienvenida
// let saludoUsuario = prompt("Ingresá tu nombre");
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
        <div class="tarjeta">
                <h3>${element.nombre}</h3>
                <ul>
                    <li>Gramos: ${element.gramos}</li>
                    <li>Calorias: ${element.calorias}</li>
                </ul>
                <button id="btnTarjeta">Agregar</button>
            </div>
        `;
        tarjetasPrueba.innerHTML = tarjetasPrueba.innerHTML + html;
    }
}
//Mostramos los alimentos disponibles junto a sus calorias para que el usuario los tenga en cuenta
tarjetasHtml(listaAlimentos)

//Funcion creada para que el cliente pueda seleccionar los alimentos y buscarlos dentro de listaAlimentos
//Se pueden buscar de forma abreviada

function buscarAlimentos(arr, nombre){
    const buscar = arr.find((elemento)=> elemento.nombre.includes(nombre));
    return(buscar);
}

//Funcion utilizada para filtrar por cada tarjeta de alimento
function filtroComida(arr, filtro) {
    const filtrar = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrar;
  }

  //Creamos función para que sume las calorias de los alimentos agregados
  function actualizarTotalCalorias() {
    const totalCals = caloriasAlimentos.reduce((a, b) => a + b, 0);
    console.log("Total de calorías: " + totalCals);
}

//Buscar alimento
inputBuscador.addEventListener("keyup", () => {
  const filtrados = filtroComida(listaAlimentos, inputBuscador.value);
  tarjetasHtml(filtrados);
});

// Añadir alimentos a "alimentoAñadido" y actualizar el total de calorías
btnTarjeta.addEventListener("click", () => {
    const buscar = buscarAlimentos(listaAlimentos, inputBuscador.value);
    alimentoAñadido.push(buscar.nombre);
    caloriasAlimentos.push(buscar.calorias);
    console.log("Los alimentos añadidos son: " + alimentoAñadido);
    // Actualizamos el total de calorías
    actualizarTotalCalorias();
});

// Llamamos a la función para mostrar el total de calorías al cargar la página
actualizarTotalCalorias();