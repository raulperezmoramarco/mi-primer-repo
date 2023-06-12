// querySelector  retornar niguno o hasta un elemento
//const heading = document.querySelector("h2")
//console.log(heading);

// querySelectorAll retorna ninguno y hasta todos los elementos
//const enlaces = document.querySelectorAll("")

// Generar un nuevo enlace
//const nuevoEnlace = document.createElement("A")

//console.log(nuevoEnlace);




// EVENTOS

//console.log(1);

//window.addEventListener("load", function() { //load espera que el js y los archivos que dependen del HTML estén listos
//    console.log(2);    
//});

//window.onload = function(){
//    console.log(3);
//}

//document.addEventListener("DOMContentLoaded", function() {
//    console.log(4);
//});

//console.log(5);

//window.onscroll = function() {
//    console.log("scolling...");
//}

// Seleccionar elementos y asociarles un Evento

//const BotonEnviar = document.querySelector(".boton"); // Para crear variable se utiliza const / querySelector se limita a un elemento 
//BotonEnviar.addEventListener("click", function(evento){
//    console.log(evento);
//    evento.preventDefault();

    
    // Validar un formulario


//    console.log("enviando formulario");
//});


// Eventos de los Inputs y Textarea

const datos = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
}

const nombre = document.querySelector("#nombre-apellido");
const correo = document.querySelector("#correo");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario"); // Para crear variable se utiliza const / querySelector se limita a un elemento 

nombre.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
asunto.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Evento de Submit (para que el usuario pueda enviar datos)

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    // Validar el formulario  
    const { nombre, correo, asunto, mensaje } = datos;

    if(nombre != "" || correo != "" || asunto != "" || mensaje != ""){
        mostrarCorrecto("Su mensaje ha sido enviado exitosamente");

        return;// Corta la ejecución de código
    } 
        // Crear la alerta de error
        mostrarError("Todos los campos son obligatorios");  
});

function leerTexto(evento) {
    console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;

    // console.log(datos);
}

function mostrarCorrecto(mensaje) {
    const correcto = document.createElement("P");
    correcto.textContent = mensaje;
    correcto.classList.add("correcto");

    formulario.appendChild(correcto);

    // Desaparezca después de 5 segundos
    setTimeout(() => {
        correcto.remove();
    }, 5000);
}

function mostrarError(mensaje) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild( error );

    // Desaparezca después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}