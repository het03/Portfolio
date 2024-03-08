import React from 'react';
import './Header.css'

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

export default Header;
