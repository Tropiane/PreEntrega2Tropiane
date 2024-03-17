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
  {nombre: "manzana", gramos: 100, calorias: 26 },
  {nombre: "banana", gramos: 100, calorias: 89 },
  {nombre: "arroz", gramos: 100, calorias: 130 },
  {nombre: "pollo", gramos: 100, calorias: 165 },
  {nombre: "brocoli", gramos: 100, calorias: 34 },
  {nombre: "zanahoria", gramos: 100, calorias: 41 },    
  {nombre: "huevo", gramos: 100, calorias: 155 },
  {nombre: "papas", gramos: 100, calorias: 77 },
  {nombre: "atun", gramos: 100, calorias: 113 },
  {nombre: "lechuga", gramos: 100, calorias: 15 },
  {nombre: "fresas", gramos: 100, calorias: 32 },
  {nombre: "pera", gramos: 100, calorias: 57 },
  {nombre: "sandía", gramos: 100, calorias: 30 },
  {nombre: "brócoli", gramos: 100, calorias: 34 },
  {nombre: "espinacas", gramos: 100, calorias: 23 },
  {nombre: "pepino", gramos: 100, calorias: 15 },
  {nombre: "calabaza", gramos: 100, calorias: 26 },
  {nombre: "melón", gramos: 100, calorias: 36 },
  {nombre: "naranja", gramos: 100, calorias: 47 },
  {nombre: "uvas", gramos: 100, calorias: 67 },
  {nombre: "kiwi", gramos: 100, calorias: 61 }
];


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
    b.textContent = totalCals;
    traerP.appendChild(b);
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
                <li>Gramos: ${element.gramos}</li>
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

