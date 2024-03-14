  import React from 'react';
  import { motion } from 'framer-motion';
  import './Navigation.css'

  function Navigation() {
    return (
      <motion.div
      initial={{ scale:0, opacity: 0 }}
      animate={{ scale:1, opacity: 1 }}
       className='nav'>
        <div className='nav-container'>
          <ul>
            <li><a href='/About'>ABOUT</a></li>
            <li><a href='/Works'>WORKS</a></li>
            <li><a href='/Resume'>RESUME</a></li>
            <li><a href='/Contact'>CONTACT</a></li>
          </ul>
        </div>
      </motion.div>
    );
  }

  export default Navigation;