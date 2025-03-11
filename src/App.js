import React from 'react';

import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Courses from './components/Courses';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Services />
      <WhyUs />
      <Courses />
      <AboutUs />
      <FAQs />
      <ContactForm />
      <Footer /> {/* issues at 620 */}
    </div>
  );
}

export default App;