import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='social-group'>
          <span>01</span>
          <a className='linkedin' href='https://www.linkedin.com/in/het-gajera' target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className='social-group'>
          <span>02</span>
          <a className='github' href='https://github.com/het03' target='_blank' rel="noopener noreferrer">GitHub</a>
        </div>
        <div className='social-group'>
          <span>03</span>
          <a className='twitter' href='https://twitter.com/__Het___' target='_blank' rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className='footer-container-2'>
        <div className='location'>Chennai, India</div>
        <div className='email'>het36100@gmail.com</div>
      </div>
    </footer>
  );
}

export default Footer;
