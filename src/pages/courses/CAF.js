import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import levels from '../../data/courses/CAF_levels';
import Costs from "../../components/Costs";

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

  const plansCAF = [
    {
      title: "Por Tema",
      price: "$12.000",
      originalPrice: "$24.000",
      priceUSD: "USD 12",
      originalPriceUSD: "USD 24",
      description: "Accedé a un solo tema de cualquiera de los niveles.",
      features: ["Hasta 1 tema de cualquiera de los niveles"],
      buttonTitle: "Comprar Tema"
    },
    {
      title: "Por Nivel",
      price: "$15.000",
      originalPrice: "$30.000",
      priceUSD: "USD 15",
      originalPriceUSD: "USD 30",
      description: "Accedé a todos los temas de un nivel completo.",
      features: ["Hasta 1 nivel completo con todos sus temas"],
      buttonTitle: "Comprar Nivel"
    },
    {
      title: "Curso Completo",
      price: "$40.000",
      originalPrice: "$80.000",
      priceUSD: "USD 40",
      originalPriceUSD: "USD 80",
      description: "Accedé a los 4 niveles con todos sus temas y actualizaciones de por vida.",
      features: [
        "Todos los niveles con todos sus temas",
        "Clases y eventos online exclusivos durante el año",
        "Incluye futuras actualizaciones del CAF de por vida",
        "Acceso al grupo de Discord"
      ],
      highlight: true,
      buttonTitle: "Comprar Curso"
    }
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
          🗓 Duración y modalidad
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

        {/* Pricing Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400 flex items-center gap-2">
          💰 Costos y Planes
        </h2>

        <Costs plans={plansCAF} scrollToPayment={scrollToPayment} columns="sm:grid-cols-3" />

        <h2 ref={paymentRef} className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          🗓 Inscripción y Métodos de Pago
        </h2>
        <p className="text-gray-300 mb-6">
          Realizá el pago por cualquiera de estos métodos y enviá el comprobante por WhatsApp o email.
        </p>

        <PaymentMethods
          hotmartEnabled={true}
          hotmartLinks={[
            { title: "Nivel 1: Curso CAF", url: "https://app.hotmart.com/products/manage/5287408/hotlink" },
            { title: "Nivel 2: Curso CAF", url: "https://app.hotmart.com/products/manage/5287225/hotlink" },
            { title: "Nivel 3: Curso CAF", url: "https://app.hotmart.com/products/manage/5287288/hotlink" },
            { title: "Nivel 4: Curso CAF", url: "https://app.hotmart.com/products/manage/5287317/hotlink" },
            { title: "Curso Completo CAF", url: "https://app.hotmart.com/products/manage/5287361/hotlink" },
          ]}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Contacto para inscripción
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>📧 <b>Email:</b> <a href="mailto:guillermollanos@gmail.com" className="text-blue-400 hover:underline">guillermollanos@gmail.com</a></li>
          <li>📱 <b>WhatsApp:</b> <a href="https://wa.me/5491160561605" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+54 911 6056 1605</a></li>
        </ul>

        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/5491160561605"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold transition"
          >
            📩 Contactar por WhatsApp
          </a>
        </div>

        <p className="text-gray-300 italic mt-6">
          <b>Copyright © Guillermo Llanos, 2004.</b> 
          Prohibida la reproducción total o parcial por cualquier medio sin autorización del autor.
        </p>
      </div>
    </motion.section>
  );
};

export default CAF;
