// Configuración de particles.js
document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 55, density: { enable: true, value_area: 800 } },
      color: { value: "#2e2f2f" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  if (typeof Stats !== 'undefined') {
    const stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.domElement);
    
    function animate() {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }
});
// FINAL DE LA CONFIGURACION DE PARTICLES.JS 


document.addEventListener('DOMContentLoaded', function() {
  // Elementos del DOM
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Función para alternar el menú
  function toggleMenu() {
    mobileMenu.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    
    // Cambiar ícono
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  }
  
  // Evento para el botón del menú
  mobileMenuButton.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en un enlace (para móviles)
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
  
  // Inicializar particles.js si existe
  if (typeof particlesJS === 'function') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }
});

  // FUNCIONALIDAD DEL BOTON
document.querySelectorAll('.button').forEach(button => {

    let div = document.createElement('div'),
        letters = button.textContent.trim().split('');

    function elements(letter, index, array) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

    }
    letters.forEach(elements);
    button.innerHTML = div.outerHTML;
    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
        }
    });
    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
    });

});
  // FINAL DE LA FUNCIONALIDAD DEL BOTON


  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Opcional: cerrar menú al hacer clic en un link
    const links = mobileMenu.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
});
