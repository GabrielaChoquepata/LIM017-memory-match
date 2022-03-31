import thesimpsons from '../data/thesimpsons/thesimpsons.js';

//Renombramos la variable de data
let dataCards = thesimpsons.items;
dataCards = dataCards.concat(dataCards); //Duplicamos la data de las cartas

//Aleatorizamos la data de las cartas
dataCards = dataCards.sort (() => {return Math.random()-0.5});
// console.log(dataCards);

//Creamos las cartas
const App = () => {
      const el = document.createElement("section"); //Creamos una nueva sección
      el.className = "memory-game"
      el.contains = [] //La cual contendra
      let memoryCards = [] //la variable que alojara las cartas
      for(let item of dataCards){
            memoryCards.push( `
            <div id = "containerCard" class = "containerCard" data-simpson="${item.id}">
                  <div class= "card back">
                  <img src = "${item.image}" class = "poster" alt = "simpson"/>
                  </div>
                  <div class= "card front">
                  <img src = "img/frontCard.png" class = "poster"/>
                  </div>
            </div>
            `)

            el.innerHTML = memoryCards.join("") //Impriminos dentro de el <--- memoryCards
      }
      return el
}

App()

export {App}