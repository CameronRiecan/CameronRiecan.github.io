import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials' aria-label='Social Media Links'>
        <a
          href='https://www.linkedin.com/in/cameron-riecan/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <BsLinkedin />
          <h5 className='sr-only'>Linkedin</h5>
        </a>
        <a
          href='https://github.com/CameronRiecan'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
        >
          <FaGithub />
          <h5 className='sr-only'>Github</h5>
        </a>
        <a
          href='https://www.instagram.com/cameronriecan/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <BsInstagram />
          <h5 className='sr-only'>Instagram</h5>
        </a>
    </div>
  )
}

export default HeaderSocials