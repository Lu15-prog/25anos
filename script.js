const totalFotos = 32;
const imagens = [];

imagens.forEach(src => {
    const img = new Image();
    img.src = src;
});

for (let i = 1; i <= totalFotos; i++) {
    imagens.push(`fotos/foto${i}.jpeg`);
}

const mensagens = [
    "Desde que você entrou na minha vida, tudo ficou mais bonito ❤️",
    "Seu sorriso ilumina meus dias ✨",
    "Cada momento ao seu lado é especial 💕",
    "Eu te amo mais do que palavras podem dizer 💖"
];

let index = 0;

const imgElement = document.getElementById("slideshow");
const msgElement = document.getElementById("mensagem");
const musica = document.getElementById("musica");
const playBtn = document.getElementById("playBtn");

function trocarSlide() {
    index = (index + 1) % imagens.length;

    imgElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = imagens[index];
        msgElement.textContent = mensagens[index % mensagens.length];
    }, 400);

    setTimeout(() => {
        imgElement.style.opacity = 1;
    }, 450);
}

function iniciar() {
    msgElement.textContent = mensagens[0];
    setInterval(trocarSlide, 5000);
}

playBtn.addEventListener("click", () => {
    musica.play();
    playBtn.style.display = "none";
});

window.onload = iniciar;