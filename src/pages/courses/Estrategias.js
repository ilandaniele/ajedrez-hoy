import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const Estrategias = () => {
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
          Estrategias Ganadoras para la Vida
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          🚀 <b>Impulsa tu crecimiento con este exclusivo PROGRAMA DE MEJORAMIENTO PERSONAL.</b>  
          Aprovechá esta oportunidad para desarrollarte, superarte y alcanzar tus metas con un 
          programa diseñado para potenciar tu crecimiento personal y profesional.  
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 ¿A quién está dirigido?
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>✅ A personas de todas las edades.</li>
          <li>✅ Hombres y mujeres de cualquier profesión.</li>
          <li>✅ A quienes buscan progreso y evolución en su vida.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🎯 ¿Qué obtendrás?
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>📚 Acceso a material de lectura en constante actualización.</li>
          <li>🔄 Todas las versiones disponibles para que avances a tu ritmo.</li>
          <li>💡 Respuestas personalizadas a tus consultas.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          💰 Costos y Planes
        </h2>
        <p className="text-gray-300 mb-6">
          <b>Valor de por vida:</b> <span className="text-green-400">$20 USD</span> o su equivalente en moneda local.  
          <br />
          <b>Fecha límite para inscripción:</b> <span className="text-red-400">30 de Mayo de 2025.</span>  
          <br />
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 ¿Cómo inscribirse?
        </h2>
        <p className="text-gray-300 mb-6">
          Para inscribirte, realiza el pago mediante los siguientes métodos y envía el comprobante con la frase:  
          <b className="text-yellow-300"> "HOY es el día 💪"</b>  
          al WhatsApp o correo electrónico indicados a continuación.  
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

export default Estrategias;
