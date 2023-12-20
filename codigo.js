// script.js
const imagen = document.getElementById("Loto");
const musica = document.getElementById("Spiderman");
const boton = document.getElementById("boton");

function toggleAudio() {
    if (musica.paused) {
        musica.play();
        boton.textContent = "Pausar";
    } else {
        musica.pause();
        boton.textContent = "Reproducir";
    }
}

const image = document.getElementById("estrella");
const audio = document.getElementById("favo");
const start = document.getElementById("start");

function togglesong() {
    if (audio.paused) {
        audio.play();
        start.textContent = "Pausar";
    } else {
        audio.pause();
        start.textContent = "Reproducir";
    }
}
