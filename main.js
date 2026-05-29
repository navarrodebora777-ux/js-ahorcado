
let publicaciones = [];


const formulario = document.getElementById("formPublicacion");
const contenedor = document.getElementById("contenedorPublicaciones");
const mensajeError = document.getElementById("mensajeError");


formulario.addEventListener("submit", function(e){

   
    e.preventDefault();

    // OBTENER DATOS
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const categoria = document.getElementById("categoria").value;

    if(titulo === "" || contenido === "" || categoria === ""){
        mensajeError.textContent = "Todos los campos son obligatorios";
        return;
    }

    if(contenido.length < 10){
        mensajeError.textContent = "El contenido debe tener mínimo 10 caracteres";
        return;
    }

    mensajeError.textContent = "";


    const nuevaPublicacion = {
        id: Date.now(),
        titulo,
        contenido,
        categoria
    };


    publicaciones.push(nuevaPublicacion);

    mostrarPublicaciones();


    formulario.reset();

});


function mostrarPublicaciones(){

    contenedor.innerHTML = "";

    publicaciones.forEach(function(publicacion){

        contenedor.innerHTML += `
        
        <div class="card publicacion p-3">

            <h3>${publicacion.titulo}</h3>

            <span class="badge bg-primary mb-2">
                ${publicacion.categoria}
            </span>

            <p>${publicacion.contenido}</p>

            <button
                class="btn btn-danger"
                onclick="eliminarPublicacion(${publicacion.id})"
            >
                Eliminar
            </button>

        </div>

        `;
    });

}



function eliminarPublicacion(id){

    publicaciones = publicaciones.filter(function(publicacion){
        return publicacion.id !== id;
    });

    mostrarPublicaciones();


let palabraFija = ["C", "I", "L", "S", "A"];

function crearInputsValidacion() {

    const contenedor = document.getElementById("palabra");

    contenedor.innerHTML = "";

    for (let i = 0; i < palabraFija.length; i++) {

        let input = document.createElement("input");

        input.type = "text";
        input.maxLength = 1;
        input.className = "input-validacion";

        contenedor.appendChild(input);
    }
}

function comprobarPalabra() {

    let inputs = document.querySelectorAll(".input-validacion");

    let corazones = "";

    // CASILLA 1
    if (inputs[0].value.toUpperCase() == "C") {

        corazones += "❤️";
        inputs[0].style.border = "2px solid green";

    } else {

        inputs[0].style.border = "2px solid red";
    }

    // CASILLA 2
    if (inputs[1].value.toUpperCase() == "I") {

        corazones += "❤️";
        inputs[1].style.border = "2px solid green";

    } else {

        inputs[1].style.border = "2px solid red";
    }

    // CASILLA 3
    if (inputs[2].value.toUpperCase() == "L") {

        corazones += "❤️";
        inputs[2].style.border = "2px solid green";

    } else {

        inputs[2].style.border = "2px solid red";
    }

    // CASILLA 4
    if (inputs[3].value.toUpperCase() == "S") {

        corazones += "❤️";
        inputs[3].style.border = "2px solid green";

    } else {

        inputs[3].style.border = "2px solid red";
    }

    // CASILLA 5
    if (inputs[4].value.toUpperCase() == "A") {

        corazones += "❤️";
        inputs[4].style.border = "2px solid green";

    } else {

        inputs[4].style.border = "2px solid red";
    }

    document.getElementById("vidas").innerHTML = corazones;
}

crearInputsValidacion();

const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.onclick = function(event) {

    event.preventDefault();

    comprobarPalabra();
};
