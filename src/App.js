import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

// Importamos las páginas individuales de cada curso
import Clases from "./pages/courses/Clases";
import Analisis from "./pages/courses/Analisis";
import Calculo from "./pages/courses/Calculo";
import CAF from "./pages/courses/CAF";
import CAF5 from "./pages/courses/CAF5";
import Estrategias from "./pages/courses/Estrategias";
import AboutPage from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <Presentation />
            <WhyUs />
            <Courses />
            <FAQs />
          </>
        } />

        {/* Rutas individuales de cada curso */}
        <Route path="/acerca-de" element={<AboutPage />} />
        <Route path="/courses/clases-personalizadas" element={<Clases />} />
        <Route path="/courses/analisis-partidas" element={<Analisis />} />
        <Route path="/courses/taller-calculo" element={<Calculo />} />
        <Route path="/courses/curso-caf" element={<CAF />} />
        <Route path="/courses/caf5-ahm" element={<CAF5 />} />
        <Route path="/courses/estrategias-vida" element={<Estrategias />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
