import React from 'react';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header d-flex text-center">
      <h1 className='col-4 '>Damian Galus</h1>
      <div className='container col-8'>
        <div className='row'>
          <div className='col'>
            <a href="/" >About</a>
          </div>
          <div className='col'>
            <a href="/">Portfolio</a>
          </div>
          <div className='col'>
            <a href="/">Contact</a>
          </div>
          <div className='col'>
            <a href="/">Resume</a>
          </div>
        </div>
      </div>
    </header>
    
  );
}

export default Header;
