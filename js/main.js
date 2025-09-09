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

// Proyectos
document.addEventListener('DOMContentLoaded', () => {
    const expButtons = document.querySelectorAll('#exp-menu button');
    const expItems = document.querySelectorAll('.exp-item');

    function showExp(id) {
        expItems.forEach(e => e.classList.add('hidden'));
        const target = document.querySelector('#exp-' + id);
        if (target) target.classList.remove('hidden');

        expButtons.forEach(b => b.classList.remove('text-blue-400', 'font-semibold'));
        const activeBtn = document.querySelector('#btn-' + id);
        if (activeBtn) activeBtn.classList.add('text-blue-400', 'font-semibold');
    }

    expButtons.forEach(btn => {
        btn.addEventListener('click', () => showExp(btn.dataset.exp));
    });

    // Inicial
    showExp('muni');

    // CARRUSEL PROYECTOS
    const track = document.getElementById('projectsTrack');
    if (track) {
        let index = 0;
        let width = track.clientWidth;
        const slides = Array.from(track.children);
        const total = slides.length;
        const prevBtn = document.getElementById('projPrev');
        const nextBtn = document.getElementById('projNext');
        const dotsWrap = document.getElementById('projDots');

        function setWidths() {
            width = track.clientWidth;
            slides.forEach(s => s.style.minWidth = width + 'px');
            move();
        }

        function buildDots() {
            dotsWrap.innerHTML = '';
            for (let i = 0; i < total; i++) {
                const d = document.createElement('button');
                d.className = 'proj-dot w-3 h-3 rounded-full bg-white-400/40 hover:bg-white-400 transition';
                d.setAttribute('aria-label', 'Ir a proyecto ' + (i + 1));
                d.addEventListener('click', () => {
                    index = i;
                    move();
                });
                dotsWrap.appendChild(d);
            }
        }

        function updateDots() {
            dotsWrap.querySelectorAll('.proj-dot').forEach((d, i) => {
                d.classList.toggle('bg-white-400', i === index);
                d.classList.toggle('bg-blue-400/40', i !== index);
                d.classList.toggle('scale-110', i === index);
            });
        }

        function move() {
            track.style.transform = `translateX(-${index * width}px)`;
            updateDots();
        }

        function next() {
            index = (index + 1) % total;
            move();
        }

        function prev() {
            index = (index - 1 + total) % total;
            move();
        }

        nextBtn?.addEventListener('click', next);
        prevBtn?.addEventListener('click', prev);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        });

        window.addEventListener('resize', setWidths);

        buildDots();
        setWidths();

        // Auto-play opcional (descomenta si lo quieres)
        // setInterval(next, 7000);
    }
});


function initProjectGalleries() {
    document.querySelectorAll('[data-gallery]').forEach(gallery => {
        const mainImg = gallery.querySelector('[data-gallery-main]');
        const thumbs = gallery.querySelectorAll('[data-gallery-thumbs] .gallery-thumb');

        thumbs.forEach(btn => {
            btn.addEventListener('click', () => {
                const newSrc = btn.getAttribute('data-src');
                
                if (mainImg.getAttribute('src') === newSrc) return;

                // estado visual thumbnails
                thumbs.forEach(t => t.classList.remove('ring-blue-400'));
                btn.classList.add('ring-blue-400');

                // transición suave
                mainImg.classList.add('opacity-0');
                const img = new Image();
                img.onload = () => {
                    mainImg.src = newSrc;
                    requestAnimationFrame(() => {
                        mainImg.classList.remove('opacity-0');
                    });
                };
                img.src = newSrc;
            });
        });

        // marcar primero activo
        const first = thumbs[0];
        if (first) first.classList.add('ring-blue-400');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initProjectGalleries();
});

(function () {
    const toggle = document.getElementById('menuToggle');
    const panel = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('menuClose');
    const overlay = document.getElementById('menuOverlay');
    if (!toggle || !panel || !overlay) return;

    let open = false;
    const bars = toggle.querySelectorAll('span');

    function applyState() {
        panel.classList.toggle('translate-x-full', !open);
        panel.classList.toggle('translate-x-0', open);
        overlay.classList.toggle('opacity-0', !open);
        overlay.classList.toggle('opacity-100', open);
        overlay.classList.toggle('pointer-events-none', !open);
        toggle.setAttribute('aria-expanded', open);

        if (bars.length === 3) {
            bars[0].classList.toggle('translate-y-[7px]', open);
            bars[0].classList.toggle('rotate-45', open);
            bars[1].classList.toggle('opacity-0', open);
            bars[2].classList.toggle('-translate-y-[7px]', open);
            bars[2].classList.toggle('-rotate-45', open);
        }
        document.body.classList.toggle('overflow-hidden', open);
    }

    function setState(force) {
        open = typeof force === 'boolean' ? force : !open;
        applyState();
    }

    toggle.addEventListener('click', () => setState());
    closeBtn?.addEventListener('click', () => setState(false));
    overlay.addEventListener('click', () => setState(false));

    panel.querySelectorAll('[data-navlink]').forEach(a =>
        a.addEventListener('click', () => setState(false))
    );

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && open) setState(false);
    });
})();
// ...existing code...
// Ajustar padding-top según altura header si cambias h-16
// document.documentElement.style.setProperty('--header-height', document.querySelector('header').offsetHeight + 'px');
// ...existing code...
// Ajusta cálculo de ancho (si antes usabas clientWidth puede fallar con -mx-6)
(function(){
  const track = document.getElementById('projectsTrack');
  if(!track) return;
  let index = 0;
  const slides = Array.from(track.children);
  function setWidths(){
     slides.forEach(sl=>{
        // ya definimos min-w con Tailwind; solo forzamos que coincida con viewport en mobile
        if(window.innerWidth < 768){
          sl.style.minWidth = window.innerWidth + 'px';
        } else {
          sl.style.minWidth = '';
        }
     });
     move();
  }
  function move(){
     const slideWidth = slides[0].getBoundingClientRect().width;
     track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  // Si ya tienes prev/next, solo llama move(); no dupliques listeners
  window.addEventListener('resize', setWidths);
  setWidths();
})();
// ...existing code...