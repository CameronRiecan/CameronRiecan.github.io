import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Cameron Riecan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div>
          <img src={ME} alt='Cameron Riecan Picture' />
        </div>
      </div>
    </header>
  )
}

export default Header