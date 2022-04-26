import React from 'react'
import { SidebarCont, Icon, CloseIcon, SidebarWrap, SidebarItems, SidebarLink } from './sidebarElements'

const Sidebar = () => {
  return (
    <SidebarCont>
        <Icon> 
            <CloseIcon />
        </Icon>
        <SidebarWrap>
            <SidebarItems>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="projects">Projects</SidebarLink>
                <SidebarLink to="contact">Contact me</SidebarLink>
            </SidebarItems>
        </SidebarWrap>
    </SidebarCont> 
  )
}

export default Sidebar