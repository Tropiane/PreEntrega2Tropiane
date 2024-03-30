//Traemos btn para añadir alimentos a LS
const btnAgregar = document.querySelector("#btnAgregar");

//Traer contenedor para las tarjetas
const tarjetasEnBiblio = document.querySelector(".tarjetasBiblioteca");
const tarjetaB = document.querySelector(".tarjetaB");
//Inputs
const buscadores = document.querySelectorAll(".añadirAlimento input");

const inputNom = buscadores[0];
const inputCkal = buscadores[1];
const inputGr = buscadores[2];


//Inicializamos biblioteca de Alimentos desde LocalStorage o creamos un array vacío si no existe
const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];
//Funcion constructora de objetos
function construirAlimento(nombre, porcion, calorias) {
    this.nombre = nombre;
    this.porcion = porcion;
    this.calorias = calorias;
}
function crearHtmlBiblio(arr) {
    tarjetasEnBiblio.innerHTML = "";

    let html;

    for (const element of arr) {
        html = `
        <div class="tarjetasBiblioteca">
        <ul>
        <h3>${element.nombre}</h3>
        <li>Porcion:${element.porcion}</li>
        <li>Calorias:${element.calorias}</li>
        <button class="btn btn-outline-danger">Eliminar</button>
        </ul>
        </div>
        `;
        tarjetasEnBiblio.innerHTML = tarjetasEnBiblio.innerHTML + html;
    }
}
//se repite function para crear tarjetas de LS
function crearHtmlIndex(arr) {
    tarjetaB.innerHTML = "";

    let html;

    for (const element of arr) {
        html = `
        <div class="tarjetaB">
        <ul>
        <h3>${element.nombre}</h3>
        <li>Porcion:${element.porcion}</li>
        <li>Calorias:${element.calorias}</li>
        </ul>
        <button class="btnTarjeta">Agregar</button>
        </div>
        `;
        tarjetaB.innerHTML = tarjetaB.innerHTML + html;

        // Agregar evento de clic a los botones de las tarjetas recién creadas
      const botonesTarjeta = document.querySelectorAll(".btnTarjeta");
      botonesTarjeta.forEach(btn => {
          btn.addEventListener("click", () => {
              const nombreAlimento = btn.parentElement.querySelector("h3").textContent;
              const alimento = buscarAlimentos(biblAlimento, nombreAlimento);

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
}
//function para enviar a LS los alimentos
function enviarALs(arr) {
    localStorage.setItem("biblAlimentos", JSON.stringify(arr));
}
//Para que no se borren las tarjetas al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];
    biblAlimento.length > 0 && listaAlimentos.push(...biblAlimento);
    crearHtmlBiblio(biblAlimento);
});

// Evento para agregar alimentos
btnAgregar.addEventListener("click", () => {
    const nombre = inputNom.value;
    const porcion = parseInt(inputGr.value);
    const calorias = parseInt(inputCkal.value);
    const nuevoAlimento = new construirAlimento(nombre, porcion, calorias);

    biblAlimento.push(nuevoAlimento);
    //Enviamos datos a ListaAlimento
    listaAlimentos.push(biblAlimento);
    enviarALs(biblAlimento);
    tarjetasHtml(biblAlimento);
});
enviarALs(biblAlimento);
crearHtmlIndex(biblAlimento)
