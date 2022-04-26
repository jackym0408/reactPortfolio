import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavCont, NavLogo, MobileIcon, NavItemCont, NavItem, NavLinks,} from './navElements'


const Navbar = () => {
  return (
    <> 
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
          <NavItem>
          <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
          <NavLinks to="contact">Contact me</NavLinks>
          </NavItem>
        </NavItemCont>
      </NavCont>
    </Nav>
    </>
  );
};

export default Navbar;