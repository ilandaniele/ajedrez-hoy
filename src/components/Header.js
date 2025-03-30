import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', sectionId: 'presentation' },
    { name: '¿Por qué elegirnos?', sectionId: 'whyUs' },
    { name: 'Cursos', sectionId: 'courses' },
    { name: 'Acerca de', route: '/acerca-de' },
    { name: 'Preguntas Frecuentes', sectionId: 'faqs' },
    { name: 'Blog', link: 'http://ajedrezhoy.blog' }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = 60; // Ajuste de altura para que el header no tape el contenido
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false); // Cierra el menú después de hacer clic en un elemento
  };

  const handleNavigation = (item) => {
    if (item.link) {
      window.open(item.link, '_blank');
    } else if (item.route) {
      navigate(item.route);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.sectionId), 300);
      } else {
        scrollToSection(item.sectionId);
      }
    }
  };
  

  // Animación para los elementos del menú
  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menú hamburguesa */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleNavigation({ sectionId: 'presentation' })}
          >
            <div className="h-16 w-auto overflow-hidden">
              <img
                src={require('../assets/logo.png')}
                alt="Logo AjedrezHOY"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Navegación */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white md:bg-transparent md:bg-opacity-0 md:static md:flex md:items-center md:justify-center md:space-x-8"
            >
              <ul className="flex flex-col md:flex-row md:space-x-4 text-md md:text-lg">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="hover:text-yellow-400 cursor-pointer transition-colors duration-200 px-4 py-2 md:px-2 md:py-1"
                    onClick={() => handleNavigation(item)}
                    variants={menuVariants}
                    whileHover={{
                      scale: 1.08,
                      transition: { type: 'spring', stiffness: 300, damping: 15 }
                    }}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
