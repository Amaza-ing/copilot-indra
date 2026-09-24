const messageElement = document.getElementById('message');
const changeMessageButton = document.getElementById('changeMessageButton');
const themeButton = document.getElementById('themeButton');
const clockElement = document.getElementById('clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const messages = [
  'Esta es una página web sencilla creada con HTML, CSS y JavaScript.',
  'Puedes personalizar esta base para tu portafolio, landing page o negocio.',
  'Cambia colores, textos y secciones según tus necesidades.'
];

let messageIndex = 0;

function changeMessage() {
  messageIndex = (messageIndex + 1) % messages.length;
  messageElement.textContent = messages[messageIndex];
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function updateClock() {
  const currentDate = new Date();

  clockElement.textContent = currentDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const hours = currentDate.getHours() % 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const rotationHours = (hours + minutes / 60 + seconds / 3600) * 30;
  const rotationMinutes = (minutes + seconds / 60) * 6;
  const rotationSeconds = seconds * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${rotationHours}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${rotationMinutes}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${rotationSeconds}deg)`;
}

changeMessageButton.addEventListener('click', changeMessage);
themeButton.addEventListener('click', toggleTheme);

updateClock();
setInterval(updateClock, 1000);
