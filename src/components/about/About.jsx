import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt='About Me Image' />
          </div>
        </div>

        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
              <small>Junior Dev exp,</small>
              <small>and Freelance</small>
            </article>
            <article className='about_card'>
              <BiBook className='about_icon'/>
              <h5>Education</h5>
              <small>B.A.,</small>
              <small>J.D.,</small>
              <small>and Meta Frontend Developer Certificate</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>React, Vanilla JS, and more!</small>
            </article>
          </div>
        </div>

        <p>
          Lorem ipsum...........
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default About