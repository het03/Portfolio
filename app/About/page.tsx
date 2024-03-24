'use client'
import React, {useEffect, useState} from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import './About.css';
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
    <div className="about-container">
      <div className="about-heading">
        <div className="about-title">ABOUT</div>
      </div>
      <div className="text-container">
        <div className="text-area">
          <div className="text-box">
            <div className="about">
          <Reveal>
            <div className="text">
            <p>
              Hi there! I&apos;m Het, a software engineer with a passion for both drawing and front-end web development.
              Originally from Gujarat, India. I bring a wealth of enthusiasm and expertise to every project I undertake.
            </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p>
              With a keen eye for detail and a knack for problem-solving, 
              I specialize in leveraging front-end technologies such as React, HTML, CSS , JavaScript and more to create intuitive and visually stunning user interfaces.
              Whether it&apos;s building responsive websites, optimizing user experiences, or implementing cutting-edge design trends, 
              I thrive on pushing the boundaries of what&apos;s possible in web development.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p>
              If you&apos;re in search of a skilled and reliable front-end developer to bring your vision to life, I&apos;m here to help. Let&apos;s connect and turn your ideas into reality!
              </p>
            </div>
          </Reveal>
          <Reveal>
          <a className="about-link" href="/Contact">Contact me</a>
          </Reveal>
          </div>
          <div className="about-skills">
            <div className="about-category">
              <Reveal>
              <div className="skill-title">For Work</div>
              </Reveal>
              <Reveal>
                <div className="chip-container">
                  <span className="chip">JavaScript</span>
                  <span className="chip">CSS</span>
                  <span className="chip">HTML</span>
                  <span className="chip">React.js</span>
                  <span className="chip">Figma</span>
                  <span className="chip">Next.js</span>
                </div>
              </Reveal>
            </div>
            <div className="about-category">
              <Reveal>
                <div className="skill-title">For Fun</div>
              </Reveal>
              <Reveal>
                <div className="chip-container">
                  <span className="chip">TypeScript</span>
                  <span className="chip">Angular</span>
                  <span className="chip">Tailwind</span>
                  <span className="chip">Python</span>
                  <span className="chip">C</span>
                  <span className="chip">C++</span>
                  <span className="chip">React Native</span>
                </div>
              </Reveal>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
