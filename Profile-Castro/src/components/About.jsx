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
              Soy un desarrollador web y desktop semi senior que me gusta automatizar procesos y crear soluciones tecnológicas innovadoras.
              Mi experiencia se centra en el desarrollo backend con .NET y Java Netbeans, donde he trabajado
              en proyectos personales como en producción hasta aplicaciones web modernas.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Me gusta seguir las buenas prácticas de desarrollo, escribiendo código legible, mantenible y escalable. Siempre me gusta estar en constante aprendizaje para
              mantenerme actualizado con las últimas tecnologías y tendencias del sector.
            </p>
          </div>
          
          <h2 className='text-2xl font-bold text-blue-500 mt-8 mb-4'>Tecnologias</h2>
         
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-effect rounded-lg p-8 text-center ">
              <h2 className="text-2xl font-bold text-blue-500 mt-8 mb-4">FRONTEND</h2>
              <i class="devicon-html5-plain colored text-4xl m-2"></i>
              <i class="devicon-css3-plain colored text-4xl m-2"></i>
              <i class="devicon-javascript-plain colored text-4xl m-2"></i>
              <i class="devicon-bootstrap-plain colored text-4xl  m-2"></i>
              <i class="devicon-tailwindcss-plain colored text-4xl m-2"></i>
              <br />
              <i class="devicon-react-plain colored text-4xl m-2"></i>
              <i class="devicon-angularjs-plain colored text-4xl m-2"></i>

            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-500 mt-8 mb-4 text-center">BACKEND</h2>
              <i class="devicon-csharp-plain colored text-4xl m-2"></i>
              <i class="devicon-java-plain colored text-4xl m-2"></i>
              <i class="devicon-nodejs-plain-wordmark text-4xl m-2 text-green-400"></i>
              <i class="devicon-github-plain colored text-4xl m-2"></i>
              <i class="devicon-git-plain colored text-4xl m-2"></i>



              <br />




            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-500 mt-8 mb-4 text-center">DEVOPS</h2>
              <i class="devicon-azure-plain colored text-4xl m-2"></i>
              <i class="devicon-amazonwebservices-plain colored text-4xl m-2"></i>





            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-blue-500 mt-8 mb-4 text-center">BASE DE DATOS</h2>
              <i class="devicon-microsoftsqlserver-plain colored text-4xl m-2"></i>
              <i class="devicon-mysql-plain colored text-4xl m-2"></i>
              <i class="devicon-firebase-plain colored text-4xl m-2"></i>
              <i class="devicon-supabase-plain colored text-4xl m-2"></i>
            </div>
          </div>


        </motion.div>

      </div>
    </section>
  );
};

export default About;