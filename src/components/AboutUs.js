import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const AboutUs = () => {
  const images = [
    '/images/guillermo.jpg',
    '/images/guillermo-jugando.jpg',
    '/images/guillermo-trofeo.jpg',
    '/images/guillermo-alumnos.jpeg',
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="relative bg-black text-white py-16 min-h-screen flex items-center"
      id="aboutUs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6">
        
        {/* Carrusel de imágenes */}
        <motion.div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center" variants={sectionVariants}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-lg shadow-lg w-full max-w-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Guillermo José Llanos ${index + 1}`}
                  className="max-h-[500px] object-contain w-auto h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Información personal */}
        <motion.div className="w-full lg:w-1/2 lg:pl-10">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            Acerca de Guillermo José Llanos
          </motion.h2>

          <motion.p className="mb-4 text-lg text-gray-300" variants={textVariants}>
            Me llamo <strong>Guillermo José Llanos</strong> y me dedico profesionalmente al ajedrez. Dirijo mi academia, <strong>Ajedrez HOY</strong>, desde el año 2000.
          </motion.p>

          <motion.p className="mb-4 text-lg text-gray-300" variants={textVariants}>
            Tengo <strong>50 años de experiencia</strong> como profesor y entrenador de ajedrez, y soy pionero en la enseñanza por Internet desde hace más de <strong>25 años</strong>. 
          </motion.p>

          <motion.p className="mb-4 text-lg text-gray-300" variants={textVariants}>
            Comencé a dar clases a los <strong>13 años</strong> y en 2024 celebro medio siglo de docencia. He enseñado en colegios, clubes, federaciones y hasta en centros de rehabilitación y cárceles, adaptando mi enseñanza a todo tipo de alumnos.
          </motion.p>

          <motion.p className="mb-4 text-lg text-gray-300" variants={textVariants}>
            Sigo participando en torneos, ofreciendo cursos, escribiendo libros y estudiando. Mi pasión por el ajedrez sigue intacta.
          </motion.p>

          <motion.p className="mb-4 text-lg text-gray-300" variants={textVariants}>
            En el seminario <em>"El Universo del Ajedrez"</em>, cuando me preguntaron por mi mayor logro, respondí sin dudar: <strong>"Que me sigue gustando el ajedrez"</strong>.
          </motion.p>

          {/* Proyectos actuales */}
          <motion.div className="mt-8" variants={textVariants}>
            <h3 className="text-3xl font-semibold mb-4 text-white">Proyectos Actuales</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Expansión de ChessKid en Argentina:</strong> Colaborando con Ivette García Morales y su equipo para promover el ajedrez infantil en el país.
              </li>
              <li>
                <strong>Desarrollo y crecimiento de Ajedrez HOY:</strong> Continuando con la formación de estudiantes de todos los niveles y edades.
              </li>
              <li>
                <strong>Publicación de libros de ajedrez:</strong> Dejar un legado en formato de libros impresos y digitales con los conocimientos adquiridos.
              </li>
            </ul>
          </motion.div>

          {/* Logros destacados */}
          <motion.div className="mt-8" variants={textVariants}>
            <h3 className="text-3xl font-semibold mb-4 text-white">Logros Destacados</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Embajador de ChessKid en Argentina.</li>
              <li>Fundador y director de la Academia Internacional Ajedrez HOY.</li>
              <li>Reconocido entrenador y coach de ajedrez con alumnos en todo el mundo.</li>
              <li>Representante Argentino categoría Senior en el Mundial 2015 (Italia) y en el Mundial por equipos 2019 (Grecia).</li>
              <li>Organizador de múltiples torneos nacionales e internacionales.</li>
              <li>Autor del Curso de Ajedrez Formativo (CAF).</li>
              <li>Autor del libro del Semillero a la Maestría, del curso AIR Ataque Indio de Rey.</li>
              <li>Autor de diversos cursos y material educativo sobre ajedrez para todos los niveles.</li>
              <li>Profesor de Ajedrez del Colegio Nacional de Buenos Aires.</li>
              <li>Entrenador en el programa de alto rendimiento de la FADA.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
