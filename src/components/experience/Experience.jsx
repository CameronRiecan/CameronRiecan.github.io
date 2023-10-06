import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container row-container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>HTML</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>CSS</h4>
                <small className='text-light' aria-label="Experience Level: Intermediate">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light' aria-label="Experience Level: Intermediate">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Git</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>React</h4>
                <small className='text-light' aria-label="Experience Level: Intermediate">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Command Line</h4>
                <small className='text-light' aria-label="Experience Level: Beginner/Intermediate">Beginner/Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend section*/}

        <div className="experience_backend">
          <h3>Other Tech</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Github</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>PC</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Mac</h4>
                <small className='text-light' aria-label="Experience Level: Experienced">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Linux</h4>
                <small className='text-light' aria-label="Experience Level: Intermediate">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>VirtualBox</h4>
                <small className='text-light' aria-label="Experience Level: Intermediate">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Figma</h4>
                <small className='text-light' aria-label="Experience Level: Beginner/Intermediate">Beginner/Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' aria-hidden='true' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light' aria-label="Experience Level: Beginner/Intermediate">Beginner/Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience