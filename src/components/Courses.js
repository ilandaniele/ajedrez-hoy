import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Courses = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cursos = [
    {
      titulo: 'Clases Personalizadas de Ajedrez',
      descripcion: 'Clases individuales adaptadas a todos los niveles y edades, impartidas por el Maestro Internacional Guillermo José Llanos.',
      enlace: 'https://ajedrezhoyflow.com/',
    },
    {
      titulo: 'Curso de Ajedrez Formativo (CAF)',
      descripcion: 'Programa estructurado en niveles que abarca desde finales y táctica hasta estrategia e historia del ajedrez.',
      enlace: 'https://ajedrezhoyflow.com/',
    },
    {
      titulo: 'Taller de Cálculo de Ajedrez',
      descripcion: 'Sesiones intensivas diseñadas para mejorar la capacidad de cálculo y análisis en las partidas.',
      enlace: 'https://academiaajedrezhoy.blogspot.com/2025/03/entrena-calculo-durante-el-finde.html',
    },
    {
      titulo: 'Entrenamiento de Cálculo de Ajedrez',
      descripcion: 'Talleres enfocados en técnicas para calcular combinaciones con precisión y mejorar la visión táctica y estratégica.',
      enlace: 'https://academiaajedrezhoy.blogspot.com/2025/03/entrenamiento-de-calculo-de-ajedrez-hoy.html',
    },
    {
      titulo: 'CAF5_AHM+: Curso de Ajedrez Formativo Nivel 5',
      descripcion: 'Curso avanzado que introduce el Ajedrez HOY Método Plus, abarcando desde el desarrollo y dinámica hasta la iniciativa y ataque.',
      enlace: 'https://academiaajedrezhoy.blogspot.com/2025/03/caf5ahm-profesor-guillermo-llanos.html',
    },
  ];

  return (
    <motion.section
      id="courses"
      className="py-12 bg-gray-900"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          variants={itemVariants}
        >
          Cursos Disponibles
        </motion.h2>
        <motion.p
          className="text-center text-white mb-8"
          variants={itemVariants}
        >
          Mejora tus habilidades en ajedrez con los cursos y talleres ofrecidos por el Maestro Internacional Guillermo José Llanos.
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {cursos.map((curso, index) => (
            <motion.article
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {curso.titulo}
              </h3>
              <p className="text-white mb-4">
                {curso.descripcion}
              </p>
              <a
                href={curso.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Más información
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Courses;
