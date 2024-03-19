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
    <header>
    <motion.div
      variants={variants}
      custom={-200}
      initial="initial"
      animate="final"
      className='hero-container'
    >
      <a href='/'>
        <div className='hero'>
          <div className='fname'>HET</div>
          <div className='lname'>GAJERA</div>
        </div>
      </a>
      <div className='title'>
        Desginer & Developer
      </div>
    </motion.div>
  </header>
  )
}
