import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButton = ({ label = 'Contactanos si es tu caso' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 mt-2 border border-gray-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
      >
        {label.toUpperCase()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-lg shadow-xl p-6 max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>
              <ContactForm onClose={() => setIsOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;
