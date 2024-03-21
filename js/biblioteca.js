
//Traemos btn para añadir alimentos a LS
const btns = document.querySelectorAll(".añadirAlimento form button"),
btnAgregar = btns[0];

//Inputs
const buscadores = document.querySelectorAll(".añadirAlimento input"),
inputNom = buscadores[0],
inputCkal = buscadores[1],
inputGr = buscadores[2];

//Funcion constructora de objetos

function construirAlimento (nombre, porcion, calorias){
    this.nombre = nombre;
    this.porcion = porcion;
    this.calorias = calorias;
}

function enviarALs(arr){
    localStorage.setItem("biblAlimentos", JSON.stringify(arr));
}

//Inicializamos biblioteca de Alimentos desde LocalStorage o creamos un array vacío si no existe
const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];

// Evento para agregar alimentos

btnAgregar.addEventListener("click", ()=>{
    const nombre = inputNom.value;
    const porcion = parseInt(inputGr.value);
    const calorias = parseInt(inputCkal.value);
    
    const nuevoAlimento = new construirAlimento(nombre, porcion, calorias);
    
    biblAlimento.push(nuevoAlimento);
    //Enviamos datos a ListaAlimento
    listaAlimentos.push(biblAlimento)
    enviarALs(biblAlimento);
        tarjetasHtml(listaAlimentos);
});

//Para que no se borren las tarjetas al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    const biblAlimento = JSON.parse(localStorage.getItem("biblAlimentos")) || [];
    biblAlimento.length > 0 && listaAlimentos.push(...biblAlimento);
    // Generar las tarjetas al cargar la página
    tarjetasHtml(listaAlimentos);
});