'use client'
import React, { useEffect, useState } from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import './About.css';
import Image, { StaticImageData } from 'next/image';
import Reveal from '@/components/utils/Reveal';
import RadarChart from '@/components/utils/RadarChart';

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

          <section className='one'>
            <div className="bg-img" />
            <Reveal>
            <h1 className='about-title'>ABOUT ME</h1>
            </Reveal>
          </section>

          <section className='about-text'>
            <div className='text-container'>
              <Reveal>
              <div className='text' id='a'>
              Hi there! I&apos;m Het, a software engineer with a passion for both drawing and front-end web development. Originally from Gujarat, India. I bring a wealth of enthusiasm and expertise to every project I undertake.
              </div>
              </Reveal>
              <Reveal>
              <div className='text'>
              With a keen eye for detail and a knack for problem-solving, I specialize in leveraging front-end technologies such as React, HTML, CSS , JavaScript and more to create intuitive and visually stunning user interfaces. Whether it&apos;s building responsive websites, optimizing user experiences, or implementing cutting-edge design trends, I thrive on pushing the boundaries of what's possible in web development.
              </div>
              </Reveal>
              <Reveal>
              <div className='text'>
              If you&apos;re in search of a skilled and reliable front-end developer to bring your vision to life, I&apos;m here to help. Let&apos;s connect and turn your ideas into reality!
              </div>
              </Reveal>
              <Reveal>
              <button className='contact-btn' onClick={() => window.location.href = '/Contact'}>CONTACT ME</button>
              </Reveal>
            </div>
            <Reveal>
            <Image src='/eva.jpg' alt='' width={600} height={900} objectFit='cover'/>
            </Reveal>
            </section>

            <section>
            <Reveal>
              <div className="skill-page">
                <div className="skill">
                  SKILLS
                </div>
                <RadarChart />
              </div>
            </Reveal>
            </section>
        </div>
      )}
    </>
  );
}
