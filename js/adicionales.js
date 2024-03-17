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
  "¡Hola de nuevo! ¿Unas hamburguesitas o que? "
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