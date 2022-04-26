import React from 'react'
import { SidebarCont, Icon, CloseIcon, SidebarWrap, SidebarItems, SidebarLink } from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarCont isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}> 
            <CloseIcon />
        </Icon>
        <SidebarWrap>
            <SidebarItems>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="projects"onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to="contact"onClick={toggle}>Contact me</SidebarLink>
            </SidebarItems>
        </SidebarWrap>
    </SidebarCont>  
  )
}

export default Sidebar