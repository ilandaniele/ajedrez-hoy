import React from "react";
import { motion } from "framer-motion";
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
      title: "🎓 Experiencia Comprobada",
      content:
        "Con más de 50 años de docencia en ajedrez, el Maestro Internacional Guillermo Llanos ha formado a miles de estudiantes de todas las edades y niveles. Su trayectoria es testimonio de dedicación y excelencia en la enseñanza."
    },
    {
      title: "🌐 Pioneros en Enseñanza Online",
      content:
        "Desde el año 2000, Ajedrez HOY ha sido líder en la enseñanza de ajedrez por internet, adaptándose a las necesidades de los alumnos y aprovechando la tecnología."
    },
    {
      title: "🛠️ Programas Personalizados",
      content:
        "Cada estudiante recibe un diagnóstico inicial para identificar sus fortalezas y áreas de mejora, permitiendo diseñar un plan de trabajo a medida."
    },
    {
      title: "📚 Recursos Exclusivos",
      content:
        "Ofrecemos materiales de estudio propios, como el Curso de Ajedrez Formativo (CAF), diseñado para potenciar el desarrollo ajedrecístico."
    },
    {
      title: "🏆 Resultados Tangibles",
      content:
        "Nuestros estudiantes han logrado mejoras significativas en su desempeño, reflejando la eficacia de nuestros métodos."
    },
    {
      title: "🤝 Compromiso y Acompañamiento",
      content:
        "Nos comprometemos con el progreso de cada alumno, brindando seguimiento continuo y estrategias adaptadas a sus necesidades."
    }
  ];

  return (
    <motion.section
      id="whyUs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="bg-black text-white py-20 px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-12">
        ¿Por qué elegir <span className="text-blue-500">Ajedrez HOY</span>?
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-16">
        Desde las primeras clases empezarás a <b>pensar diferente</b> sobre el ajedrez y la vida. 
        Con una <b>nueva perspectiva</b>, desarrollarás tu potencial al máximo dentro y fuera del tablero.  
        Trabajaremos con un método <b>adaptado a tus necesidades</b> y basado en la <b>toma de consciencia</b> y la <b>creación de hábitos</b>.  
        <br /><br />
        Combinamos <b>estudio y entrenamiento</b> en un ritmo adecuado para cada alumno. Nuestro sistema, probado por <b>más de 25 años</b> y con miles de estudiantes de todas las edades, ha demostrado que <b>REALMENTE FUNCIONA</b>.  
        <br /><br />
        No sigas improvisando. Aprovechá <b>NUESTRA EXPERIENCIA</b>.
      </p>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group perspective"
          >
            <div className="relative w-full h-56 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex items-center justify-center text-center text-2xl font-bold p-8 bg-gray-900 rounded-lg shadow-lg [backface-visibility:hidden]">
                {service.title}
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-lg bg-gray-800 p-8 rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
