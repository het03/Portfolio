'use client'
import React from 'react'
import { motion } from 'framer-motion'
import '@/assets/styles/Header.css'

export default function Header() {

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
    <motion.header 
    variants={variants}
    custom={-200}
    initial="initial"
    animate="final">
    <div className='header-container'>
      <a href='/'>
        <div className='name'>
          <div className='fname'>HET</div>
          <div className='lname'>GAJERA</div>
        </div>
      </a>
      <div className='prof-title'>
        Desginer & Developer
      </div>
    </div>
  </motion.header>
  )
}
