import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/cameron-riecan/' target='_blank'><BsLinkedin /><h5>Linkedin</h5></a>
        <a href='https://github.com/CameronRiecan' target='_blank'><FaGithub /><h5>Github</h5></a>
        <a href='https://www.instagram.com/cameronriecan/' target='_blank'><BsInstagram /><h5>Instagram</h5></a>
    </div>
  )
}

export default HeaderSocials