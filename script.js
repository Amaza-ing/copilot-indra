import { calculateClockRotations, getNextMessageIndex } from './app-logic.js';

const messageElement = document.getElementById('message');
const changeMessageButton = document.getElementById('changeMessageButton');
const themeButton = document.getElementById('themeButton');
const themeMenu = document.getElementById('themeMenu');
const themeOptions = document.querySelectorAll('.palette-option');
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
  messageIndex = getNextMessageIndex(messageIndex, messages.length);
  messageElement.textContent = messages[messageIndex];
}

function applyTheme(themeName) {
  document.body.dataset.theme = themeName;

  themeOptions.forEach((option) => {
    const isActive = option.dataset.theme === themeName;
    option.classList.toggle('active', isActive);
    option.setAttribute('aria-checked', String(isActive));
  });

  localStorage.setItem('miweb-theme', themeName);
}

function toggleThemeMenu() {
  const isOpen = themeMenu.classList.toggle('open');
  themeButton.setAttribute('aria-expanded', String(isOpen));
}

function updateClock() {
  const currentDate = new Date();

  clockElement.textContent = currentDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const { hours, minutes, seconds } = calculateClockRotations(
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds()
  );

  hourHand.style.transform = `translateX(-50%) rotate(${hours}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutes}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${seconds}deg)`;
}

changeMessageButton.addEventListener('click', changeMessage);
themeButton.addEventListener('click', toggleThemeMenu);

themeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    applyTheme(option.dataset.theme);
    themeMenu.classList.remove('open');
    themeButton.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  const clickedInsideThemeMenu = themeMenu.contains(event.target);
  const clickedThemeButton = themeButton.contains(event.target);

  if (!clickedInsideThemeMenu && !clickedThemeButton) {
    themeMenu.classList.remove('open');
    themeButton.setAttribute('aria-expanded', 'false');
  }
});

const savedTheme = localStorage.getItem('miweb-theme') || 'default';
applyTheme(savedTheme);

updateClock();
setInterval(updateClock, 1000);
