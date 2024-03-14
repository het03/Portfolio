import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

function Navigation() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='nav'
    >
      <div className='nav-container'>
        <ul>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <a href='/About'>ABOUT</a>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a href='/Works'>WORKS</a>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <a href='/Resume'>RESUME</a>
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <a href='/Contact'>CONTACT</a>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Navigation;
