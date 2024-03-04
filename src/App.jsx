import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
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


    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-item 1'>ABOUT</div>
        <div className='nav-item 2'>WORKS</div>
        <div className='nav-item 3'>RESUME</div>
        <div className='nav-item 4'>CONTACT</div>
      </div>
    </div>


    <footer>
      <div className='footer-container'>
          <div className='linkedin'><a href=''>LinkedIn</a></div>
          <div className='github'><a href=''>GitHub</a></div>
          <div className='email'>
            <a href=''>het36100@gmail.com</a>
          </div>
      </div>
    </footer>
    </>
  )
}

export default App
