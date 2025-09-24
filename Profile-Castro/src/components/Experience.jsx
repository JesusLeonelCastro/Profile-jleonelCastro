import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'FULLSTACK WEB DEVELOPER',
      company: '-',
      period: 'Febrero 2025 — Actualidad',
      description: [
        'Rediseño de landing pages.',
        'Sistema de inventario (SAN JOSE).',
        'Sistema de ventas fast food (JOES GRILLS).'
      ]
    },
    {
      title: 'FRONT-END DEVELOPER',
      company: 'UNIVERSIDAD',
      period: 'Octubre 2024 — Enero 2025',
      description: [
        'Soporte TI en Beca18 - UPT.',
        'Landing Beca18 (HTML + CSS).',
        'Análisis de procesos de automatización.'
      ]
    },
    {
      title: 'BACK-END DEVELOPER',
      company: 'MUNICIPALIDAD',
      period: 'Junio 2024 — Octubre 2024',
      description: [
        'Apoyo en infraestructura tecnológica.',
        'Sistema de Informes Técnicos (ASP.NET + SQL Server).',
        'Módulos internos y documentación de procesos.',
        'Automatización de tareas administrativas.'
      ]
    },


    {
      title: 'ESTUDIANTE UNIVERSITARIO',
      company: '-',
      period: '2019 - 2024',
      description: [
        'Proyectos de escritorio y web (NetBeans, C# ASP.NET).',
        'Aprendizaje en Azure y AWS.',
        'Gestor de Base de datos SQLserver , Mysql , MariaDB.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">02. Experiencia</span>
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="experience-item">
                <div className="glass-effect rounded-lg p-6 ">
                  <h3 className="text-xl font-bold text-white mb-1 ">
                    {exp.title} • <span className="text-blue-400">{exp.company}</span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;