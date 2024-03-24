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
  { year: 'TBA', title: 'TBN', link: 'https://github.com/het03' },
  { year: '2024', title: 'PORTFOLIO', link: 'https://github.com/het03/Portfolio' },
  { year: '2024', title: 'E-COMMERCE', link: 'https://github.com/het03/E-Commerce' },
  { year: '2023', title: 'PLANTDEX', link: 'https://github.com/het03/plantDEX' },
  { year: 'TBA', title: 'TBN', link: 'https://github.com/het03' },
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
    <div className="work-container">
      <AnimatePresence>
        <div className="work-list">
          {projects.map((project, index) => (
            <div className='project-wrapper' key={index}>
              <motion.div 
                animate={{
                  y: [10, -10, 10, -10, 10],
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
                      className="work-title"
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
