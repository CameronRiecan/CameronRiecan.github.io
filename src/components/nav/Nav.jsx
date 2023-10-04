import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
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
    </nav>
  )
}

export default Nav