import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const formatDescription = (text) => {
    // Dividir por saltos de línea
    const lines = text.split("\n")

    // Procesar cada línea y agregar saltos de línea entre ellas
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ))
  }

  const cursos = [
    {
      id: "clases-personalizadas",
      titulo: "Clases Personalizadas de Ajedrez",
      descripcion: "Clases individuales adaptadas a todos los niveles y edades, impartidas por el <strong>Maestro Internacional y FIDE trainer Guillermo José Llanos</strong> y el destacado plantel de profesores de la Academia Ajedrez HOY.",
      ruta: "/courses/clases-personalizadas",
    },
    {
      id: "analisis-partidas",
      titulo: "Análisis de tus partidas",
      descripcion: "Es <strong>MUY IMPORTANTE ANALIZAR TUS PARTIDAS</strong>. Para hacerlo mejor la próxima vez. Trabajaremos:\n1) <strong>Teoría de las Aperturas</strong>.\n2) <strong>Finales teóricos</strong>.\n3) <strong>Mejorar tu juego</strong> en general",
      ruta: "/courses/analisis-partidas",
    },
    {
      id: "taller-calculo",
      titulo: "Taller de Cálculo de Ajedrez HOY",
      descripcion: "Sesiones intensivas diseñadas para mejorar la <strong>capacidad de cálculo</strong> y análisis en las partidas.",
      ruta: "/courses/taller-calculo",
    },
    {
      id: "curso-caf",
      titulo: "Curso de Ajedrez Formativo (CAF)",
      descripcion: "Programa estructurado en <strong>cuatro niveles</strong> y <strong>5 temas</strong> (finales, táctica, estrategia, historia y aperturas)",
      ruta: "/courses/curso-caf",
    },
    {
      id: "caf5-ahm",
      titulo: "CAF5_AHM+: Curso de Ajedrez Formativo Nivel 5",
      descripcion: "Aplicación del CAF en el programa de <strong>Alto Rendimiento</strong> de la FADA.\n<strong>Ajedrez HOY Método + (plus)</strong>\nAvances desde el 2015 a la fecha.",
      ruta: "/courses/caf5-ahm",
    },
    {
      id: "estrategias-vida",
      titulo: "Estrategias Ganadoras para la Vida",
      descripcion: "Programa de <strong>mejoramiento personal</strong> basado en el pensamiento del ajedrecista.",
      ruta: "/courses/estrategias-vida",
    },
  ];

  return (
    <motion.section id="courses" className="py-12 bg-gray-900" ref={ref} initial="hidden" animate={controls}>
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold text-center text-white mb-8">Cursos Disponibles</motion.h2>
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso) => (
            <motion.article
              key={curso.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                navigate(curso.ruta);
                window.scrollTo({ top: 0, behavior: "smooth" }); // Mueve hacia arriba al cambiar de página
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{curso.titulo}</h3>
              <p className="text-white mb-4">{formatDescription(curso.descripcion)}</p>
              <span className="text-blue-400 hover:underline">Más información</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Courses;
