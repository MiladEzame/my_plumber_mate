import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks} from './NavbarElements'

const Navbar = ({ toggle }) => {


  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/"
            onClick={toggleHome}
            spy={true}
            smooth={true}
            duration={800}
            exact='true'
          >My Plumber Mate</NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
                spy={true}
                smooth={true}
                duration={800}
                exact='true'
              >About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"
                spy={true}
                smooth={true}
                duration={800}
                exact='true'
                offset={-80}
               >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
                spy={true}
                smooth={true}
                duration={800}
                exact='true'
                offset={-80}
              >Services</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
