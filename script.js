document.getElementById('playBtn').addEventListener('click', () => {

    window.open('https://www.youtube.com/watch?v=Zn37zIBGv5M', '_blank');
});

// Frases que cambian
const phrases = [
    "Desde que llegaste, hiciste que todo tenga sentido.",
    "Eres la sonrisa que ilumina mis días.",
    "No sabía que el amor podía sentirse así 💞",
    "Mi mundo es mejor desde que te tengo a ti 💗",
    "Contigo todo es magia, Nicole ✨"
];
let current = 0;
setInterval(() => {
    const phraseElem = document.getElementById("changingPhrase");
    phraseElem.style.opacity = 0;
    setTimeout(() => {
        phraseElem.textContent = phrases[current];
        phraseElem.style.opacity = 1;
        current = (current + 1) % phrases.length;
    }, 600);
}, 5000);

// Mensaje especial
document.getElementById('messageBtn').addEventListener('click', () => {
    alert("Nicole 💖\nEres mi razón, mi inspiración y mi paz.\nGracias por existir.");
});

// Animación fireworks simple
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const hearts = [];

function createHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 10;
    hearts.push({ x, y, size: 14 + Math.random() * 6 });
}

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hearts.length; i++) {
        const h = hearts[i];
        ctx.font = `${h.size}px serif`;
        ctx.fillStyle = 'rgba(255,105,180,0.8)';
        ctx.fillText('💖', h.x, h.y);
        h.y -= 2;
        if (h.y < -20) hearts.splice(i, 1);
    }
    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 300);
animateHearts();
