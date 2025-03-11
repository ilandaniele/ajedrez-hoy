import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: '¿Qué servicios ofrece Ajedrez HOY?',
    answer: 'Ajedrez HOY, dirigida por el Maestro Internacional Guillermo José Llanos, ofrece clases personalizadas de ajedrez para todos los niveles y edades, cursos grupales como el Curso de Ajedrez Formativo (CAF) y talleres especializados en áreas como el cálculo y la estrategia.',
  },
  {
    question: '¿Quién es Guillermo José Llanos?',
    answer: 'Guillermo José Llanos es un Maestro Internacional y FIDE Trainer con más de 50 años de experiencia en la enseñanza y entrenamiento de ajedrez. Ha sido pionero en la enseñanza de ajedrez por Internet durante los últimos 20 años y dirige la academia Ajedrez HOY.',
  },
  {
    question: '¿Qué es el Curso de Ajedrez Formativo (CAF)?',
    answer: 'El CAF es un programa estructurado en niveles que abarca desde finales y táctica hasta estrategia e historia del ajedrez, diseñado para mejorar las habilidades de los estudiantes de manera progresiva.',
  },
  {
    question: '¿Cómo puedo inscribirme en las clases o cursos?',
    answer: 'Puedes inscribirte contactando directamente al Maestro Guillermo José Llanos a través de su correo electrónico guillermollanos@gmail.com o por WhatsApp al +54 911 6056 1605.',
  },
  {
    question: '¿Las clases son presenciales o en línea?',
    answer: 'Ajedrez HOY ofrece clases tanto presenciales como en línea, adaptándose a las necesidades y ubicaciones de los estudiantes.',
  },
  {
    question: '¿Cuál es el costo de las clases y cursos?',
    answer: 'El costo puede variar según el tipo de clase o curso. Se recomienda contactar directamente a Guillermo José Llanos para obtener información actualizada sobre precios y modalidades de pago.',
  },
  {
    question: '¿Ajedrez HOY organiza torneos o eventos?',
    answer: 'Sí, Ajedrez HOY organiza y participa en diversos torneos y eventos relacionados con el ajedrez. Puedes obtener más información visitando el blog oficial de la academia.',
  },
  {
    question: '¿Ofrecen material de estudio adicional?',
    answer: 'Sí, además de las clases, Ajedrez HOY proporciona material de estudio complementario, incluyendo libros y recursos en línea para apoyar el aprendizaje de los estudiantes.',
  },
];

const FAQs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  return (
    <motion.section
      id="faqs"
      className="relative py-20 bg-black"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-white"
          variants={variants}
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.div className="backdrop-blur-md bg-white/15 rounded-lg p-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQs;
