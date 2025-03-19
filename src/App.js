import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Importamos las páginas individuales de cada curso
import Clases from "./pages/courses/Clases";
import Analisis from "./pages/courses/Analisis";
import Calculo from "./pages/courses/Calculo";
import CAF from "./pages/courses/CAF";
import CAF5 from "./pages/courses/CAF5";
import Estrategias from "./pages/courses/Estrategias";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <Presentation />
            <Services />
            <WhyUs />
            <Courses />
            <AboutUs />
            <FAQs />
            <ContactForm />
          </>
        } />

        {/* Rutas individuales de cada curso */}
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
