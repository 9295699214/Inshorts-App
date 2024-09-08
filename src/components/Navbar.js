import React from 'react';
import './Navbar.css';
import Hamburger from './HamburgerDrawer';

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <Hamburger setCategory={setCategory}/>
      </div>
      <img 
      style={{cursor:"pointer"}}
      src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
      height="80%"
      alt = "logo"></img>
    </div>
  )
}

export default Navbar
