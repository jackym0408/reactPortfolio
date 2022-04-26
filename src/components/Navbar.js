import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavCont, NavLogo, MobileIcon, NavItemCont, NavItem, NavLinks } from './navElements'


const Navbar = () => {
  return (
    <>
    {/* <nav className='navBar'> 
      {/* add logo here that ends up at the start of the page or just ur name idk 
        <ul className='navCont'> 
            <li className='navItems'> <a href='#'>About</a></li>
            <li className='navItems'> <a href='#'>Projects</a> </li>
            <li className='navItems'><a href='#'>Contact me</a>  </li>
      </ul> 
    </nav> */}

    <Nav> 
      <NavCont>
        <NavLogo  to='/'>J.A.M.</NavLogo>
        <MobileIcon>
          <FaBars/>
        </MobileIcon>
        <NavItemCont>
          <NavItem>
          <NavLinks to="about">About</NavLinks>
          </NavItem>
        </NavItemCont>
      </NavCont>
    </Nav>
    </>
  );
};

export default Navbar;