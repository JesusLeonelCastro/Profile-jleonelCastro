import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroImage from '@/components/HeroImage';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto rounded-3xl ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 text-lg mb-4"
            >
              Hola, soy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <div className='text-blue-500 opacity-30'>
                Jesus Leonel Castro Gutierrez
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed "
            >
              <div className='opacity-80'>Desarrollador <span className='font-bold text-blue-500'>.NET</span> semi senior con 2 años de experiencia en la construcción de aplicaciones web escalables, aplicando principios de clean code y buenas prácticas de desarrollo.</div>
              
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={scrollToProjects}
                className="inline-block px-6 py-2 rounded-md border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-mono text-sm tracking-wide transition"
              >
                Ver proyectos
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;