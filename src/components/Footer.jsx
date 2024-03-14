import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    >
      <div className='footer-container'>
        <motion.div className='social-group' whileHover={{ scale: 0.9 }}>
          <span>01</span>
          <a className='linkedin' href='https://www.linkedin.com/in/het-gajera' target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </motion.div>
        <motion.div className='social-group' whileHover={{ scale: 0.9 }}>
          <span>02</span>
          <a className='github' href='https://github.com/het03' target='_blank' rel="noopener noreferrer">GitHub</a>
        </motion.div>
        <motion.div className='social-group' whileHover={{ scale: 0.9 }}>
          <span>03</span>
          <a className='twitter' href='https://twitter.com/__Het___' target='_blank' rel="noopener noreferrer">Twitter</a>
        </motion.div>
      </div>
      <div className='info'>
        <div className='location'>Chennai, India</div>
        <a href='mailto:het36100@gmail.com'><div className='email'>het36100@gmail.com</div></a>
        <div className='cpyr'>Copyright © 2024 Het Gajera. All rights reserved.</div>
      </div>
    </motion.footer>
  );
}

export default Footer;
