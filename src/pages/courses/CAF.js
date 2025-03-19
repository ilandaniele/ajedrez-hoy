import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const CAF = () => {
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
          Curso de Ajedrez Formativo (CAF)
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          El <b>Curso de Ajedrez Formativo (CAF)</b> es un programa estructurado 
          en <b>cuatro niveles</b>, diseñado para desarrollar habilidades ajedrecísticas 
          de manera progresiva y efectiva. Este curso forma parte de la <b>Carrera 
          Universitaria de Ajedrecista</b>, creada y desarrollada por 
          <b> Guillermo José Llanos</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 Estructura del curso
        </h2>
        <p className="text-gray-300 mb-6">
          El programa del CAF está dividido en **cuatro niveles** y abarca una amplia variedad 
          de finales y conceptos estratégicos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          ♟ Nivel 1: Fundamentos de Finales
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Mates básicos.</li>
          <li>Mate del Alfil y Caballo.</li>
          <li>Torre contra Alfil.</li>
          <li>Torre contra Caballo.</li>
          <li>Torre y Alfil contra Torre.</li>
          <li>Torre y Caballo contra Torre.</li>
        </ul>
        <p className="text-gray-300 mb-6">
          <b>Nota:</b> Los jugadores de **primera categoría** deben estudiar los mates básicos 
          siguiendo un sistema propio, que servirá de base para finales más complejos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          ♟ Nivel 2: Finales con Peones
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Coronación.</li>
          <li>Procedimientos tácticos, estratégicos y técnicos.</li>
          <li>Clasificación de los finales.</li>
          <li>Cómo razonar en el final.</li>
          <li>Ejemplos y ejercitación práctica.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          ♟ Nivel 3: Finales de Peones Avanzados
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Rey y Peón contra Rey.</li>
          <li>Rey y Peón contra Rey y Peón.</li>
          <li>Finales con más de un Peón por bando.</li>
          <li>Temas típicos de los finales de Peones.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          ♟ Nivel 4: Finales de Damas
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Dama contra Peón.</li>
          <li>Dama contra Torre (y Peón).</li>
          <li>Dama contra Dama (y Peones).</li>
          <li>Dama contra otras piezas.</li>
          <li>Temas típicos de los finales de Damas.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
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
          Cada nivel del CAF tiene una duración de <b>8 semanas</b>, con clases interactivas 
          y ejercicios prácticos diseñados para reforzar cada concepto.
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
