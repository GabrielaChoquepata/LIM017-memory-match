import {App} from './components/App.js'; //Importamos App
document.getElementById('tableGame').appendChild(App()); //Incorporamos App dentro de "tableGame" que ya esta creado en el HTML

//Funcionalidad de btn "música de fondo"
let etiquetaAudio = document.createElement("audio")

let music = document.querySelector(".reproductor")
music.addEventListener("click", () => {
    etiquetaAudio.setAttribute("src", "img/music.mp3")
    if (!music){
        etiquetaAudio.play();
        music=true;
    }
    else {
        etiquetaAudio.pause();
        music=false;
    }
});

//Funcionalidad btn "home"
let home = document.querySelector(".home")
home.addEventListener("click", () => {
    location.reload("containerW3");
    document.getElementById("W4").style.display = "none";
    document.getElementById("W1").style.display = "block";
});

//Funcionalidad para btn "mostrar vista 2"
const mostrarW2 = document.getElementById("btnmostrarW2");
mostrarW2.addEventListener("click", () => {
    document.getElementById("W1").style.display = "none";
    document.getElementById("W2").style.display = "block";
});

//Funcionalidad para btn "mostrar vista 4"
function ganaste(){
    document.getElementById("W3").style.display = "none";
    document.getElementById("W4").style.display = "block";
}

//Funcionalidad para btn "mostrar vista 3"
const mostrarCards= document.getElementById("btnmostrarW3");
mostrarCards.addEventListener("click", () => {
    //Funcionalidad para capturar el nombre del usuario
    let username = document.getElementById("username").value;
    if (username === "") {
    username = "Desconocidx"; }

    //Funcionalidad para imprimir el nombre del usuario en la vista 3
    document.getElementById("W2").style.display = "none";
    document.getElementById("W3").style.display = "block";
    document.getElementById("personalised message").innerHTML = (username);


    // Variables Globales
    var tarjetaVolteada = false;
    var bloquearTablero = false;
    var firstCard, secondCard;
    var couplesCounter = 0;

    // Función validar cards
    const tarjetas = document.querySelectorAll(".containerCard");

    function validarMatch(){
        let crearMatch = firstCard.dataset.simpson === secondCard.dataset.simpson
        if (crearMatch){
            couplesCounter += 1
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);

            if (couplesCounter === 8){

                setTimeout(() => {
                ganaste()
                },700);
            }

        }else {
            bloquearTablero = true;
            setTimeout(() => {
                firstCard.classList.remove("flipCard");
                secondCard.classList.remove("flipCard");
            bloquearTablero = false
            }, 900 ); //Rapidez con que se voltean las cartas

        }
    }

    // Función flipCards - voltear cartas
    tarjetas.forEach((tarjeta) => tarjeta.addEventListener("click", flipCard));
    function flipCard() {
        if (bloquearTablero) return; // Cuando bloquear tablero de como falso continuara al siguiente if
        if (this === firstCard) // Esto no permite que se autovaliden las tarjetas
        return; // y este nos retorna a la siguiente condición
        this.classList.add("flipCard");
        if (!tarjetaVolteada) {
            tarjetaVolteada = true;
            firstCard = this;
            return;

        } else{
            tarjetaVolteada = false;
            secondCard = this;

            validarMatch();
        }
    }

});

//Funcionalidad para btn "Volver a empezar"
const volverAempezar = document.getElementById("btnregresar");
volverAempezar.addEventListener("click", () => {
    location.reload("containerW3");
    document.getElementById("W4").style.display = "none";
});