import React from 'react'
import './nav.css'
import DarkModeToggle from '../themes/DarkModeToggle'; // Import the DarkModeToggle component
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineLightMode} from 'react-icons/md'
import {MdDarkMode} from 'react-icons/md'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add an event listener to handle scrolling to highlight icons in nav
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Determine which section is in the viewport based on scroll position
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    const aboutSection = document.getElementById('about').offsetTop;
    const experienceSection = document.getElementById('experience').offsetTop;
    const servicesSection = document.getElementById('services').offsetTop;
    const contactSection = document.getElementById('contact').offsetTop;
    const sectionHeight = viewportHeight / 2; //to change icon when at half of screen

    if (scrollPosition < aboutSection - sectionHeight) {
      setActiveNav('#top');
    } else if (scrollPosition < experienceSection - sectionHeight) {
      setActiveNav('#about');
    } else if (scrollPosition < servicesSection - sectionHeight) {
      setActiveNav('#experience');
    } else if (scrollPosition < contactSection - sectionHeight) {
      setActiveNav('#services');
    } else {
      setActiveNav('#contact');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav>
      <a href='#top' onClick={() => {
        setActiveNav('#top');
        scrollToTop();
      }}
      className={activeNav === '#top' ? 'active' : ''}
      role="link"
      aria-label='Home'
      >
        <AiOutlineHome aria-hidden='true'/>
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        role='link'
        aria-label='About'
      >
        <AiOutlineUser aria-hidden='true' />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        role='link'
        aria-label='Experience'
      >
        <BiBook aria-hidden='true' />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        role='link'
        aria-lang='Services'
      >
        <RiServiceLine aria-hidden='true' />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail aria-hidden='true' />
      </a>
      <DarkModeToggle aria-hidden='true'/> {/* Include your DarkModeToggle component */}
    </nav>
  )
}

export default Nav