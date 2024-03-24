'use client'
import React from 'react'
import { motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: "100vh",
  },
  animate: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export default function InitialPageTransition() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <motion.div style={{ position: 'relative', backgroundColor: 'black', zIndex: 50, width: '100%' }}
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  )
}
