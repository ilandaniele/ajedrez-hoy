import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CAF = () => {
  const navigate = useNavigate();
  const [openLevel, setOpenLevel] = useState(null);
  const [openTopics, setOpenTopics] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
          content: `Finales con peones.\nCoronación.\nProcedimientos tácticos, estratégicos y técnicos.\nClasificación de los finales.\nCómo razonar en el final?.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 2: Táctica",
          content: `Debilidades reales, potenciales, vinculadas y especiales.\nCombinaciones para ganar la partida.\nIntroducción al cálculo de variantes.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 3: Estrategia",
          content: `Seguridad del Rey.\nAtaque contra el Rey en el centro.\nAtaque contra el Rey enrocado.\nEnroques opuestos.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 4: Historia",
          content: `Philidor.\nSíntesis biográfica.\nAnálisis del juego de ajedrez.\nAportes a los finales.\n"Los peones son el alma del ajedrez".\nConceptos revolucionarios.`,
        },
        {
          title: "Tema 5: Planteo",
          content: `Estudio de aperturas.\nClásico e hipermoderno.\nVentaja, compensación y repertorio.\nEjemplos y ejercitación.`,
        },
      ],
    },
    {
      title: "Nivel 2",
      topics: [
        {
          title: "Tema 1: Finales",
          content: `Finales con peones.\nCoronación.\nProcedimientos tácticos, estratégicos y técnicos.\nClasificación de los finales.\nCómo razonar en el final?.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 2: Táctica",
          content: `Debilidades reales, potenciales, vinculadas y especiales.\nCombinaciones para ganar la partida.\nIntroducción al cálculo de variantes.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 3: Estrategia",
          content: `Seguridad del Rey.\nAtaque contra el Rey en el centro.\nAtaque contra el Rey enrocado.\nEnroques opuestos.\nEjemplos y ejercitación.`,
        },
        {
          title: "Tema 4: Historia",
          content: `Philidor.\nSíntesis biográfica.\nAnálisis del juego de ajedrez.\nAportes a los finales.\n"Los peones son el alma del ajedrez".\nConceptos revolucionarios.`,
        },
        {
          title: "Tema 5: Planteo",
          content: `Estudio de aperturas.\nClásico e hipermoderno.\nVentaja, compensación y repertorio.\nEjemplos y ejercitación.`,
        },
      ],
    },
    {
      title: "Nivel 3",
      topics: [],
    },
    {
      title: "Nivel 4",
      topics: [],
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
          El <b>Curso de Ajedrez Formativo (CAF)</b> está dividido en{" "}
          <b>cuatro niveles</b> de <b>cinco temas</b> cada uno, diseñado para desarrollar habilidades ajedrecísticas progresivamente. 
          Este curso forma parte de la <b>Carrera Universitaria de Ajedrecista</b>, creada por <b>Guillermo José Llanos</b>.
        </p>

        {levels.map((level, levelIndex) => (
          <div key={levelIndex} className="mb-10 border rounded-lg overflow-hidden shadow-md bg-[#1e2533]">
            <button
              className="w-full text-left px-6 py-4 bg-[#2e3b55] text-white font-bold text-xl flex justify-between items-center"
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
                              className="bg-gray-700 px-6 py-4 text-gray-200 relative"
                            >
                              <pre className="whitespace-pre-wrap">{topic.content}</pre>
                              <div className="flex justify-end mt-4 items-center gap-2">
                                <a
                                  href="/comprar"
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition"
                                >
                                  Comprar
                                </a>
                                <span className="text-red-400 text-sm font-bold">30% OFF</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))
                  )}

                  {level.topics.length > 0 && (
                    <div className="flex justify-end mt-4 items-center gap-2">
                      <a
                        href="/comprar"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition"
                      >
                        Comprar Nivel Entero
                      </a>
                      <span className="text-red-400 text-sm font-bold">30% OFF</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="flex justify-center mt-10 items-center gap-3">
          <a
            href="/comprar"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition"
          >
            Comprar Curso Entero
          </a>
          <span className="text-red-400 font-bold text-sm">40% OFF</span>
        </div>

        {/* Secciones finales */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          🏆 Técnicas Ajedrecísticas Aplicadas
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Coordinación de piezas.</li>
          <li>Centralización.</li>
          <li>Pieza de apoyo.</li>
          <li>Posición de resistencia.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📖 Metodología de enseñanza
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Procedimiento unificado y repetitivo.</li>
          <li>Uso de figuras geométricas para mejorar la memorización.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 Duración y modalidad
        </h2>
        <p className="text-gray-300 mb-6">
          Cada nivel tiene una duración de <b>8 semanas</b> con clases interactivas (por ZOOM y presenciales) y práctica personalizada (+ ejercicios).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 Inscripción y Métodos de Pago
        </h2>
        <p className="text-gray-300 mb-6">
          Realizá el pago por cualquiera de estos métodos y enviá el comprobante por WhatsApp o email.
        </p>

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
