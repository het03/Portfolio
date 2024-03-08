  import React from 'react';
  import './Navigation.css'

  function Navigation() {
    return (
      <div className='nav'>
        <div className='nav-container'>
          <ul>
            <li><a href='/About'>ABOUT</a></li>
            <li><a href='/Works'>WORKS</a></li>
            <li><a href='/Resume'>RESUME</a></li>
            <li><a href='/Contact'>CONTACT</a></li>
          </ul>
        </div>
      </div>
    );
  }

  export default Navigation;