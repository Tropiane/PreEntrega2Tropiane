//Boton en tarjetas
const añadirTarjeta = document.querySelectorAll("#tarjetaAlimentos button"),
btnEnTarjeta= añadirTarjeta[0];

//Solicitamos Search
const inputs= document.querySelectorAll(".buscar input"),
inputBuscador = inputs[0];

//Arrays alimentos vacíos
const alimentoAñadido = [];
const caloriasAlimentos = [];
//Solo nombres de los alimentos
const NalimentoAñadido = [];


//Array de alimentos
const listaAlimentos = [
  {nombre: "Manzana", porcion: "1 unidad mediana", calorias: 95},
  {nombre: "Banana", porcion: "1 unidad mediana", calorias: 105},
  {nombre: "Naranja", porcion: "1 unidad mediana", calorias: 62},
  {nombre: "Fresa", porcion: "1 taza (144g)", calorias: 53},
  {nombre: "Pera", porcion: "1 unidad mediana", calorias: 101},
  {nombre: "Uva", porcion: "1 taza (92g)", calorias: 62},
  {nombre: "Zanahoria", porcion: "1 unidad mediana", calorias: 25},
  {nombre: "Brócoli", porcion: "1 taza (91g)", calorias: 55},
  {nombre: "Espárrago", porcion: "1 taza (180g)", calorias: 27},
  {nombre: "Espinaca", porcion: "1 taza (30g)", calorias: 7},
  {nombre: "Pimiento Rojo", porcion: "1 unidad mediana", calorias: 37},
  {nombre: "Pollo", porcion: "100g cocido", calorias: 165},
  {nombre: "Carne de Res Magra", porcion: "100g cocida", calorias: 250},
  {nombre: "Pavo", porcion: "100g cocido", calorias: 135},
  {nombre: "Salmón", porcion: "100g cocido", calorias: 206},
  {nombre: "Atún", porcion: "100g enlatado", calorias: 128},
  {nombre: "Huevo", porcion: "1 unidad grande", calorias: 72},
  {nombre: "Leche", porcion: "1 taza (244g)", calorias: 103},
  {nombre: "Yogur Griego", porcion: "1 taza (245g)", calorias: 130},
  {nombre: "Arroz Integral", porcion: "1 taza cocida (195g)", calorias: 218},
  {nombre: "Avena", porcion: "1 taza cocida (234g)", calorias: 166},
  {nombre: "Quinoa", porcion: "1 taza cocida (185g)", calorias: 222},
  {nombre: "Lentejas", porcion: "1 taza cocida (198g)", calorias: 230},
  {nombre: "Garbanzos", porcion: "1 taza cocida (164g)", calorias: 269},
  {nombre: "Nuez", porcion: "1 onza (28g)", calorias: 185},
  {nombre: "Almendra", porcion: "1 onza (28g)", calorias: 163},
  {nombre: "Aguacate", porcion: "1/2 unidad mediana", calorias: 161},
  {nombre: "Aceite de Oliva", porcion: "1 cucharada (14g)", calorias: 119},
  {nombre: "Mantequilla de Maní", porcion: "2 cucharadas (32g)", calorias: 190},
  {nombre: "Tofu", porcion: "100g cocido", calorias: 76},
  {nombre: "Queso Cottage", porcion: "1 taza (226g)", calorias: 222},
  {nombre: "Pan Integral", porcion: "1 rebanada (28g)", calorias: 69},
  {nombre: "Pasta Integral", porcion: "1 taza cocida (140g)", calorias: 174},
  {nombre: "Papa", porcion: "1 unidad mediana", calorias: 161},
  {nombre: "Cebolla", porcion: "1/2 unidad mediana", calorias: 22},
  {nombre: "Tomate", porcion: "1 unidad mediana", calorias: 22},
  {nombre: "Calabacín", porcion: "1 taza (180g)", calorias: 19},
  {nombre: "Hongo", porcion: "1 taza (70g)", calorias: 15},
  {nombre: "Pepino", porcion: "1 unidad mediana", calorias: 45},
  {nombre: "Pimiento Verde", porcion: "1 unidad mediana", calorias: 24}
]
;


//Funcion de búsqueda de alimentos
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
  function actualizarTotalCalorias(arr) {
    const totalCals = arr.reduce((a, b) => a + b, 0);
    const traerP = document.getElementById("totalCalorias");
    traerP.innerHTML = "";
 
    const b = document.createElement("b");
    const i = document.createElement("i");
    b.textContent = ("Calorias " + totalCals);
    i.classList = "fa-solid fa-fire";
    traerP.appendChild(b);
    traerP.appendChild(i)
}

  //Añadir info a tarjetas
function tarjetasHtml(arr){
  tarjetaAlimentos.innerHTML = "";
    let html;
    for (const element of arr) {
        html = `
        <div class="tarjeta">
            <h3>${element.nombre}</h3>
            <ul>
                <li>Porción: ${element.porcion}</li>
                <li>Calorias: ${element.calorias}</li>
            </ul>
            <button class="btnTarjeta">Agregar</button>
        </div>
        `;
        tarjetaAlimentos.innerHTML = tarjetaAlimentos.innerHTML + html;
    }

    // Agregar evento de clic a los botones de las tarjetas recién creadas
    const botonesTarjeta = document.querySelectorAll(".btnTarjeta");
    botonesTarjeta.forEach(btn => {
        btn.addEventListener("click", () => {
          const nombreAlimento = btn.parentElement.querySelector("h3").textContent;
            const alimento = buscarAlimentos(listaAlimentos, nombreAlimento);

            //Pusheamos los valores a los arrays correspondientes
            NalimentoAñadido.push(alimento.nombre);
            alimentoAñadido.push(alimento);
            caloriasAlimentos.push(alimento.calorias);
            // Actualizamos el total de calorías
            actualizarTotalCalorias(caloriasAlimentos);
            mostrarAlimento(NalimentoAñadido)
        });
        
    });
}

//Mostramos los alimentos disponibles junto a sus calorias para que el usuario los tenga en cuenta
tarjetasHtml(listaAlimentos)

//Buscar alimento
inputBuscador.addEventListener("keyup", () => {
  const filtrados = filtroComida(listaAlimentos, inputBuscador.value);
  tarjetasHtml(filtrados);
});

// Añadir alimentos a "alimentoAñadido" y actualizar el total de calorías
btnEnTarjeta.addEventListener("click", () => {
    const buscar = buscarAlimentos(listaAlimentos, inputBuscador.value);
    alimentoAñadido.push(buscar.nombre);
    caloriasAlimentos.push(buscar.calorias);
    // Actualizamos el total de calorías
    actualizarTotalCalorias();
});

//Mostrar alimento en tarjeta "Alimento seleccionado"
function mostrarAlimento(arr) {
  const traerUl = document.getElementById("ulTarjeta");
  traerUl.innerHTML = "";

  // Bucle para crear li
  arr.forEach(alimento => {
    const btn = document.createElement("BUTTON");
    const btnTxt = document.createTextNode("Quitar");
    const li = document.createElement("li");

    btn.appendChild(btnTxt);
    li.textContent = alimento;
    traerUl.appendChild(li), traerUl.appendChild(btn);

   //Borrar alimento con btn
    btn.addEventListener("click", ()=>{
      const element = arr.indexOf(alimento);
      //Eliminar elemento
      element !== -1 && arr.splice(element, 1);
      mostrarAlimento(NalimentoAñadido)
      //Eliminar calorias
      element !== -1 && caloriasAlimentos.splice(element, 1);
      actualizarTotalCalorias(caloriasAlimentos)
    });
  });
}

