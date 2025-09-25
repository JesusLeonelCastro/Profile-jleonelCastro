import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram, Mail, Facebook } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSocialClick = (url, platform) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: `🚧 ${platform} no disponible`,
        description: `El enlace a ${platform} se agregará pronto.`,
      });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      platform: 'GitHub',
      user: '@JesusLeonelCastro',
      url: 'https://github.com/JesusLeonelCastro',
      cta: 'Ver perfil',
    },
    {
      icon: Linkedin,
      platform: 'LinkedIn',
      user: 'Jesus Leonel CASTRO GUTIERREZ',
      url: 'https://www.linkedin.com/in/jesus-leonel-castro-gutierrez-400772221/',
      cta: 'Conectar',
    },
    {
      icon: Twitter,
      platform: 'Twitter / X',
      user: '@leonellcastro_',
      url: 'https://x.com/leonellcastro_/',
      cta: 'Seguir',
    },
    {
      icon: Instagram,
      platform: 'Instagram',
      user: '@leonell.castro',
      url: 'https://www.instagram.com/leonell.castro/',
      cta: 'Seguir',
    },
    {
      icon: Facebook,
      platform: 'Facebook',
      user: 'Jesus Leonel Cstr Gtrrz ',
      url: 'https://www.facebook.com/jesusleonel.castrogutierrez/',
      cta: 'Conectar',
    },
    {
      icon: Mail,
      platform: 'Email',
      user: 'jesusleonelcastro11@gmail.com',
      url: 'jesusleonelcastro11@gmail.com',
      cta: 'Enviar correo',
    },
    
    
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">04. Contacto</span>
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>
          
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Todas mis redes sociales est&aacute;n actualizadas y activas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="contact-card glass-effect rounded-lg p-6 text-left flex flex-col group hover:border-blue-500 transition-all duration-300 cursor-pointer"
                onClick={() => handleSocialClick(social.url, social.platform)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <social.icon size={28} className="text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{social.platform}</h3>
                </div>
                <p className="text-gray-400 truncate mb-auto">{social.user}</p>
                <div className="mt-4">
                  <span className="text-blue-400 font-medium ">
                    {social.cta} 
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm"
          >
            <p>&copy; 2025 Jesús Leonel Castro Gutierrez.</p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;