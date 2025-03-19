import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods"; // Importa la nueva componente

const CAF5 = () => {
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
          CAF5_AHM+: Curso de Ajedrez Formativo Nivel 5
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Este curso es la aplicación del <b>Curso de Ajedrez Formativo</b> en
          el programa de <b>Alto Rendimiento</b> de la FADA. Basado en el método 
          <b> Ajedrez HOY Método +</b>, proporciona un enfoque estructurado para 
          el entrenamiento avanzado.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📖 ABC del Ajedrez: Fundamentos del curso
        </h2>
        <p className="text-gray-300 mb-6">
          En el nivel 5 del <b>Curso de Ajedrez Formativo</b>, nos enfocamos en 
          los principios esenciales del ajedrez competitivo con un enfoque práctico 
          y estructurado. Utilizamos el esquema <b>RMR</b> para evaluar posiciones y 
          tomar mejores decisiones en el tablero.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🔎 Esquema RMR: Evaluación de posiciones
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>R</b> – <b>Rey</b>: Seguridad del rey.</li>
          <li><b>M</b> – <b>Material</b>: Balance de piezas.</li>
          <li><b>R</b> – <b>Resto</b>: Evaluación posicional.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-400">
          📌 Factores clave en la evaluación posicional:
        </h3>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Tablero:</b> Control del espacio.</li>
          <li><b>Peones:</b> Estructura sólida.</li>
          <li><b>Piezas:</b> Ubicación óptima.</li>
          <li><b>Movilidad:</b> Gestión eficiente del tiempo.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 Conceptos estratégicos: DIA y DAR
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>DIA:</b> Desarrollo + Iniciativa + Ataque.</li>
          <li><b>DAR:</b> Desarrollo + Ataque + Resultado.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          ♟ Valoración del material
        </h2>
        <p className="text-gray-300 mb-6">
          Se estudia la valoración de cada pieza en el contexto del juego:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Dama (D):</b> 9.5 puntos.</li>
          <li><b>Torre (T):</b> 5 puntos.</li>
          <li><b>Alfil (A):</b> 3.5 puntos.</li>
          <li><b>Caballo (C):</b> 3.25 puntos.</li>
          <li><b>Peón (P):</b> 1 punto (1/9 del módulo).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🏆 Medición de ventajas y toma de decisiones
        </h2>
        <p className="text-gray-300 mb-6">
          Según el GM <b>Sergio Slipak</b>, la unidad de ventaja es <b>0.25 del módulo</b>. 
          Sin embargo, el ajedrez no se trata solo de números; la toma de decisiones 
          también implica cálculo, intuición y concepto.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📌 Reflexiones finales sobre el método
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>🔹 Lo más importante es que <b>lo más importante</b> sea siempre la prioridad.</li>
          <li>🔹 El <b>todo</b> es más que la suma de sus partes.</li>
          <li>🔹 A veces, la mejor jugada del módulo <b>no es la mejor decisión práctica</b>.</li>
          <li>🔹 La dificultad varía; pondera riesgos y acepta que los errores son parte del proceso.</li>
          <li>🔹 Basamos las decisiones en <b>Cálculo, Intuición y Concepto</b>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📅 Duración y modalidad del curso
        </h2>
        <p className="text-gray-300 mb-6">
          El curso tiene una duración de <b>3 meses</b>, con clases en vivo y 
          material exclusivo de estudio, además de una metodología de aprendizaje
          estructurada para el alto rendimiento.
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

export default CAF5;
