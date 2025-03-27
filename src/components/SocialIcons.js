// SocialIcons.js
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaTwitch,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const SocialIcons = ({ iconsToShow = [], iconClasses = {} }) => {
  const availableIcons = {
    facebook: {
      icon: <FaFacebook size={24} />,
      link: 'https://www.facebook.com/AjedrezHOY',
    },
    instagram: {
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com/ajedrezhoy',
    },
    whatsapp: {
      icon: <FaWhatsapp size={24} />,
      link: 'https://wa.me/5491160561605',
    },
    twitter: {
      icon: <FaXTwitter size={24} />,
      link: 'https://x.com/AjedrezHOY',
    },
    twitch: {
      icon: <FaTwitch size={24} />,
      link: 'https://www.twitch.tv/ajedrezhoy',
    },
    youtube: {
      icon: <FaYoutube size={24} />,
      link: 'https://www.youtube.com/AjedrezHOY',
    },
    tiktok: {
      icon: <FaTiktok size={24} />,
      link: 'https://www.tiktok.com/@ajedrezhoy',
    },
  };

  return (
    <div className="flex space-x-4">
      {iconsToShow.map((icon) => (
        <motion.a
          key={icon}
          href={availableIcons[icon]?.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6 }}
          className={`${iconClasses[icon] || ''} text-white transition-all duration-300 hover:text-yellow-400 drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]`}
        >
          {availableIcons[icon]?.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
