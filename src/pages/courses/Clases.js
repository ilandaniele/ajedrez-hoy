import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";
import { FaWhatsapp } from 'react-icons/fa';
import ContactButton from "../../components/ContactButton";
import Costs from "../../components/Costs";


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
      priceUSD: "USD 20",
      originalPriceUSD: "USD 40",
      description: "Solicitá una sesión para conocer cómo se adaptan las clases a vos.",
      features: ["El valor se descuenta de tu primera clase", "30 minutos"],
      buttonTitle: "Solicitar Sesión"
    },
    {
      title: "Individual",
      price: "$50.000",
      originalPrice: "$100.000",
      priceUSD: "USD 50",
      originalPriceUSD: "USD 100",
      description: "Ideal para una clase puntual o de prueba.",
      features: ["1 hora de clase"],
      buttonTitle: "Solicitar Clase"
    },
    {
      title: "Básico",
      price: "$160.000",
      originalPrice: "$200.000",
      priceUSD: "USD 160",
      originalPriceUSD: "USD 200",
      description: "Perfecto para mantener una práctica mensual constante.",
      features: ["4 horas de clase por mes"],
      buttonTitle: "Solicitar Clases"
    },
    {
      title: "Intermedio",
      price: "$300.000",
      originalPrice: "$400.000",
      priceUSD: "USD 300",
      originalPriceUSD: "USD 400",
      description: "Para estudiantes comprometidos con el progreso.",
      features: ["8 horas de clase por mes"],
      highlight: true,
      buttonTitle: "Solicitar Clases"
    },
    {
      title: "Avanzado",
      price: "$420.000",
      originalPrice: "$600.000",
      priceUSD: "USD 420",
      originalPriceUSD: "USD 600",
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

        <Costs plans={plans} scrollToPayment={scrollToPayment} />

        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-2">¿Necesitás más clases?</h3>
          <p className="text-gray-300 mb-4">
            No te preocupes, tenemos planes personalizados por si necesitás más horas de clase.
          </p>
          <ContactButton label="Contactanos si es tu caso" />
        </div>

        <h2 ref={paymentRef} className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          🗓 ¿Cómo Reservar una Clase?
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
