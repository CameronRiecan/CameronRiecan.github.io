import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd17cgp', 'template_s4fx7um', form.current, 'yqxhU25qfuV7-9MSo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container row-container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='content_option-icon' />
            <h4>Email</h4>
            <h5>camriecan@gmail.com</h5>
            <a href='mailto:camriecan@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='content_option-icon' />
            <h4>Messenger</h4>
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/cameron-riecan' target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsInstagram className='content_option-icon' />
            <h4>DM</h4>
            <h5>Instagram</h5>
            <a href='https://ig.me/m/cameronriecan' target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <label>Email:</label>
          <input type='email' name='email' placeholder='Your Email' required />
          <label>Message:</label>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact