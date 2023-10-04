import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header role='banner'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Cameron Riecan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div aria-hidden='true'>
          <img src={ME} alt='Cameron Riecan' className='me' />
        </div>

        <a href='#contact' className='scroll_down' aria-label='Scroll down to contact section'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header