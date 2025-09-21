import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">01. Acerca de mí</span>
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>
          
          <div className="glass-effect rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Soy un desarrollador web y desktop junior que me gusta automatizar procesos y crear soluciones tecnológicas innovadoras. 
              Mi experiencia se centra en el desarrollo backend con .NET y Java Netbeans, donde he trabajado 
              en proyectos personales como en producción hasta aplicaciones web modernas.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Me gusta seguir las buenas prácticas de desarrollo, escribiendo código legible, mantenible y escalable. Siempre me gusta estar en constante aprendizaje para
              mantenerme actualizado con las últimas tecnologías y tendencias del sector.
            </p>

            <h2 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Tecnologías</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['C#', '.NET Core', 'ASP.NET', 'SQL Server', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Git'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="tech-badge rounded-lg px-3 py-2 text-center text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;