// ── Protección básica del código ──────────────────
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key === 'F12') e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === 'I') e.preventDefault();
  if (e.ctrlKey && e.key === 'u') e.preventDefault();
});

// ── Música de fondo ───────────────────────────────
const audio = new Audio('love.mp3');
audio.loop = true; // se repite sola

// Intenta reproducir al cargar
audio.play().catch(() => {
  // Si el navegador la bloquea, espera el primer clic o toque
  document.body.addEventListener('click', () => audio.play(), { once: true });
});

// ── Abrir/cerrar sobre con clic (para móvil) ──────
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

// ── Corazones flotantes de fondo ──────────────────
const heartsContainer = document.getElementById('hearts');
const emojis = ['❤️', '💕', '💗', '💓', '💖', '💝', '🌹'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
  heart.style.animationDelay = (Math.random() * 2) + 's';
  heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
  heartsContainer.appendChild(heart);

  // Elimina el corazón al terminar la animación para no llenar el DOM
  heart.addEventListener('animationend', () => heart.remove());
}

// Crea un corazón cada 800ms
setInterval(createHeart, 800);