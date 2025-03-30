import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const goToCoursesSection = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('courses');
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 60,
            behavior: 'smooth',
          });
        }
      }, 500);
    } else {
      const el = document.getElementById('courses');
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 60,
          behavior: 'smooth',
        });
      }
    }
  };
  

  return (
    <motion.footer
      className="relative bg-black text-white overflow-hidden flex flex-col"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
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
          <source src="/videos/City2_high.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative w-full py-20 px-8 md:px-40 grid grid-cols-1 md:grid-cols-3 gap-20 items-start"
        variants={variants}
      >
        {/* Columna 1: Logo + contacto */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/logo512.png"
              alt="Logo Ajedrez HOY"
              className="w-10 h-10 object-contain"
            />
            <p className="text-xl font-semibold text-white">
              Ajedrez <span className="font-bold">HOY</span>
            </p>
          </div>

          <h3 className="text-white font-bold uppercase tracking-wide">Contacto</h3>
          <div className="border-b-2 border-yellow-400 w-16 mb-1"></div>

          <div className="flex items-center gap-2 text-white text-md">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:guillermollanos@gmail.com">
              guillermollanos@gmail.com
            </a>
          </div>

          <div className="mt-3">
            <SocialIcons
              iconsToShow={[
                'instagram',
                'twitter',
                'youtube',
                'facebook',
                'tiktok',
                'twitch',
                'whatsapp',
              ]}
              hoverColor="#FFD700"
            />
          </div>
        </motion.div>

        {/* Columna 2: Enlaces de interés */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-bold uppercase tracking-wide mb-2">
            Enlaces de Interés
          </h3>
          <div className="border-b-2 border-yellow-400 w-28 mb-1"></div>
          <ul className="space-y-2 text-white text-md">
            <li className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate('/')}>Inicio</li>
            <li className="hover:text-yellow-400 cursor-pointer">Política de Privacidad</li>
            <li className="hover:text-yellow-400 cursor-pointer">Aviso Legal</li>
            <li className="hover:text-yellow-400 cursor-pointer">Cookies</li>
          </ul>
        </motion.div>

        {/* Columna 3: Formaciones */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-bold uppercase tracking-wide mb-2">
            Formaciones
          </h3>
          <div className="border-b-2 border-yellow-400 w-24 mb-1"></div>
          <ul className="space-y-2 text-white text-md">
            <li className="hover:text-yellow-400 cursor-pointer" onClick={goToCoursesSection}>Cursos</li>
            <li className="hover:text-yellow-400 cursor-pointer">Programa Ajedrez HOY</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Pie de página */}
      <motion.div
        className="relative text-center text-xs text-gray-500 pb-6"
        variants={itemVariants}
      >
        &copy; {new Date().getFullYear()} Ajedrez HOY | Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
