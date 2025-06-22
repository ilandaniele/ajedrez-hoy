import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const Calculo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      className="bg-gray-900 text-white min-h-screen py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="container mx-auto max-w-4xl">
      <button 
            className="text-blue-400 hover:underline mb-8 block text-left ml-[-10px]"
            onClick={() => {
                navigate("/#courses"); // Navega a la página principal con el fragmento #courses

                setTimeout(() => {
                const section = document.getElementById("courses");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                }, 100); // Pequeño delay para asegurar que la navegación se haya completado
            }}
            >
            ← Volver a Cursos
        </button>

        <h1 className="text-4xl font-bold text-center mb-6">
          Taller de Cálculo de Ajedrez HOY
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Entrena tu cálculo y precisión en el juego con este taller intensivo. 
          Aprenderás a visualizar mejor, mejorar tu toma de decisiones y potenciar tu pensamiento ajedrecístico.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📢 ¿No tenés tiempo durante la semana?
        </h2>
        <p className="text-gray-300 mb-6">
          Esta es la solución: mejorá tu juego dedicando unas horas en tu tiempo libre.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🕒 Horarios Disponibles
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Viernes y Sábado:</b> 19:00 - 20:00 hs</li>
          <li><b>Domingos:</b> 18:00 - 19:00 hs</li>
        </ul>
        <p className="text-gray-300 mb-6">
          📢 Más cómodo imposible. <b>Aprovechá esta oportunidad</b>, ya que los cupos son <b>MUY LIMITADOS</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🔍 ¿Qué aprenderás en el taller?
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>👉 Cómo no perderte entre las variantes.</li>
          <li>👉 Técnicas para calcular combinaciones con precisión.</li>
          <li>👉 Claves para mejorar tu visión táctica y estratégica.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          👨‍🏫 A cargo del Maestro Internacional Guillermo Llanos
        </h2>
        <p className="text-gray-300 mb-6">
          ✔ Basta de colgadas.  
          ✔ Enloquecé a tus rivales con <b>TRUCOS TÁCTICOS</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          💰 Costo del curso
        </h2>
        <p className="text-gray-300 mb-6">
        💵 Valor por clase: <b>$10,000 (Argentina)</b> o{" "}
          <b>10 USD (Exterior)</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 ¿Cómo inscribirse?
        </h2>
        <p className="text-gray-300 mb-6">
          Para inscribirte, realiza el pago mediante los siguientes métodos y envía el comprobante al WhatsApp o correo electrónico indicados a continuación.  
        </p>

         {/* Agregar la nueva componente de métodos de pago */}
         <PaymentMethods />

         <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Contacto para inscripción
        </h2>
        <p className="text-gray-300 mb-6">
          Enviar el comprobante de pago a:  
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>📧 <b>Email:</b> <a href="mailto:guillermollanos@gmail.com" className="text-blue-400 hover:underline">guillermollanos@gmail.com</a></li>
          <li>📱 <b>WhatsApp:</b> <a href="https://wa.me/5491160561605" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+54 911 6056 1605</a></li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-green-400">
          📲 Reserva tu lugar y no te lo pierdas
        </h3>
        <p className="text-gray-300 mb-6">
          El taller comienza puntualmente, así que te recomiendo conectarte a tiempo.
        </p>

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
      </div>
    </motion.section>
  );
};

export default Calculo;
