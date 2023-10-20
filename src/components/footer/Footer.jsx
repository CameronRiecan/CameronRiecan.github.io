import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };

  let currentYear = new Date();
  let theYear = currentYear.getFullYear();

  return (
    <footer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <a href='#top' onClick={scrollToTop} className='footer_logo'>
        Cameron Riecan
      </a>

      <ul className='permalinks'>
        <li><a href='#top' onClick={scrollToTop}>Back To Top</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a
          href='https://www.linkedin.com/in/cameron-riecan/'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <BsLinkedin alt='LinkedIn' />
        </a>
        <a
          href='https://github.com/CameronRiecan'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
        >
          <FaGithub alt='GitHub' />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; {theYear} Cameron Riecan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer