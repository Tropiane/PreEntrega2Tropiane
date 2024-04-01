//Traemos btn para añadir alimentos a LS
const btnAgregar = document.querySelector("#btnAgregar");

//Traer contenedor para las tarjetas
const tarjetasEnBiblio = document.querySelector(".tarjetasBiblioteca");
const botonTarjetaB = document.querySelector(".tarjetasBiblioteca button");

//contenedor dentro de index
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

//function para crear tarjetas en Biblioteca
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
        <button class="btnBorrarB">Eliminar</button>
        </ul>
        </div>
        `;
        tarjetasEnBiblio.innerHTML = tarjetasEnBiblio.innerHTML + html;
    }
    const botonesTarjetaB = document.querySelectorAll(".btnBorrarB");
    //click para borrar elementos de LS y del DOM
    botonesTarjetaB.forEach((btn, index)=>{
        btn.addEventListener("click", ()=>{
            let nodoBorrar = btn.parentElement.parentElement.parentElement;
            console.log(nodoBorrar);
            if (botonTarjetaB) {
                nodoBorrar.removeChild(btn.parentElement.parentElement);
                biblAlimento.splice(index,1);
                Toastify({
                    text: "Alimento Eliminado",
                    duration: 3000
                    }).showToast();
            }
            enviarALs(biblAlimento);
        })
    })
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