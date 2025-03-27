const levels = [
    {
      title: "Nivel 1",
      topics: [
        {
          title: "Tema 1: Finales",
          content: `Contenido:
Esta clase está compuesta por seis temas:
1. Mates básicos
2. Mate del Alfil y Caballo
3. Torre contra Alfil
4. Torre contra Caballo
5. Torre y Alfil contra Torre
6. Torre y Caballo contra Torre

🔧 Técnicas Ajedrecísticas:
- Coordinación de piezas
- Centralización
- Pieza de apoyo
- Posición de resistencia

📘 Metodología:
- Procedimiento unificado y repetitivo
- Figuras geométricas
          `,
        },
        {
          title: "Tema 2: Estrategia",
          content: `Contenido:
1. Introducción:
  A. Sistema de DEBILIDADES tácticas en orden jerárquico.
  B. Procedimiento técnico.

2. Ejemplos.
3. Concepto de "activación".
4. Conclusión.
5. Ejercicios.
          `,
        },
        {
          title: "Tema 3: Táctica",
          content: `Contenido:
1. Introducción: debilidades tácticas, cálculo, posiciones exactas, progreso.
2. Evolución histórica: Philidor, Morphy, Steinitz hasta hoy.
3. Técnica del análisis: entender la posición, elementos clave, jugada crítica.
4. Ejercicios prácticos.
5. Conclusión.
          `,
        },
        {
          title: "Tema 4: Historia - El legado de los clásicos",
          content: `Contenido:
1. Introducción: desarrollo de la humanidad vs el ajedrecista.
2. Ruy López, Leonardo, Greco, Lucena. Escuelas Hispánica e Italiana.
3. Pensamiento primitivo del principiante. Errores típicos.
4. Análisis de partidas clásicas y de principiantes.
5. Conclusión.
          `,
        },
        {
          title: "Tema 5: Planteo",
          content: `Contenido:
1. ¿Qué debemos saber para comprender las aperturas?
2. Estructura del tablero: casillas, columnas, filas, diagonales.
3. Estudio de las piezas: movilidad y estadística.
4. Problemas de la posición inicial.
5. Objetivos del juego: mate, ventaja, iniciativa.
6. Objetivos de la apertura: desarrollo, centro, comunicación de torres.
7. Ejercicios.
8. Conclusión.
          `,
        },
      ],
    },
    {
      title: "Nivel 2",
      topics: [
        {
          title: "Tema 1: Finales",
          content: `Contenido:
1. Finales con peones.
2. Coronación.
3. Procedimientos tácticos, estratégicos y técnicos.
4. Clasificación de los finales.
5. ¿Cómo razonar en el final?
6. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 2: Táctica",
          content: `Contenido:
1. Debilidades reales, potenciales, vinculadas y especiales.
2. Combinaciones para ganar la partida.
3. Introducción al cálculo de variantes.
4. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 3: Estrategia",
          content: `Contenido:
1. Seguridad del Rey.
2. Ataque contra el Rey en el centro.
3. Ataque contra el Rey enrocado.
4. Enroques opuestos.
5. Ejemplos y ejercitación.
          `,
        },
        {
          title: "Tema 4: Historia - El legado de los clásicos",
          content: `Contenido:
1. Philidor: considerado el mejor de todos los tiempos.
2. Síntesis biográfica.
3. Su obra: Análisis del juego de ajedrez.
4. Aportes a la teoría de los finales.
5. "Los peones son el alma del ajedrez".
6. Conceptos revolucionarios.
          `,
        },
        {
          title: "Tema 5: Planteo",
          content: `Contenido:
1. Introducción al estudio de aperturas.
2. Planteo clásico e hipermoderno.
3. Equilibrio, ventaja y compensación.
4. Formación del repertorio de aperturas.
5. Ejemplos y ejercitación.
          `,
        },
      ],
    },
    {
      title: "Nivel 3",
      topics: [
        {
          title: "Tema 1: Finales de Peones",
          content: `Contenido:
1. Rey y Peón contra Rey
2. Rey y Peón contra Rey y Peón
3. Finales con más de un Peón por bando
4. Temas típicos de los finales de Peones
          `,
        },
        {
          title: "Tema 2: Táctica General",
          content: `Contenido:
1. Momento crítico
2. Posiciones de carácter táctico
3. Sistema de las debilidades aplicado
4. Cálculo de variantes
          `,
        },
        {
          title: "Tema 3: Estrategia (Análisis de Posiciones)",
          content: `Contenido:
Segundo elemento: material

1. Método de análisis
2. Estrategia general
3. Momento crítico
4. Estudio del material
          `,
        },
        {
          title: "Tema 4: Historia - Pablo Morphy",
          content: `Contenido:
1. Síntesis biográfica
2. Sus partidas más destacadas
3. Su legado ajedrecístico
4. Aportes a la teoría de las aperturas
          `,
        },
        {
          title: "Tema 5: Planteo (Aperturas con blancas)",
          content: `Contenido:
1. Pautas generales
2. Opciones del blanco
3. Formación del repertorio de aperturas
4. Sistema propuesto
          `,
        },
      ],
    },
    {
      title: "Nivel 4",
      topics: [
        {
          title: "Tema 1: Finales de Damas",
          content: `Contenido:
1. Dama contra Peón
2. Dama contra Torre (y Peón)
3. Dama contra Dama (y Peones)
4. Dama contra otras piezas
5. Temas típicos de los finales de Damas
          `,
        },
        {
          title: "Tema 2: Táctica Aplicada",
          content: `Contenido:
1. Importancia de la táctica
2. Método de trabajo:
  A) Debilidades
  B) Visión mental del tablero
  C) Figuras de mate y ganadoras
  D) Orden del cálculo
  E) Otros temas relevantes
          `,
        },
        {
          title: "Tema 3: Estrategia (Análisis de Posiciones)",
          content: `Contenido:
Tercer elemento: debilidades tácticas

1. Método de análisis
2. Estrategia general
3. Momento crítico
4. Estudio de debilidades
          `,
        },
        {
          title: "Tema 4: Historia - Steinitz",
          content: `Contenido:
1. Síntesis biográfica
2. Partidas destacadas
3. Aportes a la teoría ajedrecística
4. Aportes a la teoría de aperturas
          `,
        },
        {
          title: "Tema 5: Planteo (Aperturas con blancas)",
          content: `Contenido:
1. Otras opciones del blanco
2. Aplicación del sistema propuesto
3. Selección del material de estudio
4. Uso de bases de datos y bibliografía
          `,
        },
      ],
    },
];

export default levels;