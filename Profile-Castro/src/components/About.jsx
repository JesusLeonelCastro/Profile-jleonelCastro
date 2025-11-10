import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animación
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const iconsContainer = {
  show: { transition: { staggerChildren: 0.06 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 18 },
  },
};

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

          <div className="glass-effect rounded-lg p-8 ">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 opacity-70 hover:opacity-90 transition-opacity">
              Soy un desarrollador web y desktop semi senior que me gusta automatizar procesos y crear soluciones tecnológicas innovadoras.
              Mi experiencia se centra en el desarrollo backend con .NET y Java Netbeans, donde he trabajado
              en proyectos personales como en producción hasta aplicaciones web modernas. Recientemente he ampliado mis conocimientos con tecnologías frontend como Angular y frameworks de backend como Node.js Express.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed  opacity-70 hover:opacity-90 transition-opacity">
              Mi enfoque es seguir las buenas prácticas de desarrollo, escribiendo código legible, mantenible y escalable. Estoy en continua formación para
              mantenerme actualizado con las últimas tecnologías y tendencias del sector.
            </p>
          </div>

<br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
           
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="glass-effect rounded-lg p-6 md:p-8 text-center"
            >
              
              <motion.div
                variants={iconsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 text-2xl md:text-3xl overflow-visible"
              >
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-html5-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-css3-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-javascript-plain colored"></i>
                </motion.span>
                
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }} >
                  <i className="devicon-typescript-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-tailwindcss-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-react-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-angularjs-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-bootstrap-plain colored"></i>
                </motion.span>
                
                
              </motion.div>
              
            </motion.div>

            {/* BACKEND */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="glass-effect rounded-lg p-6 md:p-8 text-center"
            >
              
              <motion.div
                variants={iconsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 text-3xl md:text-3xl"
              >
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }} >
                  <i className="devicon-csharp-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-java-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-apache-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-nodejs-plain-wordmark text-green-400"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-express-original colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-github-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-git-plain colored"></i>
                </motion.span>
                
              </motion.div>
            </motion.div>

            {/* DEVOPS */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="glass-effect rounded-lg p-6 md:p-8 text-center"
            >
              

              <motion.div
                variants={iconsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 text-3xl md:text-3xl"
              >
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-azure-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-amazonwebservices-plain colored"></i>
                </motion.span>
              </motion.div>
            </motion.div>

            {/* BASE DE DATOS */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="glass-effect rounded-lg p-6 md:p-8 text-center"
            >
              

              <motion.div
                variants={iconsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 text-3xl md:text-3xl"
              >
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-microsoftsqlserver-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-mysql-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-firebase-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-supabase-plain colored"></i>
                </motion.span>
                <motion.span variants={iconVariants} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <i className="devicon-mongodb-plain colored"></i>
                </motion.span>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;