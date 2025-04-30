import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

// Hook para detectar tamaño de pantalla
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const desktopImages = [
  '/images/bannerDesktop1.png',
  '/images/bannerDesktop2.png',
  '/images/bannerDesktop3.png'
];

const mobileImages = [
  '/images/bannerMobile1.png',
  '/images/bannerMobile2.png',
  '/images/bannerMobile3.png'
];

const Presentation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <section
      id="presentation"
      ref={ref}
      className="mt-16 relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`slide-${currentImage}`}
            className=""
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
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
