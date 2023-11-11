// alentemos a la seleccion

// Obtener referencias a los elementos en el DOM
const audio = document.getElementById('miAudio');
const botonReproducir = document.getElementById('botonReproducir');
const botonDetener = document.getElementById('botonDetener');

// Agregar un controlador de eventos al botón de reproducción
botonReproducir.addEventListener('click', function() {
  if (audio.paused) {
    audio.play(); // Iniciar la reproducción si está pausada
    botonReproducir.textContent = 'Pausa'; // Cambiar el texto del botón
  } else {
    audio.pause(); // Pausar la reproducción si está en curso
    botonReproducir.textContent = 'Reproducir'; // Cambiar el texto del botón
  }
});

// Agregar un controlador de eventos al botón de detener
botonDetener.addEventListener('click', function() {
  audio.pause(); // Pausar la reproducción
  audio.currentTime = 0; // Reiniciar la canción al principio
  botonReproducir.textContent = 'Reproducir'; // Restablecer el texto del botón
});

console.log('audio:', audio);
console.log('botonReproducir:', botonReproducir);
console.log('botonDetener:', botonDetener);
