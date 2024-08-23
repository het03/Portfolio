'use client'
import React, {useEffect, useState} from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import './work.css';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  { year: '2024', title: 'PDF-CHAT', link: 'https://github.com/het03/Pdf-chat-app' },
  { year: '2024', title: 'ECOM-ADMIN', link: 'https://github.com/het03/E-Commerce-Admin' },
  { year: '2024', title: 'PORTFOLIO', link: 'https://github.com/het03/Portfolio' },
  { year: '2024', title: 'ECOM-STORE', link: 'https://github.com/het03/E-Commerce-Store' },
  { year: '2023', title: 'PLANTDEX', link: 'https://github.com/het03/plantDEX' },
];

export default function Works() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 850); 
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <InitialPageTransition />
    {showContent && (
    <div className= "work-container"> 
      <div className="work-title">WORKS</div>
      <AnimatePresence>
        <div className="work-list">
          {projects.map((project, index) => (
            <div className='project-wrapper' key={index}>
              <motion.div 
                animate={{
                  y: [5, -5, 5, -5, 5],
                  transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
                }}
                whileHover={{ 
                  y: 0,
                  scale: 1.1
                }}
                className='project-card'
                >
                <a href={project.link} target='_blank' rel="noreferrer noopener">
                  <span className='year'>{project.year}</span>
                  {Array.from(project.title).map((char, charIndex) => (
                    <motion.div
                      className="work"
                      key={char + '-' + charIndex}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: charIndex * 0.1 }}
                      >
                      {char}
                    </motion.div>
                  ))}
                </a>
              </motion.div>
              <div className="oval-shadow"></div>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </div>
    )}
    </>
  );
}
