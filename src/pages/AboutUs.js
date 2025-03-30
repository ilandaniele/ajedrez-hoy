import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../components/AboutUs';

const pageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: 'easeIn' } }
};

const AboutPage = () => {
  return (
    <motion.div
      className="bg-black min-h-screen pt-24"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AboutUs />
    </motion.div>
  );
};

export default AboutPage;
