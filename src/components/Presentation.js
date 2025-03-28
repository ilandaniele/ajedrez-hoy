import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

const Presentation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="presentation"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-gray-600 !important"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src={`${process.env.PUBLIC_URL}/videos/City1_high.mp4`} // Ruta del video de fondo
            type="video/mp4"
          />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      
      {/* Superposición para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido */}
      <div className="relative z-10 text-white flex-grow flex flex-col justify-center items-start px-6 md:px-20">
        <motion.div
          className="container mx-auto text-left"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {/* Logo aún más grande */}
          <img
            src={`${process.env.PUBLIC_URL}/images/logoCompleto.png`}
            alt="Ajedrez HOY Logo"
            className="w-[600px] md:w-[700px] mb-6" // Tamaño aumentado
          />

          <p className="text-2xl md:text-4xl mb-8">Academia de Ajedrez</p>

          <a
            href="https://wa.me/5491160561605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-xl bg-green-500 px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Envíanos un mensaje
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Presentation;
