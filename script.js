const mensaje = document.getElementById('mensaje');
const cambiarMensajeBtn = document.getElementById('cambiarMensaje');
const temaBtn = document.getElementById('temaBtn');
const clock = document.getElementById('clock');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const mensajes = [
  'Esta es una página web sencilla creada con HTML, CSS y JavaScript.',
  'Puedes personalizar esta base para tu portafolio, landing page o negocio.',
  'Cambia colores, textos y secciones según tus necesidades.'
];

let indiceMensaje = 0;

cambiarMensajeBtn.addEventListener('click', () => {
  indiceMensaje = (indiceMensaje + 1) % mensajes.length;
  mensaje.textContent = mensajes[indiceMensaje];
});

temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function actualizarHora() {
  const ahora = new Date();
  clock.textContent = ahora.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const horas = ahora.getHours() % 12;
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  const rotationHours = ((horas + (minutos / 60) + (segundos / 3600)) * 30);
  const rotationMinutes = ((minutos + (segundos / 60)) * 6);
  const rotationSeconds = segundos * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${rotationHours}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${rotationMinutes}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${rotationSeconds}deg)`;
}

actualizarHora();
setInterval(actualizarHora, 1000);
