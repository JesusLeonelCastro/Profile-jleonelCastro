
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
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
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>jleonelcastro</title>
        <meta name="description" content="Desarrollador .NET con más de 3 años de experiencia construyendo sistemas web escalables, con buenas prácticas y código limpio." />
      </Helmet>
      
      <div id="particles-js"></div>
      <div className="min-h-screen relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;
