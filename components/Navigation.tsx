'use client'
import React from 'react'
import { motion } from 'framer-motion'
import '@/assets/styles/Navigation.css'
import Link from 'next/link'

export default function Navigation() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='nav'
    >
        <ul className='nav-list'>
          <li className='nav-item' >
            <Link href='/About'>ABOUT</Link>
          </li>
          <li className='nav-item' >
            <Link href='/Works'>WORKS</Link>
          </li>
          <li className='nav-item' >
            <Link href='/Resume'>RESUME</Link>
          </li>
          <li className='nav-item' >
            <Link href='/Contact'>CONTACT</Link>
          </li>
        </ul>
    </motion.div>
  )
}
