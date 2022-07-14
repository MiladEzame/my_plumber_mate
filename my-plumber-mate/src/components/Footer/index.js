import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink
} from './FooterElements'


const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/about'>Contact us</FooterLink>
              <FooterLink to='/about'>How it works</FooterLink>
              <FooterLink to='/about'>Testimonials</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About You</FooterLinkTitle>
              <FooterLink to='/about'>Contact us</FooterLink>
              <FooterLink to='/about'>How it works</FooterLink>
              <FooterLink to='/about'>Testimonials</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Him</FooterLinkTitle>
              <FooterLink to='/about'>Contact us</FooterLink>
              <FooterLink to='/about'>How it works</FooterLink>
              <FooterLink to='/about'>Testimonials</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Her</FooterLinkTitle>
              <FooterLink to='/about'>Contact us</FooterLink>
              <FooterLink to='/about'>How it works</FooterLink>
              <FooterLink to='/about'>Testimonials</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
