import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/cameron-riecan/' target='_blank'><BsLinkedin /> Linkedin</a>
        <a href='https://github.com/CameronRiecan' target='_blank'><FaGithub /> Github</a>
        <a href='https://www.instagram.com/cameronriecan/' target='_blank'><BsInstagram /> Instagram</a>
    </div>
  )
}

export default HeaderSocials