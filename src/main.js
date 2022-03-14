// import App from './components/App.js';

// document.getElementById('root').appendChild(App());


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
})
