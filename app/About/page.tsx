'use client'
import React, { useEffect, useState } from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import './About.css';
import Image from 'next/image';
import Reveal from '@/components/utils/Reveal';

export default function About() {
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
        <div className="Acontainer">
          <div className='head-container'>
            <div className='Aheader'>
            <Reveal>
              <p>I&apos;m <span style={{fontWeight: 900}}><i>Het</i></span></p>
            </Reveal>  
            </div>
          </div>
          <div className='Amain'>
          <Reveal>
            <p>A <span style={{fontWeight: 900}}><i>software developer</i></span> with a passion front-end web development. I bring a wealth of enthusiasm and expertise to every project I undertake. With a keen eye for detail and a knack for problem-solving, I specialize in leveraging front-end technologies to create intuitive and visually stunning user interfaces.</p>
          </Reveal>
            <br />
            <div className='connect'>
            <Reveal>
              <p>Feel free to connect!</p>
              </Reveal>
              <Reveal>
              <button className='contact' onClick={() => window.location.href = '/Contact'}><span>CONTACT </span></button>
              </Reveal>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
