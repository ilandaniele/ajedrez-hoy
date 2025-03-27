import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const ClasesPersonalizadas = () => {
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
          🎯 Beneficios de nuestras clases
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Enseñanza personalizada según tu nivel y objetivos.</li>
          <li>Análisis detallado de tus partidas.</li>
          <li>Acceso a material de estudio exclusivo.</li>
          <li>Mejora progresiva con seguimiento de desempeño.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          💰 Costos y Planes
        </h2>
        <table className="w-full border-collapse border border-gray-600 text-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 px-4 py-2">Plan</th>
              <th className="border border-gray-600 px-4 py-2">Clases</th>
              <th className="border border-gray-600 px-4 py-2">Precio</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border border-gray-600 px-4 py-2">Individual</td>
              <td className="border border-gray-600 px-4 py-2">1 clase</td>
              <td className="border border-gray-600 px-4 py-2">$40,000</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2">Básico</td>
              <td className="border border-gray-600 px-4 py-2">4 clases/mes</td>
              <td className="border border-gray-600 px-4 py-2">$140,000</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2">Intermedio</td>
              <td className="border border-gray-600 px-4 py-2">8 clases/mes</td>
              <td className="border border-gray-600 px-4 py-2">$300,000</td>
            </tr>
            <tr>
              <td className="border border-gray-600 px-4 py-2">Avanzado</td>
              <td className="border border-gray-600 px-4 py-2">12 clases/mes</td>
              <td className="border border-gray-600 px-4 py-2">$450,000</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 ¿Cómo Reservar una Clase?
        </h2>
        <p className="text-gray-300 mb-6">
          Para reservar tu clase, realiza el pago mediante los siguientes métodos y envía el comprobante al WhatsApp o correo electrónico indicados a continuación.  
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

export default ClasesPersonalizadas;
