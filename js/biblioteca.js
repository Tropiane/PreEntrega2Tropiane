//Traemos btn para añadir alimentos a LS
const btns = document.querySelectorAll(".añadirAlimento button");
const btnAgregar = btns[0];

//Traer contenedor para las tarjetas
const tarjetasEnBiblio = document.querySelector(".tarjetasBiblioteca");

//Inputs
const buscadores = document.querySelectorAll(".añadirAlimento input");
const inputNom = buscadores[0];
const inputCkal = buscadores[1];
const inputGr = buscadores[2];

//Funcion constructora de objetos
function construirAlimento(nombre, porcion, calorias) {
    this.nombre = nombre;
    this.porcion = porcion;
    this.calorias = calorias;
}

function enviarALs(arr) {
    localStorage.setItem("biblAlimentos", JSON.stringify(arr));
}

function crearHtmlBiblio(arr) {
    tarjetasEnBiblio.innerHTML = "";

    let html;

    for (const element of arr) {
        html = `
        <div class="tarjetasBiblioteca">
        <ul>
        <h3>${element.nombre}</h3>
        <li>${element.porcion}</li>
        <li>${element.calorias}</li>
        <button>Eliminar</button>
        </ul>
        </div>
        `;
        tarjetasEnBiblio.innerHTML += html;
    }
}

//Inicializamos biblioteca de Alimentos desde LocalStorage o creamos un array vacío si no existe
const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];

// Evento para agregar alimentos
if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNom.value;
        const porcion = parseInt(inputGr.value);
        const calorias = parseInt(inputCkal.value);

        const nuevoAlimento = new construirAlimento(nombre, porcion, calorias);

        biblAlimento.push(nuevoAlimento);
        //Enviamos datos a ListaAlimento
        listaAlimentos.push(biblAlimento);
        enviarALs(biblAlimento);
        tarjetasHtml(listaAlimentos);
        tarjetasBiblioteca(biblAlimento);
    });
}

//Para que no se borren las tarjetas al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];
    biblAlimento.length >= 0 && listaAlimentos.push(...biblAlimento);
    tarjetasHtml(listaAlimentos);
    tarjetasBiblioteca(biblAlimento);
});
crearHtmlBiblio(biblAlimento);
