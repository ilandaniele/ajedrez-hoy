import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";
import { FaWhatsapp } from 'react-icons/fa';

const ClasesPersonalizadas = () => {
  const navigate = useNavigate();
  const paymentRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToPayment = () => {
    if (paymentRef.current) {
      paymentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      title: "Asesoramiento",
      price: "$20.000",
      originalPrice: "$40.000",
      description: "Solicitá una sesión para conocer cómo se adaptan las clases a vos.",
      features: ["El valor se descuenta de tu primera clase", "30 minutos"],
      buttonTitle: "Solicitar Sesión"
    },
    {
      title: "Individual",
      price: "$50.000",
      originalPrice: "$100.000",
      description: "Ideal para una clase puntual o de prueba.",
      features: ["1 hora de clase"],
      buttonTitle: "Solicitar Clase"
    },
    {
      title: "Básico",
      price: "$160.000",
      originalPrice: "$200.000",
      description: "Perfecto para mantener una práctica mensual constante.",
      features: ["4 horas de clase por mes"],
      buttonTitle: "Solicitar Clases"
    },
    {
      title: "Intermedio",
      price: "$300.000",
      originalPrice: "$400.000",
      description: "Para estudiantes comprometidos con el progreso.",
      features: ["8 horas de clase por mes"],
      highlight: true,
      buttonTitle: "Solicitar Clases"
    },
    {
      title: "Avanzado",
      price: "$420.000",
      originalPrice: "$600.000",
      description: "Entrenamiento intensivo con seguimiento personalizado.",
      features: ["12 horas de clase por mes"],
      buttonTitle: "Solicitar Clases"
    },
  ];

  return (
    <motion.section 
      className="bg-gray-900 text-white min-h-screen py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="container mx-auto max-w-6xl">
        <button 
          className="text-blue-400 hover:underline mb-8 block text-left ml-[-10px]"
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
          Clases Personalizadas de Ajedrez Online
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Aprende ajedrez con clases personalizadas impartidas por el 
          <b> Maestro Internacional y FIDE Trainer Guillermo José Llanos</b> y 
          un equipo de instructores de élite. Diseñadas para todos los niveles y edades.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 ¿Cómo funcionan las clases?
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Modalidad:</b> Clases individuales o grupales en línea</li>
          <li><b>Plataforma:</b> Zoom</li>
          <li><b>Duración:</b> a combinar con él/los estudiantes</li>
          <li><b>Horarios:</b> Flexibles y adaptados a tu disponibilidad</li>
          <li><b>Contenido:</b> Clases prácticas, predominando Aperturas, táctica, estrategia y finales</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🌟 Beneficios de nuestras clases
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Enseñanza personalizada según tu nivel y objetivos.</li>
          <li>Análisis detallado de tus partidas.</li>
          <li>Acceso a material de estudio exclusivo.</li>
          <li>Mejora progresiva con seguimiento de desempeño.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400 flex items-center gap-2">
          💰 Costos y Planes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-lg p-6 text-center shadow-md cursor-pointer transition-all flex flex-col justify-between min-h-[420px] ${
                plan.highlight
                  ? "bg-blue-950 border-2 border-blue-500 hover:bg-blue-900"
                  : "bg-[#1e2533] hover:bg-[#2d3645]"
              }`}
              key={idx}
            >
              {plan.highlight && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  ⭐ Recomendado
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{plan.title}</h3>
                <p className="text-white text-lg mb-1">
                  <span className="line-through decoration-red-500 decoration-2">{plan.originalPrice}</span>
                </p>
                <p className="text-green-400 text-xl font-semibold">{plan.price}</p>
                <p className="text-xs text-gray-400 mb-2">pesos argentinos</p>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="flex-grow"></div>
                <div className="border-t border-gray-600 my-4"></div>
                <ul className="text-center text-sm text-gray-300 space-y-2 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="border-b border-gray-700 pb-2">{feat}</li>
                  ))}
                </ul>
              </div>
              <div>
                <button
                  onClick={scrollToPayment}
                  className={`px-4 py-2 rounded-md font-semibold w-full transition-colors duration-200 ${
                    plan.highlight
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {plan.buttonTitle}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-2">¿Necesitás más clases?</h3>
          <p className="text-gray-300 mb-4">
            No te preocupes, tenemos planes personalizados por si necesitás más horas de clase.
          </p>
          <button
            onClick={() => {
              navigate("/#contact");
              setTimeout(() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 100);
            }}
            className="mt-2 border border-gray-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Contactanos si es tu caso
          </button>
        </div>

        <h2 ref={paymentRef} className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          📅 ¿Cómo Reservar una Clase?
        </h2>
        <p className="text-gray-300 mb-6">
          Para reservar tu clase, realiza el pago mediante los siguientes métodos y envía el comprobante al WhatsApp o correo electrónico indicados a continuación.  
        </p>

        <PaymentMethods />

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Contacto para inscripción
        </h2>
        <p className="text-gray-300 mb-6">
          Enviar el comprobante de pago a:  
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>📧 <b>Email:</b> <a href="mailto:guillermollanos@gmail.com" className="text-blue-400 hover:underline">guillermollanos@gmail.com</a></li>
          <li>📞 <b>Teléfono:</b> <a href="https://wa.me/5491160561605" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+54 911 6056 1605</a></li>
        </ul>

        <div className="mt-6">
          <a
            href="https://wa.me/5491160561605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-xl bg-green-500 px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Contactar por Whatsapp
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ClasesPersonalizadas;
