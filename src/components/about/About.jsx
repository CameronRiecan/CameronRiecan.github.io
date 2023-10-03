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
            <img src={ME} alt='About Me' />
          </div>
        </div>

        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years </small>
              <small>Junior Dev exp, </small>
              <small>and Freelance</small>
            </article>

            <article className='about_card'>
              <BiBook className='about_icon'/>
              <h5>Education</h5>
              <small>B.A., </small>
              <small>J.D., </small>
              <small>and Meta Frontend Developer Certificate</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>React, Vanilla JS, and more!</small>
            </article>
          </div>

          <p>
            I am Cameron Riecan, a dedicated web developer based in the vibrant city of Los Angeles, CA. My passion for web development has led me to acquire proficiency in HTML5, CSS3, JavaScript, React, and the latest technologies. I am adept at crafting visually appealing and highly functional websites that provide an exceptional user experience on both desktop and mobile platforms. My technical skills extend to using Git, GitHub, Command Line, Visual Studio Code IDE, JSON, Node.js, Node Package Manager, and React.js, ensuring that projects are efficiently managed and delivered with precision.
          </p>
          <p>
            My educational background includes a Meta Front-End Developer Specialization certificate from Meta and Coursera. I also hold a Juris Doctorate from Seattle University School of Law and a Bachelor of Arts in Political Science from Fordham University in New York, NY.
          </p>
          <p>
            In my free time, I enjoy exploring the diverse culinary offerings of Los Angeles, studying Japanese, and of course, coding. If you're interested in discussing potential projects or have any inquiries, please feel free to reach out to me at any of the available methods that are provided. I'm excited to connect and explore new opportunities with you.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About