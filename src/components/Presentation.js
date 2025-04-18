import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg'
];

const Presentation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentImage, setCurrentImage] = useState(0);

  // Carrusel automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, transition: { duration: 1.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="presentation"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`slide-${currentImage}`}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
        {/* Capa oscura para legibilidad */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-20 text-white flex-grow flex flex-col justify-center items-start px-4 md:px-20 py-12">
        <motion.div
          className="max-w-xl text-left"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <p className="text-2xl md:text-4xl mb-8 font-semibold">Academia de Ajedrez</p>

          <a
            href="https://wa.me/5491160561605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-lg md:text-xl bg-green-500 px-5 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Envíanos un mensaje
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
