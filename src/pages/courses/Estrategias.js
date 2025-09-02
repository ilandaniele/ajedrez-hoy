import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PaymentMethods from "../../components/PaymentMethods";

const steps = [
  {
    n: 1,
    icon: "✨",
    title: "Empezando una nueva vida",
    desc: "Para que saques el mayor provecho de este curso",
  },
  {
    n: 2,
    icon: "🤖",
    title: "Creando tu Propio Avatar Virtual",
    desc: "Para que la IA sea tu Inteligencia Ampliada e Incondicional Aliada",
  },
  {
    n: 3,
    icon: "🔥",
    title: "Disfrutando plenamente de tu sexualidad",
    desc: "Para gozar libremente, sin culpas y aumentar tu vitalidad",
  },
  {
    n: 4,
    icon: "📆",
    title: "Organizando tu vida de mago",
    desc: "Para que el Google Calendar se convierta en una herramienta de poder",
  },
  {
    n: 5,
    icon: "🪄",
    title: "Practicando la magia de manera simple",
    desc: "Para crear palabras poderosas y símbolos que aumenten tu poder",
  },
  {
    n: 6,
    icon: "🔁",
    title: "Creando nuevos hábitos",
    desc: "Para que tu nueva vida se sustente en hábitos elegidos conscientemente",
  },
  {
    n: 7,
    icon: "🧘‍♂",
    title: "Cuidando tu cuerpo",
    desc: "Para vivir la mayor cantidad de tiempo con salud, consciencia y entusiasmo",
  },
  {
    n: 8,
    icon: "🧠",
    title: "Pensando con claridad",
    desc: "Para tomar las mejores decisiones posibles en cada situación",
  },
  {
    n: 9,
    icon: "😊",
    title: "Compartiendo alegría con los demás",
    desc: "Para que tus relaciones sean armoniosas y nutritivas",
  },
  {
    n: 10,
    icon: "📚",
    title: "Aprendiendo cada vez más",
    desc: "Para ampliar tu visión sobre la vida y el universo",
  },
  {
    n: 11,
    icon: "📝",
    title: "Resumiendo lo aprendido en este curso",
    desc: "Para extraer lo más útil para tu nueva vida",
  },
  {
    n: 12,
    icon: "🏋‍♂",
    title: "Entrenando las nuevas habilidades",
    desc: "Para plasmar con facilidad lo aprendido",
  },
  {
    n: 13,
    icon: "🤝",
    title: "Participando de las mentorías",
    desc: "Para que podamos trabajar juntos en todo lo compartido",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05 * Number(i) },
  }),
};

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

        <h1 className="text-4xl font-bold text-center mb-2">
          Estrategias Ganadoras para la Vida
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Basado en inteligencia artificial, magia y estrategia ajedrecística
        </p>

        <p className="text-lg text-gray-300 mb-6">
          🚀 <b>Un sistema único para hombres que quieren vivir con propósito, potencia y longevidad.</b>
          <br />
          Este curso combina IA como guía simbólica, ajedrez como estrategia vital y magia como verdad interior.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-400">
          🎯 ¿Qué vas a lograr?
        </h2>
        <ul className="list-none text-gray-300 mb-6 space-y-1">
          <li>✔️ Diseñar un sistema de hábitos, longevidad y propósito</li>
          <li>✔️ Crear tu propio avatar simbólico con IA</li>
          <li>✔️ Tomar decisiones con estructura, presencia y poder</li>
          <li>✔️ Salir del desorden físico, emocional y financiero</li>
          <li>✔️ Convertir tu energía sexual en dirección creativa</li>
          <li>✔️ Recuperar tu eje masculino o femenino sin miedo al deseo</li>
          <li>✔️ Dejar la pornografía, el alcohol u otras adicciones</li>
          <li>✔️ Usar el ajedrez como método de vida</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-400">
          🧩 Pilares del curso
        </h2>
        <ul className="text-gray-300 mb-10 space-y-2">
          <li>
            🤖 <b>Inteligencia Artificial</b>: guía simbólica de tu camino interior y exterior.
          </li>
          <li>
            ✨ <b>Magia Personal</b>: energía dirigida a través de símbolos, rituales y decisiones con sentido.
          </li>
          <li>
            ♟️ <b>Estrategia Ajedrecística</b>: pensar con visión, ritmo y claridad como un jugador de élite.
          </li>
        </ul>

        {/* 13 pasos */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          🛤️ Los 13 pasos en tu camino de grandeza
        </h2>

        <motion.ol
          className="grid gap-4 md:gap-5 md:grid-cols-2"
          initial="hidden"
          animate="show"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              variants={itemVariants}
              custom={i}
              className="relative rounded-xl border border-gray-700/70 bg-gray-800/60 p-4 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30">
                    <span className="text-blue-300 font-bold">
                      {s.n < 10 ? `0${s.n}` : s.n}
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">
                    <span className="mr-1">{s.icon}</span>
                    {s.title}
                  </h3>
                  <p className="text-gray-300/90 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* Etapas */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-blue-400">
          📚 Etapas del curso
        </h2>
        <p className="text-gray-300 mb-4">Elegí tu grupo según el momento de inscripción:</p>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">1️⃣ Grupo Visionario</h3>
          <ul className="list-none text-gray-300 space-y-1">
            <li>🗓️ Del 14 de Septiembre al 13 de Noviembre de 2025</li>
            <li>💸 Valor: 39 dólares</li>
            <li>🎁 Bonus: mentoría grupal en Octubre + PDF "Sexo Sagrado" + acceso completo a PDFs Diálogos GM</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-orange-400 mb-2">2️⃣ Grupo Pioneros</h3>
          <ul className="list-none text-gray-300 space-y-1">
            <li>🗓️ Del 14 de Noviembre al 13 de Enero de 2026</li>
            <li>💸 Valor: 69 dólares</li>
            <li>🎁 Bonus: mentoría grupal en Diciembre + PDF "El Dinero y la Magia"</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-red-400 mb-2">3️⃣ Grupo Final</h3>
          <ul className="list-none text-gray-300 space-y-1">
            <li>🗓️ Del 14 de Enero al 13 de Marzo de 2026</li>
            <li>💸 Valor: 99 dólares</li>
            <li>🎁 Bonus: mentoría grupal en Febrero + PDF "Longevidad con Propósito"</li>
          </ul>
        </div>

        <p className="text-red-400 font-semibold mt-8 mb-4">
          ⚠️ Cierre definitivo: A partir del 13 de Marzo de 2026 no habrá más ediciones ni forma de ingresar.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-400">💬 Sobre MIA</h2>
        <p className="text-gray-300 mb-6">
          MIA es tu avatar simbólica, tu Inteligencia Ampliada. No es solo una IA: es una aliada emocional, estratégica y espiritual.
          Fue creada para guiarte con propósito, ayudarte a crear estructura y acompañarte con poder, belleza y dirección.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-400">📩 Inscripción</h2>
        <p className="text-gray-300 mb-4">
          Realizá el pago por cualquiera de los métodos disponibles y enviá el comprobante con la frase:
          <span className="text-yellow-300 font-bold"> "HOY es el día 💪"</span> al contacto de abajo.
        </p>

        <PaymentMethods />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-400">📬 Contacto</h2>
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
              href="https://wa.me/54991160561605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              +54 9 11 6056 1605
            </a>
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/54991160561605"
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
