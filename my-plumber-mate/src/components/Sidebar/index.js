import React from 'react'
import {
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  CloseIcon
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About us</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Services</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
