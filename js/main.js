
  //Boton en tarjetas
  const añadirTarjeta = document.querySelectorAll("#tarjetaAlimentos button");
  const btnEnTarjeta = añadirTarjeta[0];
  const tarjetaAlimentos = document.querySelector(".tarjeta");

  //Solicitamos Search
  const inputBuscador = document.querySelector("#buscarHtml");

  //Arrays alimentos vacíos
  const alimentoAñadido = [];
  const caloriasAlimentos = [];
  //Solo nombres de los alimentos
  const NalimentoAñadido = [];
  //API URL
  const API_URL = "../db/db.js";

  let listaAlimentos = [];
    //Función para traer elementos desde DB

      
  //Función de búsqueda de alimentos
  function buscarAlimentos(arr, nombre) {
      const buscar = arr.find((elemento) => elemento.nombre.includes(nombre));
      return buscar;
  }

  //Función utilizada para filtrar por cada tarjeta de alimento
  function filtroComida(arr, filtro) {
      const filtrar = arr.filter((el) => el.nombre.includes(filtro));
      return filtrar;
  }

  //Creamos función para que sume las calorías de los alimentos agregados
  function actualizarTotalCalorias(arr) {
      const totalCals = arr.reduce((a, b) => a + b, 0);
      const traerP = document.getElementById("totalCalorias");
      traerP.innerHTML = "";

      const b = document.createElement("b");
      const i = document.createElement("i");
      b.textContent = "Calorias " + totalCals;
      i.classList = "fa-solid fa-fire";
      traerP.appendChild(b);
      traerP.appendChild(i);
  }
  function zonaTarjetas(lugar, arr){
    const colocar = lugar.append(tarjetasHtml(arr))
    return colocar;
  }
 
  //Añadir info a tarjetas
  function tarjetasHtml(arr) {
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
          tarjetaAlimentos.innerHTML += html;
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
              mostrarAlimento(NalimentoAñadido);
          });
      });
  }

  
  //Mostrar alimento en tarjeta "Alimento seleccionado"
    function mostrarAlimento(arr) {
        const traerUl = document.getElementById("ulTarjeta");
        traerUl.innerHTML = "";
  
        // Bucle para crear li
        arr.forEach(alimento => {
            const btn = document.createElement("button");
            btn.textContent = "Quitar";
            const li = document.createElement("li");
  
            li.textContent = alimento;
            traerUl.appendChild(li);
            traerUl.appendChild(btn);
  
            //Borrar alimento con btn
            btn.addEventListener("click", () => {
                const element = arr.indexOf(alimento);
                //Eliminar elemento
                element !== -1 && arr.splice(element, 1);
                mostrarAlimento(NalimentoAñadido);
                //Eliminar calorías
                element !== -1 && caloriasAlimentos.splice(element, 1);
                actualizarTotalCalorias(caloriasAlimentos);
            });
        });
    }


  //Buscar alimento
  inputBuscador.addEventListener("keyup", () => {
    const filtrados = filtroComida(listaAlimentos, inputBuscador.value);
    tarjetasHtml(filtrados);
});



async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    listaAlimentos = data;
    tarjetasHtml(listaAlimentos);
    
}
getData(API_URL);