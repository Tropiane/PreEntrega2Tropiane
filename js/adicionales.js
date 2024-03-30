//Saludo de bienvenida
const saludos = [
  "¡Hey! ¿Qué hay para el almuerzo hoy?",
  "¡Hola! ¿Qué delicias estás planeando preparar?",
  "¡Hola de nuevo! ¿Listo para cocinar algo delicioso?",
  "¡Qué bueno verte! ¿Qué se está cocinando hoy?",
  "¡Hola! ¿Qué estás pensando en disfrutar hoy?",
  "¡Hey, hola! ¿Qué se cuece por aquí?",
  "¡Hola! ¿Ya sabes qué te apetece para cenar?",
  "¡Qué alegría verte! ¿Listo para satisfacer ese apetito?",
  "¡Vos de nuevo! ¿Unas hamburguesitas o que?",
  "¡Hey, qué tal! ¿Qué va a ser la estrella del menú hoy?",
];
let saludoInicio = document.querySelector("#titulo h1");
let bienvenidaBiblio = document.querySelector("#tituloBiblio h1");

let saludo = "";
const bienvenida = [
  'bienvenid@ ',
  ' a ',
  ' tu ',
  ' biblioteca ',
  ' personal',
];

//bienvenida en biblioteca
for (let i = 0; i < bienvenida.length; i++) {
  setTimeout(() => {
    bienvenidaBiblio.innerText=bienvenidaBiblio.innerText + bienvenida[i] ;
  }, i * 1000);

}

//bienvenida en Index
  for (let i = 0; i < 1; i++) {
     let random = Math.round(Math.random() * saludos.length)
     saludo = saludo + saludos[random]
  }
  saludoInicio.innerText = saludo 
  //Fin saludo bienvenida

  //saludo biblioteca

   //Fin saludo biblioteca

  // const linkBiblioteca = document.getElementById("linkBiblioteca");

  // linkBiblioteca.addEventListener("click", ()=>{
  //   Swal.fire({
  //     title: "Zona en proceso de construcción",
  //     text: "Disculpe las molestias"
  //   });
  // })
  //Traemos btn para añadir alimentos a LS

