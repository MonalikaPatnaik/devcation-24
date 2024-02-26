import React, { useState,useEffect } from 'react';
import './Nav.css';
import logo from "../../assets/logogdsc.png"
import { Icon } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Nav = () => {
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const toggleDropdown = () => {
      setDropdownMenuOpen(!dropdownMenuOpen);
    };
    

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header" className={`fixed-top ${scrollPosition > 100 ? 'black-bg' : ''}`}>
      <div className="container">
        <a href='/' className="logo-container"><img src={logo} alt="Logo" className="logo me-auto" style={{"height":"110px"}}/></a>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#header">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#why-us">Devcation'23</a></li>
            <li><a className="nav-link scrollto" href="#features">Timeline</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Events</a></li>
            <li className="nav-link dropdown">
                <a className=" dropdown-toggle" href="#" role="button" onClick={toggleDropdown}>
                    More
                </a>
                <ul className={`dropdown-menu ${dropdownMenuOpen ? 'dropdown-menu-hidden' : ''}`} style={{ visibility: dropdownMenuOpen ? 'visible' : 'hidden' }}>
                    <li><a className="dropdown-item" href="#portfolio">Tracks</a></li>
                    <li><a className="dropdown-item" href="#services">Prizes</a></li>
                    <li><a className="dropdown-item" href="#team">Team</a></li>
                    <li><a className="dropdown-item" href="#sponsors">Sponsors</a></li>
                </ul>
            </li>
            <li><a className="nav-link scrollto" href="#footer">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div className="social-links"> 
        <a href="https://twitter.com/gdsc_igdtuw" target="_blank" className="twitter" style={{"marginLeft":"2px"}}> <Icon color="primary" component={XIcon} style={{"width":"15px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" className="facebook"style={{"marginLeft":"2px"}}> <Icon color="primary" component={FacebookIcon} style={{"width":"16px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" className="linkedin" style={{"marginLeft":"2px"}}> <Icon color="primary" component={LinkedInIcon} style={{"width":"17px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" className="instagram" style={{"marginLeft":"2px"}}> <Icon color="primary" component={InstagramIcon} style={{"width":"17px", "color":"#1BB1DC"}}/> </a> 
        <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" className="instagram" style={{"marginLeft":"2px"}}> <Icon color="primary" component={YouTubeIcon} style={{"width":"19px", "color":"#1BB1DC"}}/> </a> 
        </div>
      </div>
    </header>
  );
};

export default Nav;
