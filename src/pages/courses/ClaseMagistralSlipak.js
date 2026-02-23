import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";

const ClaseMagistralSlipak = () => {
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

        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-2">
          Clases Magistrales del GM Sergio Slipak (Grupales)
        </h1>
        <p className="text-center text-gray-300 mb-8">
          <span className="block">Sábado <b>20 de septiembre</b> — <b>12:15</b> a <b>13:45</b> (90 minutos)</span>
          <span className="block">Tema: <b>Análisis en ajedrez, cálculo, intuición y conceptos</b></span>
        </p>

        {/* BLOQUE DE PRECIO */}
        <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-white/10 bg-gray-800/60 p-6 shadow-lg">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="text-4xl font-extrabold tracking-tight">
              ARS <span className="tabular-nums">13.000</span>
            </div>
            <div className="text-sm text-gray-300">
              ó <span className="font-semibold">USD 13</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Precio final. Cupos limitados.
            </div>
          </div>
        </div>

        {/* Descripción breve */}
        <p className="text-lg text-gray-300 mb-6">
          Una sesión intensiva para fortalecer tu proceso de pensamiento durante la partida:
          cómo <b>calcular con precisión</b>, cuándo confiar en la <b>intuición</b> y cómo articular
          ambos con <b>conceptos posicionales</b> claros. Ideal para jugadores de clubes,
          federados y entrenadores que desean un marco práctico y moderno.
        </p>

        {/* Sobre el ponente */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🧑‍🏫 Sobre Sergio Slipak
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Gran Maestro Internacional de Ajedrez</b> (título FIDE).</li>
          <li><b>FIDE Senior Trainer</b> (uno de los pocos en Argentina).</li>
          <li>Amplia trayectoria como jugador, capitán y entrenador de equipos campeones.</li>
          <li>Décadas formando talentos y referentes del ajedrez argentino y latinoamericano.</li>
        </ul>

        {/* Lo que te vas a llevar */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🎯 Lo que te vas a llevar
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Un método claro para <b>ordenar el cálculo</b> y reducir errores no forzados.</li>
          <li>Claves para usar la <b>intuición</b> sin perder rigor.</li>
          <li><b>Patrones y conceptos</b> para evaluar posiciones críticas.</li>
          <li>Ejercicios tipo para seguir entrenando después de la clase.</li>
        </ul>

        {/* Agenda */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🗂️ Agenda resumida (90’)
        </h2>
        <ol className="list-decimal list-inside text-gray-300 mb-6">
          <li>Marco de trabajo: cálculo, intuición y conceptos (cuándo y cómo).</li>
          <li>Ejemplos prácticos guiados por el GM.</li>
          <li>Ejercicios interactivos con participación del grupo.</li>
          <li>Conclusiones y recomendaciones de entrenamiento.</li>
        </ol>

        {/* Logística */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          🧩 Logística e inscripción
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><b>Modalidad:</b> Grupal.</li>
          <li><b>Fecha y hora:</b> Sábado 20 de septiembre — 12:15 a 13:45.</li>
          <li><b>Duración:</b> 90 minutos.</li>
          <li><b>Cupo limitado:</b> se reserva lugar con el pago.</li>
        </ul>

        {/* Medios de pago */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          💳 Medios de pago
        </h2>
        <p className="text-gray-300 mb-4">
          Realizá el pago por cualquiera de los siguientes métodos y <b>enviá el comprobante</b> para confirmar tu lugar.
        </p>
        <PaymentMethods />

        {/* Confirmación / contacto */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">
          📩 Confirmación de inscripción
        </h2>
        <p className="text-gray-300 mb-6">
          Enviá el comprobante de pago indicando “Clase Magistral Slipak” a:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>
            📧 <b>Email:</b>{" "}
            <a
              href="mailto:guillermollanos@gmail.com"
              className="text-blue-400 hover:underline"
            >
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
          ✅ Reservar mi lugar por WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ClaseMagistralSlipak;
