import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CAF = () => {
  const navigate = useNavigate();
  const [openLevel, setOpenLevel] = useState(null);
  const [openTopics, setOpenTopics] = useState({});
  const paymentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToPayment = () => {
    if (paymentRef.current) {
      paymentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLevel = (index) => {
    setOpenLevel(openLevel === index ? null : index);
  };

  const toggleTopic = (levelIndex, topicIndex) => {
    setOpenTopics((prev) => ({
      ...prev,
      [levelIndex]: prev[levelIndex] === topicIndex ? null : topicIndex,
    }));
  };

  const levels = [
    {
      title: "Nivel 1",
      topics: [
        {
          title: "Tema 1: Finales",
          content: `Contenido:
Esta clase está compuesta por seis temas:
1. Mates básicos
2. Mate del Alfil y Caballo
3. Torre contra Alfil
4. Torre contra Caballo
5. Torre y Alfil contra Torre
6. Torre y Caballo contra Torre

🔧 Técnicas Ajedrecísticas:
- Coordinación de piezas
- Centralización
- Pieza de apoyo
- Posición de resistencia

📘 Metodología:
- Procedimiento unificado y repetitivo
- Figuras geométricas
          `,
        },
        {
          title: "Tema 2: Estrategia",
          content: `Contenido:
1. Introducción:
  A. Sistema de DEBILIDADES tácticas en orden jerárquico.
  B. Procedimiento técnico.

2. Ejemplos.
3. Concepto de "activación".
4. Conclusión.
5. Ejercicios.
          `,
        },
        {
          title: "Tema 3: Táctica",
          content: `Contenido:
1. Introducción: debilidades tácticas, cálculo, posiciones exactas, progreso.
2. Evolución histórica: Philidor, Morphy, Steinitz hasta hoy.
3. Técnica del análisis: entender la posición, elementos clave, jugada crítica.
4. Ejercicios prácticos.
5. Conclusión.
          `,
        },
        {
          title: "Tema 4: Historia - El legado de los clásicos",
          content: `Contenido:
1. Introducción: desarrollo de la humanidad vs el ajedrecista.
2. Ruy López, Leonardo, Greco, Lucena. Escuelas Hispánica e Italiana.
3. Pensamiento primitivo del principiante. Errores típicos.
4. Análisis de partidas clásicas y de principiantes.
5. Conclusión.
          `,
        },
        {
          title: "Tema 5: Planteo",
          content: `Contenido:
1. ¿Qué debemos saber para comprender las aperturas?
2. Estructura del tablero: casillas, columnas, filas, diagonales.
3. Estudio de las piezas: movilidad y estadística.
4. Problemas de la posición inicial.
5. Objetivos del juego: mate, ventaja, iniciativa.
6. Objetivos de la apertura: desarrollo, centro, comunicación de torres.
7. Ejercicios.
8. Conclusión.
          `,
        },
      ],
    },
    {
      title: "Nivel 2",
      topics: [
        {
          title: "Tema 1: Finales",
          content: `Contenido:
1. Finales con peones.
2. Coronación.
3. Procedimientos tácticos, estratégicos y técnicos.
4. Clasificación de los finales.
5. ¿Cómo razonar en el final?
6. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 2: Táctica",
          content: `Contenido:
1. Debilidades reales, potenciales, vinculadas y especiales.
2. Combinaciones para ganar la partida.
3. Introducción al cálculo de variantes.
4. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 3: Estrategia",
          content: `Contenido:
1. Seguridad del Rey.
2. Ataque contra el Rey en el centro.
3. Ataque contra el Rey enrocado.
4. Enroques opuestos.
5. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 4: Historia - El legado de los clásicos",
          content: `Contenido:
1. Philidor: considerado el mejor de todos los tiempos.
2. Síntesis biográfica.
3. Su obra: Análisis del juego de ajedrez.
4. Aportes a la teoría de los finales.
5. "Los peones son el alma del ajedrez".
6. Conceptos revolucionarios.
          `,
        },
        {
          title: "Tema 5: Planteo",
          content: `Contenido:
1. Introducción al estudio de aperturas.
2. Planteo clásico e hipermoderno.
3. Equilibrio, ventaja y compensación.
4. Formación del repertorio de aperturas.
5. Ejemplos y ejercitación.
          `,
        },
      ],
    },
    {
      title: "Nivel 3",
      topics: [
        {
          title: "Tema 1: Finales de Peones",
          content: `Contenido:
1. Rey y Peón contra Rey
2. Rey y Peón contra Rey y Peón
3. Finales con más de un Peón por bando
4. Temas típicos de los finales de Peones
          `,
        },
        {
          title: "Tema 2: Táctica General",
          content: `Contenido:
1. Momento crítico
2. Posiciones de carácter táctico
3. Sistema de las debilidades aplicado
4. Cálculo de variantes
          `,
        },
        {
          title: "Tema 3: Estrategia (Análisis de Posiciones)",
          content: `Contenido:
Segundo elemento: material

1. Método de análisis
2. Estrategia general
3. Momento crítico
4. Estudio del material
          `,
        },
        {
          title: "Tema 4: Historia - Pablo Morphy",
          content: `Contenido:
1. Síntesis biográfica
2. Sus partidas más destacadas
3. Su legado ajedrecístico
4. Aportes a la teoría de las aperturas
          `,
        },
        {
          title: "Tema 5: Planteo (Aperturas con blancas)",
          content: `Contenido:
1. Pautas generales
2. Opciones del blanco
3. Formación del repertorio de aperturas
4. Sistema propuesto
          `,
        },
      ],
    },
    {
      title: "Nivel 4",
      topics: [
        {
          title: "Tema 1: Finales de Damas",
          content: `Contenido:
1. Dama contra Peón
2. Dama contra Torre (y Peón)
3. Dama contra Dama (y Peones)
4. Dama contra otras piezas
5. Temas típicos de los finales de Damas
          `,
        },
        {
          title: "Tema 2: Táctica Aplicada",
          content: `Contenido:
1. Importancia de la táctica
2. Método de trabajo:
  A) Debilidades
  B) Visión mental del tablero
  C) Figuras de mate y ganadoras
  D) Orden del cálculo
  E) Otros temas relevantes
          `,
        },
        {
          title: "Tema 3: Estrategia (Análisis de Posiciones)",
          content: `Contenido:
Tercer elemento: debilidades tácticas

1. Método de análisis
2. Estrategia general
3. Momento crítico
4. Estudio de debilidades
          `,
        },
        {
          title: "Tema 4: Historia - Steinitz",
          content: `Contenido:
1. Síntesis biográfica
2. Partidas destacadas
3. Aportes a la teoría ajedrecística
4. Aportes a la teoría de aperturas
          `,
        },
        {
          title: "Tema 5: Planteo (Aperturas con blancas)",
          content: `Contenido:
1. Otras opciones del blanco
2. Aplicación del sistema propuesto
3. Selección del material de estudio
4. Uso de bases de datos y bibliografía
          `,
        },
      ],
    },
  ];


  return (
    <motion.section
      className="bg-gray-900 text-white min-h-screen py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="container mx-auto max-w-4xl">
        <button
          className="text-blue-400 hover:underline mb-8 block text-left"
          onClick={() => {
            navigate("/#courses");
            setTimeout(() => {
              const section = document.getElementById("courses");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          }}
        >
          ← Volver a Cursos
        </button>

        <h1 className="text-4xl font-bold text-center mb-6">
          Curso de Ajedrez Formativo (CAF)
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          El <b>Curso de Ajedrez Formativo (CAF)</b> está dividido en <b>cuatro niveles</b> de <b>cinco temas</b> cada uno, diseñado para desarrollar habilidades ajedrecísticas progresivamente. 
          Este curso forma parte de la <b>Carrera Universitaria de Ajedrecista</b>, creada por <b>Guillermo José Llanos</b>.
        </p>

        {levels.map((level, levelIndex) => (
          <div key={levelIndex} className="mb-10 border rounded-lg overflow-hidden shadow-md bg-[#1e2533]">
            <button
              className="w-full text-left px-6 py-4 bg-[#2d3645] text-white font-bold text-xl flex justify-between items-center"
              onClick={() => toggleLevel(levelIndex)}
            >
              {level.title}
              {openLevel === levelIndex ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence>
              {openLevel === levelIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-4 space-y-4 bg-[#111827]"
                >
                  {level.topics.length === 0 ? (
                    <p className="text-gray-400">Contenido en construcción.</p>
                  ) : (
                    level.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="border rounded-md overflow-hidden">
                        <button
                          className="w-full text-left px-4 py-3 bg-gray-800 flex justify-between items-center text-lg font-semibold"
                          onClick={() => toggleTopic(levelIndex, topicIndex)}
                        >
                          {topic.title}
                          {openTopics[levelIndex] === topicIndex ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        <AnimatePresence>
                          {openTopics[levelIndex] === topicIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-gray-700 px-6 py-4 text-gray-200"
                            >
                              <pre className="whitespace-pre-wrap">{topic.content}</pre>
                              <div className="flex justify-end mt-4 items-center gap-2">
                                <button
                                  onClick={scrollToPayment}
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition"
                                >
                                  Comprar Tema para todos los Niveles
                                </button>
                                <span className="text-red-400 text-sm font-bold">50% OFF</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))
                  )}

                  {level.topics.length > 0 && (
                    <div className="flex justify-end mt-4 items-center gap-2">
                      <button
                        onClick={scrollToPayment}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition"
                      >
                        Comprar Nivel
                      </button>
                      <span className="text-red-400 text-sm font-bold">50% OFF</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2 mt-10">
          <div className="flex items-center gap-2">
            <button
              onClick={scrollToPayment}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition"
            >
              Comprar Curso
            </button>
            <span className="text-red-400 font-bold text-sm">50% OFF</span>
          </div>
          <p className="text-gray-300 text-center text-sm mt-2">
            Al adquirir el curso completo tendrás acceso a <b>clases y eventos online exclusivos</b> durante el año, 
            además de recibir <b>todas las futuras actualizaciones</b> del CAF <b>de por vida</b>.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 Duración y modalidad
        </h2>
        <p className="text-gray-300 mb-6">
          Cada nivel tiene una duración de <b>8 semanas</b>.
          <br />
          Los contenidos del curso se entregan en <b>formato PGN y PDF</b> para que puedas estudiar a tu ritmo y desde cualquier dispositivo.
        </p>


        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📁 Comunidad
        </h2>
        <p className="text-gray-300 mb-6">
          Con la compra del curso tendrás acceso a un <b>Grupo privado en Discord</b> para realizar consultas, compartir avances y formar parte de la comunidad de estudiantes del CAF.
        </p>


        <h2 ref={paymentRef} className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          📅 Inscripción y Métodos de Pago
        </h2>
        <p className="text-gray-300 mb-6">
          Realizá el pago por cualquiera de estos métodos y enviá el comprobante por WhatsApp o email.
        </p>


        <div className="bg-gray-800 p-4 rounded-lg mb-6 text-gray-200">
          <h3 className="text-lg font-semibold mb-2">💰 Precios</h3>
          <ul className="list-disc list-inside text-base">
            <li>
              <b>Curso completo:</b>{" "}
              <span className="line-through text-red-400 mr-1">$80</span>
              <span className="text-green-400 font-bold">$40 USD</span> 
              <span className="text-red-400 ml-2 font-bold">(50% OFF por lanzamiento)</span>
            </li>
            <li>
              <b>Por nivel:</b>{" "}
              <span className="line-through text-red-400 mr-1">$30</span>
              <span className="text-green-400 font-bold">$15 USD</span> 
              <span className="text-red-400 ml-2 font-bold">(50% OFF por lanzamiento)</span>
            </li>
            <li>
              <b>Por tema (para cualquier nivel):</b>{" "}
              <span className="line-through text-red-400 mr-1">$24</span>
              <span className="text-green-400 font-bold">$12 USD</span> 
              <span className="text-red-400 ml-2 font-bold">(50% OFF por lanzamiento)</span>
            </li>
          </ul>
        </div>


        <PaymentMethods />

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Contacto para inscripción
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>📧 <b>Email:</b> <a href="mailto:guillermollanos@gmail.com" className="text-blue-400 hover:underline">guillermollanos@gmail.com</a></li>
          <li>📱 <b>WhatsApp:</b> <a href="https://wa.me/5491160561605" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+54 911 6056 1605</a></li>
        </ul>
      </div>
    </motion.section>
  );
};

export default CAF;
