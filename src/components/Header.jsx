import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './Header.css';

function Header() {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='main'
      >
        <a href='/'>
          <div className='name-container'>
            <div className='fname'>HET</div>
            <div className='lname'>GAJERA</div>
          </div>
        </a>
        <div className='title'>
          Software Developer
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
