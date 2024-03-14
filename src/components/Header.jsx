import React from 'react';
import './Header.css'

function Header() {
  return (
    <header>
      <div className='main'>
        <a href='/'>
        <div className='name-container'>
          <div className='fname'>HET</div>
          <div className='lname'>GAJERA</div>
        </div>
        </a>
        <div className='title'>
          Software Developer
        </div>
      </div>
    </header>
  );
}

export default Header;
