import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>camriecan@gmail.com</h5>
            <a href='mailto:camriecan@gmail.com'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin />
            <h4>Messenger</h4>
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/cameron-riecan' target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsInstagram />
            <h4>DM</h4>
            <h5>Instagram</h5>
            <a href='https://ig.me/m/cameronriecan' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact