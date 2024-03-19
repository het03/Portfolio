'use client'
import React from 'react'
import { motion } from 'framer-motion'
import '@/assets/styles/Footer.css'

export default function Footer() {

  const variants = {
    initial: (y: number) => {
      return {
        y: y
      };
    },
    final: {
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <motion.footer
    variants={variants}
    custom={200}
    initial="initial"
    animate="final"
    >
      <div className='footer-container'>
        <motion.div
          whileHover={{ scale: 0.9 }}
          className='social-group'>
          <span>01</span>
          <a className='linkedin' href='https://www.linkedin.com/in/het-gajera' target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 0.9 }}
          className='social-group'>
          <span>02</span>
          <a className='github' href='https://github.com/het03' target='_blank' rel="noopener noreferrer">GitHub</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 0.9 }}
          className='social-group'>
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
  )
}
