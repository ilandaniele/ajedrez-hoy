import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaLaptopFile } from "react-icons/fa6"; // Import correcto
import "tailwindcss/tailwind.css";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyUs = () => {
  const services = [
    {
      title: "Experiencia Comprobada",
      content:
        "Con más de 50 años de docencia en ajedrez, el Maestro Internacional Guillermo Llanos ha formado a miles de estudiantes de todas las edades y niveles. Su trayectoria es testimonio de dedicación y excelencia en la enseñanza.",
      Icon: () => (
        <img src="/icons/shield-check icon.svg" alt="Experiencia Comprobada" className="h-16 w-16 mb-4" />
      ),
    },
    {
      title: "Pioneros en Enseñanza Online",
      content:
        "Desde el año 2000, Ajedrez HOY ha sido líder en la enseñanza de ajedrez por internet, adaptándose a las necesidades de los alumnos y aprovechando la tecnología.",
      Icon: () => <FaLaptopFile className="h-16 w-16 mb-4" style={{ color: "rgb(100, 138, 255)" }} />
    },
    {
      title: "Programas Personalizados",
      content:
        "Cada estudiante recibe un diagnóstico inicial para identificar sus fortalezas y áreas de mejora, permitiendo diseñar un plan de trabajo a medida.",
      Icon: () => (
        <img src="/icons/library icon.svg" alt="Programas Personalizados" className="h-16 w-16 mb-4" />
      ),
    },
    {
      title: "Recursos Exclusivos",
      content:
        "Ofrecemos materiales de estudio propios, como el Curso de Ajedrez Formativo (CAF), diseñado para potenciar el desarrollo ajedrecístico.",
      Icon: () => (
        <img src="/icons/results icon.svg" alt="Recursos Exclusivos" className="h-16 w-16 mb-4" />
      ),
    },
    {
      title: "Resultados Tangibles",
      content:
        "Nuestros estudiantes han logrado mejoras significativas en su desempeño, reflejando la eficacia de nuestros métodos.",
      Icon: () => (
        <img src="/icons/star icon.svg" alt="Resultados Tangibles" className="h-16 w-16 mb-4" />
      ),
    },
    {
      title: "Compromiso y Acompañamiento",
      content:
        "Nos comprometemos con el progreso de cada alumno, brindando seguimiento continuo y estrategias adaptadas a sus necesidades.",
      Icon: () => <FaHandshake className="h-16 w-16 mb-4" style={{ color: "rgb(100, 138, 255)" }} />
    }
  ];

  return (
    <motion.section
      id="whyUs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="bg-black text-white py-16 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-8">
        ¿Por qué elegir <span className="text-blue-500">Ajedrez HOY</span>?
      </h2>

      <p className="text-center text-lg max-w-3xl mx-auto mb-4">
        Desde las primeras clases empezarás a <b>pensar diferente</b> sobre el ajedrez y la vida.
        Trabajaremos con un método <b>adaptado a tus necesidades</b>, que te permitirá <b>crear nuevos hábitos</b>.
      </p>
      <p className="text-center text-lg max-w-3xl mx-auto mb-4">
        Hemos desarrollado un sistema que <b>REALMENTE FUNCIONA</b>. Lo hemos comprobado por <b>más de 25 años</b>, con <b>miles de estudiantes</b> de todas las edades y niveles.
      </p>
      <p className="text-center text-lg max-w-3xl mx-auto mb-8">
        No sigas improvisando. Aprovechá <b className="text-yellow-200 font-bold">NUESTRA EXPERIENCIA</b>.
      </p>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group perspective"
          >
            <div className="relative w-full h-52 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              {/* Parte frontal */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-xl font-bold p-6 bg-gray-900 rounded-lg shadow-lg [backface-visibility:hidden]">
                <service.Icon />
                {service.title}
              </div>
              {/* Parte trasera */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-md bg-gray-800 p-6 rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {service.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyUs;
