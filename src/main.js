// import App from './components/App.js';

// document.getElementById('root').appendChild(App());
import thesimpsons from './data/thesimpsons/thesimpsons.js';
let dataCards = thesimpsons.items
dataCards = dataCards.concat(dataCards)
dataCards = dataCards.sort (() => {return Math.random()-0.5});
console.log(dataCards);


let boton = document.querySelector(".reproductor")
boton.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "img/music.mp3")
    etiquetaAudio.play()
});

const mostrarW2 = document.getElementById("btnmostrarW2");
mostrarW2.addEventListener("click", () => {
    document.getElementById("W1").style.display = "none";
    document.getElementById("W2").style.display = "block";
});

const mostrarCards= document.getElementById("btnmostrarW3");
mostrarCards.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    if (username === "") {
    username = 'Desconocidx';
}
    document.getElementById("W2").style.display = "none";
    document.getElementById("W3").style.display = "block";
    document.getElementById("personalised message").innerHTML = (username);


    const game = document.getElementById("tableGame");
    for(let card of dataCards){
        game.innerHTML += `
        <div id='containerCard' class='container-card' name='${card.id}'>
            <div class= 'card back'>
            <img src="${card.image}" class= "poster">
            </div>
            <div class='card front'>
            <img src="img/frontCard.png" class= "poster">
            </div>
          </div>
        `;
    }
    console.log(game)
});
















// import {generateCards} from './components/App.js';
// document.getElementById('tableGame').appendChild(generateCards())

// // document.getElementById('tableGame').appendChild(fetchSimpsons());
// const tableGame = document.getElementById("tableGame")

// // console.log(tableGame)



// const arrayElement = ["primer elemento", "segundo elemento", "tercer elemento"]  //Array: crea una lista y se puede tomar el por el

// arrayElement.forEach(item => {  //ForEach: recorre cada elemento
//   // console.log(item)
//   const li = document.createElement("li");
//   li.textContent = item
//   tableGame.appendChild(li);
// })
