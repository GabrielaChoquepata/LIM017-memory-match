// import App from './components/App.js';
// document.getElementById('root').appendChild(App());
import thesimpsons from './data/thesimpsons/thesimpsons.js';

//Duplicamos las cartas
let dataCards = thesimpsons.items;
dataCards = dataCards.concat(dataCards);

//Aleatorizamos las cartas
dataCards = dataCards.sort (() => {return Math.random()-0.5});
console.log(dataCards);

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
    username = 'Desconocidx';
}
    //Funcionalidad para imprimir el nombre del usuario en la vista 3
    document.getElementById("W2").style.display = "none";
    document.getElementById("W3").style.display = "block";
    document.getElementById("personalised message").innerHTML = (username);

    //Funcionalidad para imprimir el tablero de cartas en el DOM
    const game = document.getElementById("tableGame");
    for(let item of dataCards){
        game.innerHTML += `
        <div id='containerCard' class='containerCard' data-simpson='${item.id}'>
            <div class= 'card back'>
                <img src="${item.image}" class= "poster" alt="simpson"/>
            </div>
            <div class='card front'>
                <img src="img/frontCard.png" class= "poster"/>
            </div>
        </div>
        `;
    }

    // Variables Globales
    var tarjetaVolteada = false;
    var bloquearTablero = false;
    var firstCard, secondCard;
    var couplesCounter = 0;

    // Validar cards
    const tarjetas = document.querySelectorAll(".containerCard");

    function validarMatch(){
        let crearMatch = firstCard.dataset.simpson === secondCard.dataset.simpson
        if (crearMatch){
            couplesCounter += 1
            firstCard.removeEventListener('click' , flipCard);
            secondCard.removeEventListener('click' , flipCard);

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