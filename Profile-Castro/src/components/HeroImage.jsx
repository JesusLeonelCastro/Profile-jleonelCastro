import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div 
      className='relative flex justify-center items-center'
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-yellow-600 rounded-3xl blur-2xl opacity-30"></div>
      <div className="relative w-[350px] h-[420px] md:w-[400px] md:h-[480px] rounded-3xl overflow-hidden glass-effect p-2">
        <img 
          class='w-full h-full object-cover rounded-2xl'
          alt='Foto de perfil de Jesús Leonel Castro'
         src="proyectos/profile.jpg" />
      </div>
    </motion.div>
    
  );
};

export default HeroImage;