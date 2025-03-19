import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const Analisis = () => {
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
          Análisis de tus Partidas
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          El análisis de tus partidas es fundamental para identificar errores y
          áreas de mejora. Este servicio te ofrece una revisión detallada de
          tus partidas para potenciar tu rendimiento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 ¿Por qué es importante analizar tus partidas?
        </h2>
        <p className="text-gray-300 mb-6">
          Es <b>MUY IMPORTANTE ANALIZAR TUS PARTIDAS</b> para detectar errores, mejorar tu desempeño y evitar repetir fallos en futuras competiciones. 
          Aprenderás a evaluar tu juego y aplicar correcciones precisas.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📖 ¿Qué aspectos trabajaremos?
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>
            <b>Teoría de las Aperturas:</b> Aprenderás la mejor jugada en 
            <b> una posición concreta</b>, la repasaremos y memorizaremos 
            para aplicarla con precisión en futuras partidas.
          </li>
          <li>
            <b>Finales teóricos:</b> Si en la partida no conociste la técnica correcta, 
            <b> debes aprenderlo</b> para dominarlo y jugarlo correctamente en el futuro.
          </li>
          <li>
            <b>Mejorar tu juego:</b> A través del estudio de posiciones específicas 
            y entrenamiento, mejorarás distintos aspectos clave del ajedrez.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🔎 Algunos puntos clave que trabajaremos
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>⚡ Mejorar cálculo y táctica.</li>
          <li>📈 Desarrollo de la estrategia y técnica.</li>
          <li>📚 Adquirir conocimientos generales sobre ajedrez.</li>
          <li>🏆 Adquirir experiencia en la competencia.</li>
          <li>🧠 Aprender a gestionar emociones durante el juego.</li>
          <li>⏳ Mejorar la gestión del tiempo en el reloj.</li>
          <li>📊 Planificación de preparación para torneos.</li>
          <li>🔍 Descubrir y mejorar tus fortalezas y debilidades.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          💰 Costo del servicio
        </h2>
        <p className="text-gray-300 mb-6">
          El costo por análisis de partida es de <b>$10,000 (Argentina)</b> o{" "}
          <b>10 USD (Exterior)</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🛠 Creación de un programa de trabajo
        </h2>
        <p className="text-gray-300 mb-6">
          Todos estos aspectos se mejoran mediante un programa de trabajo 
          <b> flexible</b>, el cual se ajustará a tus necesidades y a la evolución de tu juego 
          en futuras partidas y torneos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 ¿Cómo solicitar el análisis?
        </h2>
        <p className="text-gray-300 mb-6">
          Para inscribirte, realiza el pago mediante los siguientes métodos y envía el comprobante de pago junto a tu partida en formato PGN al WhatsApp o correo electrónico indicados a continuación. Recibirás el análisis detallado en un
          plazo de 48 horas.
        </p>

        <PaymentMethods />

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Contacto para el análisis
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

export default Analisis;
