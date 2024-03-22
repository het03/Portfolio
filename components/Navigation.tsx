'use client'
import React from 'react'
import { motion } from 'framer-motion'
import '@/assets/styles/Navigation.css'

export default function Navigation() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='nav'
    >
      <div className='nav-container'>
        <ul className='nav-list'>
          <li className='nav-item' >
            <a href='/About'>ABOUT</a>
          </li>
          <li className='nav-item' >
            <a href='/Works'>WORKS</a>
          </li>
          <li className='nav-item' >
            <a href='/Resume'>RESUME</a>
          </li>
          <li className='nav-item' >
            <a href='/Contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
