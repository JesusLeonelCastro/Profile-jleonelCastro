import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// (Zoom deshabilitado) Se removió el modal de imagen

const ProjectGallery = ({ images, projectTitle }) => {
  const [mainImage, setMainImage] = useState(images[0].src);
  const [activeIndex, setActiveIndex] = useState(0);
  // Zoom deshabilitado: sin estado de modal



  const handleThumbClick = (src, index) => {
    setMainImage(src);
    setActiveIndex(index);
  };

  // Handlers de zoom eliminados

  return (
    <>
      <div className="basis-full md:basis-1/2 min-w-0">
        <div className="relative bg-gray-800/50 rounded-lg border border-gray-800 flex items-center justify-center min-h-[260px] max-h-[420px] p-2">
          <img
            src={mainImage}
            alt={`Vista principal de ${projectTitle}`}
            className="w-full h-full object-contain transition-all duration-300"
          />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 thumbs-scroll">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbClick(image.src, index)}
              className={`w-20 h-14 flex-shrink-0 rounded-md overflow-hidden ring-1 transition ${activeIndex === index ? 'ring-blue-400' : 'ring-transparent hover:ring-blue-400'}`}
            >
              <img src={image.src} className="w-full h-full object-cover" alt={image.alt} />
            </button>
          ))}
        </div>
      </div>

      {/* Zoom deshabilitado: modal removido */}
    </>
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [subCurrentSlide, setSubCurrentSlide] = useState(0);

  const trackRef = useRef(null);
  const subTrackRef = useRef(null); // <-- ref independiente para subproyectos


  // Restaurar handlers para abrir enlaces (GitHub/Demo)
  const handleGithubClick = (url) => {
    try {
      if (!url || url === '#') {
        toast({
          description: 'El repositorio no disponible.',
        });
        return;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error abriendo enlace de GitHub:', err);
      toast({ title: 'Error', description: 'No se pudo abrir el enlace.' });
    }
  };


  const handleDemoClick = (url) => {
    try {
      if (!url || url === '#') {
        toast({
          description: 'Demo no disponible.',
        });
        return;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error abriendo demo:', err);
      toast({ title: 'Error', description: 'No se pudo abrir la demo.' });
    }
  };





  const projects = [
    {
      title: 'Sistema de gestión de ventas de comida rápida - JOES GRILLS',
      roles: {
        Administrador: 'Gráficos Estadísticos - Gestión Categorías - Gestión Platos - Gestión Mesas - Gestión Salsas - Historial Ventas - Reportes - Tickets Internos.',
        Empleado: 'Tomar pedido - Pedidos Activos - Tickets Internos.'
      },
      technologies: ['Vite', 'React', 'Node.js', 'Tailwind', 'Supabase'],
      images: [
        { src: '/proyectos/joe/joe1.png', alt: 'Login de Joes Grills' },
        { src: '/proyectos/joe/joe2.png', alt: 'Dashboard de Joes Grills' },
        { src: '/proyectos/joe/joe3.png', alt: 'Gestión de platos' },
        { src: '/proyectos/joe/joe4.png', alt: 'Toma de pedidos' },
        { src: '/proyectos/joe/joe10.png', alt: 'Historial de ventas' },
        { src: '/proyectos/joe/joe8.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/joe/joe4.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/joe/joe9.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/joe/joe7.png', alt: 'Reportes del sistema' },
      ],
      github: 'https://github.com/JesusLeonelCastro/Sistema-Gestion-Snack_Joe.git',
      demo: 'https://lavender-crane-734833.hostingersite.com/login'
    },
    {
      title: 'Sistema gestión de Informes técnicos y Inventario TI',
      roles: {
        Administrador: 'Gráficos estadísticos - Gestión Usuarios - Gestión Áreas - Gestión Sedes - Gestión Tipos equipos - Gestión Estados - Gestión Fallas reportadas - Gestión Informes técnicos - Gestión Inventario - Reportes PDF.',
        Soporte: 'Crear informes, ver inventario asignado.'
      },
      technologies: ['C#', 'ASP.NET', 'Bootstrap', 'LINQ', 'SQL Server'],
      images: [
        { src: '/proyectos/mdp/muni1.png', alt: 'Dashboard de sistema de TI' },
        { src: '/proyectos/mdp/muni2.png', alt: 'Gestión de inventario de TI' },
        { src: '/proyectos/mdp/muni3.png', alt: 'Creación de informe técnico' },
        { src: '/proyectos/mdp/muni4.png', alt: 'Reportes en PDF' },
        { src: '/proyectos/mdp/muni5.png', alt: 'Gestión de usuarios del sistema' },
      ],
      github: 'https://github.com/JesusLeonelCastro/Sistema_Tramite_Documentarios_Informes_Tecnicos.git',
      demo: 'http://www.alemarticastro.somee.com/Autentication/Login'
    },

    {
      title: 'Landing Page - Beca18 UPT',
      roles: {
        Detalles: 'Página informativa enfocada en el almacenmamiento y centrelizacion de fotografias y revistas institucionales, con un diseño responsive y optimizada.',

      },
      technologies: ['HTML - CSS', 'Bootstrap', 'PHP',],
      images: [
        { src: '/proyectos/beca18/Beca181.png', alt: 'Dashboard de sistema de TI' },
        { src: '/proyectos/beca18/Beca182.png', alt: 'Gestión de inventario de TI' },
        { src: '/proyectos/beca18/Beca183.png', alt: 'Creación de informe técnico' },
        { src: '/proyectos/beca18/Beca184.png', alt: 'Reportes en PDF' },
      ],
      github: 'https://github.com/JesusLeonelCastro/Lading-Page_Beca18-UPT.git',
      demo: 'https://whitesmoke-goshawk-853733.hostingersite.com/'
    },
    {
      title: 'Sistema de gestion integrado - SAN JOSE',
      roles: {
        Administrador: 'Gráficos Estadísticos - Gestión Categorías - Gestión Platos - Gestión Mesas - Gestión Salsas - Historial Ventas - Reportes - Tickets Internos.',
        Empleado: 'Tomar pedido - Pedidos Activos - Tickets Internos.'
      },
      technologies: ['Vite', 'React', 'Node.js', 'Tailwind', 'Supabase'],
      images: [
        { src: '/proyectos/sja/san1.png', alt: 'Login de SAN JOSE' },
        { src: '/proyectos/sja/san9.png', alt: 'Dashboard de SAN JOSE' },
        { src: '/proyectos/sja/san10.png', alt: 'Gestión de platos' },
        { src: '/proyectos/sja/san2.png', alt: 'Toma de pedidos' },
        { src: '/proyectos/sja/san3.png', alt: 'Historial de ventas' },
        { src: '/proyectos/sja/san6.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/sja/san8.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/sja/san5.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/sja/san7.png', alt: 'Reportes del sistema' },
        { src: '/proyectos/sja/san14.png', alt: 'Reportes del sistema' },

      ],

    },
    {
      title: 'Sistema de Escritorio - Parqueo de transportes pesados',
      roles: {
        Administrador: 'Gestion de Vehiculos - Gestion usuarios - Gestion de placas - Configuracion Garaje - Modulos de Ingreso Vehicular - Modulo de Salidas Vehicular- Modulo de Contador - Historial - Reportes PDF.',
        Empleado: 'Modulos de Ingreso Vehicular - Modulo de Salidas Vehicular- Modulo de Contador - Historial - Reportes PDF.'
      },
      technologies: ['Java', 'Apache NetBeans', 'MySQL', 'MariaDB'],
      images: [
        { src: '/proyectos/parqueo/1.png', alt: 'Inicio de sesión' },
        { src: '/proyectos/parqueo/2.png', alt: 'Dashboard Administrador' },
        { src: '/proyectos/parqueo/3.png', alt: 'Modulo de Ingresos' },
        { src: '/proyectos/parqueo/4.png', alt: 'Modulo de Contador' },
        { src: '/proyectos/parqueo/5.png', alt: 'Modulo de Salidas' },
        { src: '/proyectos/parqueo/6.png', alt: 'Modulo Historial' },
        { src: '/proyectos/parqueo/7.png', alt: 'Reportes de Salida Vehicular' },
        { src: '/proyectos/parqueo/8.png', alt: 'Gestion de Vehiculos' },
        { src: '/proyectos/parqueo/9.png', alt: 'Dashboard Empleado' },

      ],
      github: 'https://github.com/JesusLeonelCastro/ESTACIONAMIENTO_SAN_JOSE.git'
    },
  ];

  const subprojects = [
    {
      title: 'Gestion de Blogs',
      roles: {
        Administrador: 'Login JWT - Crear Usario - Editar Usario - Listar de todos los usuario - Lista de todos los articulos - Crear Articulo - Editar Articulo - Eliminar Articulo - Vista de articulos publicados.',
      },
      technologies: ['Angular', 'Express', 'Node.js', 'Tailwind', 'MopngoDB', 'Flowbite'],
      images: [
        { src: '/proyectos/blog/login.png', alt: 'Login de Blog' },
        { src: '/proyectos/blog/crearuser.png', alt: 'Dashboard de Blog Personal' },
        { src: '/proyectos/blog/listusers.png', alt: 'Gestión de artículos' },
        { src: '/proyectos/blog/crear.png', alt: 'Creación de artículos' },
        { src: '/proyectos/blog/listarticles.png', alt: 'Historial de artículos' },
        { src: '/proyectos/blog/myaticle.png', alt: 'Historial de artículos' },


      ],
      github: 'https://github.com/JesusLeonelCastro/Sistema-Blog-OpenIA-Cstr',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const subnextSlide = () => {
    setSubCurrentSlide((prev) => (prev === subprojects.length - 1 ? 0 : prev + 1));
  };

  const subprevSlide = () => {
    setSubCurrentSlide((prev) => (prev === 0 ? subprojects.length - 1 : prev - 1));
  };




  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors ${direction === 'left' ? '-left-4 md:-left-10' : '-right-4 md:-right-10'}`}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">03. Proyectos</span>
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <p className="text-gray-300 text-lg mb-12 max-w-3xl opacity-70 hover:opacity-100 transition-opacity " >
            En mi estadía en la universidad he desarrollado sistemas de automatización tanto personales como para pequeños negocios que querían automatizar sus procesos.
          </p>

          <div>
            {/* Carrusel principal */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  ref={trackRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <article className="group relative p-5 rounded-3xl border border-gray-800 bg-gray-900/40 hover:border-blue-400 transition flex flex-col md:flex-row gap-6 md:p-8">
                        <ProjectGallery images={project.images} projectTitle={project.title} />
                        <div className="basis-full md:basis-1/2 min-w-0 flex flex-col">
                          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-300 transition">
                            {project.title}
                          </h3>
                          <div className="space-y-3 mb-4 text-sm">
                            {Object.entries(project.roles).map(([role, desc]) => (
                              <p key={role} className="text-gray-400 leading-relaxed">
                                <span className="font-semibold text-blue-300">{role}</span> - {desc}
                              </p>
                            ))}
                          </div>
                          <p className="mb-4 font-semibold group-hover:text-blue-300 transition">Tecnologías</p>
                          <ul className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                            {project.technologies.map((tech) => (
                              <li key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded">
                                {tech}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto flex gap-4 text-sm">
                            <button onClick={() => handleGithubClick(project.github)} className="text-gray-400 hover:text-blue-400">GitHub</button>
                            <button onClick={() => handleDemoClick(project.demo)} className="text-gray-400 hover:text-blue-400">Demo</button>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas de este carrusel (fuera del overflow-hidden) */}
              <CustomArrow direction="left" onClick={prevSlide} />
              <CustomArrow direction="right" onClick={nextSlide} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold m-4">
              <span className="gradient-text">03.1 Sub-proyectos</span>
            </h3>

            {/* Carrusel de sub-proyectos */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  ref={subTrackRef}
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${subCurrentSlide * 100}%)` }}
                >
                  {subprojects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <article className="group relative p-5 rounded-3xl border border-gray-800 bg-gray-900/40 hover:border-blue-400 transition flex flex-col md:flex-row gap-6 md:p-8">
                        <ProjectGallery images={project.images} projectTitle={project.title} />
                        <div className="basis-full md:basis-1/2 min-w-0 flex flex-col">
                          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-300 transition">
                            {project.title}
                          </h3>
                          <div className="space-y-3 mb-4 text-sm">
                            {Object.entries(project.roles).map(([role, desc]) => (
                              <p key={role} className="text-gray-400 leading-relaxed">
                                <span className="font-semibold text-blue-300">{role}</span> - {desc}
                              </p>
                            ))}
                          </div>
                          <p className="mb-4 font-semibold group-hover:text-blue-300 transition">Tecnologías</p>
                          <ul className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                            {project.technologies.map((tech) => (
                              <li key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded">
                                {tech}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto flex gap-4 text-sm">
                            <button onClick={() => handleGithubClick(project.github)} className="text-gray-400 hover:text-blue-400">GitHub</button>
                            <button onClick={() => handleDemoClick(project.demo)} className="text-gray-400 hover:text-blue-400">Demo</button>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas de este carrusel */}
              <CustomArrow direction="left" onClick={subprevSlide} />
              <CustomArrow direction="right" onClick={subnextSlide} />
            </div>
          </div>



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              onClick={() => handleGithubClick('https://github.com/JesusLeonelCastro')}
              className=" rounded-full px-6 py-2  border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-mono text-sm tracking-wide transition"
            >
              GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;