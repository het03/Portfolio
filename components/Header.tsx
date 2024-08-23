'use client'
import React from 'react'
import { motion } from 'framer-motion'
import '@/assets/styles/Header.css'

export default function Header() {
  return (
  <header >
    <div className='header-container'>
      <a href='/'>
        <div className='name'>
          <div className='fname'>HET</div>
          <div className='lname'>GAJERA</div>
        </div>
      </a>
      <div className='prof-title'>
        Designer & Developer
      </div>
    </div>
  </header>
  )
}
