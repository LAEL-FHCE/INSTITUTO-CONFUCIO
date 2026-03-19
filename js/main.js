// ── Carrusel ──────────────────────────────
let slideActual = 0;
const slides = document.querySelectorAll('.slide');
const puntos  = document.querySelectorAll('.punto');

function mostrarSlide(index) {
  // Quitar activo de todos
  slides.forEach(s => s.classList.remove('activo'));
  puntos.forEach(p => p.classList.remove('activo'));

  // Activar el slide correcto
  slideActual = (index + slides.length) % slides.length;
  slides[slideActual].classList.add('activo');
  puntos[slideActual].classList.add('activo');
}

function cambiarSlide(direccion) {
  mostrarSlide(slideActual + direccion);
}

function irASlide(index) {
  mostrarSlide(index);
}

// Cambiar automáticamente cada 5 segundos
setInterval(() => {
  cambiarSlide(1);
}, 5000);