import React from 'react';
import logo from './met.png';
import './header.css';

function Header ()
{
  return (
    <div className='logo-design'>
        <img src={logo} className="App-logo" alt="logo" />
    </div>

  );
}
export default Header;

