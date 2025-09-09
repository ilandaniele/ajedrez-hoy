import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";

const AjedrezPsicologia = () => {
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
        {/* Volver */}
        <button
          className="text-blue-400 hover:underline mb-8 block text-left ml-[-10px]"
          onClick={() => {
            navigate("/#courses");
            setTimeout(() => {
              const section = document.getElementById("courses");
              if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }}
        >
          ← Volver a Cursos
        </button>

        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-center mb-2">
          Curso de Psicología Aplicada al Ajedrez
        </h1>
        <p className="text-center text-gray-300 mb-8">
          <span className="block">
            <strong>AJEDREZ Y PSICOLOGÍA – Versión 1 (Agosto 2025)</strong>
          </span>
          <span className="block">
            Profesor: <strong>Lic. Santiago Mellano</strong> (Psicólogo, docente de ajedrez) — integrante del equipo <strong>Ajedrez HOY</strong>.
          </span>
        </p>

        {/* BLOQUE DE PRECIO (promo 50% OFF) */}
        <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-white/10 bg-gray-800/60 p-6 shadow-lg">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-gray-400 line-through text-xl">ARS 80.000</span>
              <span className="rounded-full bg-green-500/15 text-green-400 text-xs font-semibold px-3 py-1 border border-green-500/30">
                50% OFF
              </span>
            </div>

            <div>
              <div className="text-4xl font-extrabold tracking-tight">
                ARS <span className="tabular-nums">40.000</span>
              </div>
              <div className="text-sm text-gray-300 mt-1">
                ó <span className="font-semibold">USD 40</span> (curso completo)
              </div>
            </div>

            {/* mini-leyenda opcional */}
            <div className="text-xs text-gray-400 mt-2">
              Precio final promocional. Cupos limitados.
            </div>
          </div>
        </div>

        {/* Descripción breve */}
        <p className="text-lg text-gray-300 mb-6">
          Un programa diseñado para que compitas mejor desde la mente: cómo regular la{" "}
          <b>ansiedad</b>, sostener la <b>concentración</b>, decidir bajo <b>apuro de tiempo</b>,
          y construir una <b>mentalidad ganadora</b>. Vas a incorporar técnicas prácticas,
          rutinas pre-competitivas y herramientas de autoconocimiento que impactan directamente en tu juego.
        </p>

        {/* Objetivos */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">🎯 Objetivos del curso</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Dar la <b>mejor versión</b> de uno mismo.</li>
          <li>Competir en <b>salud</b>.</li>
          <li>Profundizar en el <b>autoconocimiento</b> y descubrir la <b>motivación</b>.</li>
          <li>Aprender <b>técnicas y rutinas</b> para la competencia.</li>
          <li>Gestionar la <b>ansiedad</b> y el <b>estrés</b> que produce competir.</li>
          <li>Optimizar la <b>atención</b> y la <b>concentración</b>.</li>
          <li>Manejo adecuado del <b>reloj</b> y del <b>apuro de tiempo</b>.</li>
          <li>Alcanzar el estado de <b>Flow</b> (soltura y creatividad).</li>
          <li>Crecer en <b>consistencia</b> y <b>resiliencia</b>.</li>
          <li>Conocer a los <b>oponentes</b> y aprovechar sus <b>debilidades</b>.</li>
        </ul>

        {/* Temario */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">📚 Temario (cada tema con 4 niveles de profundidad)</h2>
        <ol className="list-decimal list-inside text-gray-300 mb-6">
          <li><b>Psicología deportiva</b>: herramienta decisiva para competir en ajedrez.</li>
          <li><b>La ansiedad</b> al competir en el ajedrez.</li>
          <li><b>Cómo manejar la ansiedad</b> (técnicas y recursos) y <b>optimizar la concentración</b>.</li>
          <li><b>Apuro de tiempo</b> y <b>manejo del reloj</b>.</li>
          <li><b>Mentalidad ganadora</b>: mente de campeón.</li>
        </ol>

        {/* Estructura / logística */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">🧩 Estructura y logística</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Formato CAF</b>: progresión por <b>niveles 1 a 4</b> en cada tema.</li>
          <li><b>Materiales</b>: fichas de trabajo, ejercicios y pautas de entrenamiento mental.</li>
          <li><b>Modalidad</b>: grupal (consultar por fechas/horarios vigentes).</li>
          <li><b>Cupo limitado</b>: se confirma con el pago.</li>
          <li>
            <b>Valor</b>: <span className="line-through text-gray-400">ARS 80.000</span>{" "}
            <span className="text-green-400 font-semibold">ARS 40.000</span>{" "}
            / <span className="font-semibold">USD 40</span> —{" "}
            <span className="text-green-400 font-semibold">50% OFF</span>.
          </li>
        </ul>

        {/* Medios de pago */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">💳 Medios de pago</h2>
        <p className="text-gray-300 mb-4">
          Realizá el pago por cualquiera de los siguientes métodos y <b>enviá el comprobante</b> para confirmar tu inscripción.
        </p>
        <PaymentMethods />

        {/* Contacto */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">📩 Confirmación e informes</h2>
        <p className="text-gray-300 mb-6">
          Enviá el comprobante indicando “Curso Psicología Ajedrez” a:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>
            📧 <b>Email:</b>{" "}
            <a href="mailto:guillermollanos@gmail.com" className="text-blue-400 hover:underline">
              guillermollanos@gmail.com
            </a>
          </li>
          <li>
            📱 <b>WhatsApp:</b>{" "}
            <a
              href="https://wa.me/5491160561605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              +54 911 6056 1605
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/5491160561605"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold transition"
          >
            ✅ Quiero inscribirme por WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default AjedrezPsicologia;
