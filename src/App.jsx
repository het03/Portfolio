import { useState } from 'react'
import './App.css'

function Header() {
  return (
  <header>
    <div className='main'>
      <div className='name-container'>
        <div className='fname'>HET</div>
        <div className='lname'>GAJERA</div>
      </div>
          <div className='title'>
            <a href=''>Software Developer</a>
          </div>
    </div>
  </header>
  );
}

function Navigation() {
  return (
  <div className='nav'>
    <div className='nav-container'>
      <ul>
        <li className='about grow'>ABOUT</li>
        <li className='works grow'>WORKS</li>
        <li className='resume grow'>RESUME</li>
        <li className='contact grow'>CONTACT</li>
        <li></li>
      </ul>
    </div>
  </div>
  );
}

function Footer() {
  return (
  <footer>
    <div className='footer-container'>
      <div className='location'>
        <a href=''>Ahmedabad, India</a>
      </div>
      <span>01</span>
      <div className='linkedin'><a href=''>LinkedIn</a></div>
      <span>02</span>
      <div className='github'><a href=''>GitHub</a></div>
      <span>03</span>
      <div className='twitter'><a href=''>Twitter</a></div>
      <div className='email'>
        <a href=''>het36100@gmail.com</a>
      </div>
    </div>
  </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Footer />
    </>
  )
}

export default App
