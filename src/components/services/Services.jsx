import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service' tabIndex='0'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li aria-label='User-Centered Design'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>User-Centered Design.</b> Every element is crafted with the end-user in mind.</p>
            </li>
            <li aria-label='Wireframing and Prototyping'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Wireframing and Prototyping.</b> Visualize the user journey and iterate on design concepts.</p>
            </li>
            <li aria-label='Responsive Design'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Responsive Design.</b> Prioritize responsive design principles for optimal experience across various devices.</p>
            </li>
            <li aria-label='Accessibility'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Accessibility.</b> Ensuring inclusivity, implement accessibility features for a wider audience.</p>
            </li>
            <li aria-label='Mobile-First Design'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Mobile-First Design.</b> Provides an excellent user experience on smartphones and tablets.</p>
            </li>
            <li aria-label='Visual Design'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Visual Design.</b> Visually appealing and intuitive interfaces that captivate users.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className='service' tabIndex='0'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li aria-label='Frontend Excellence'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Frontend Excellence.</b> HTML5, CSS3, JavaScript, and React.js for dynamic and interactive user interfaces.</p>
            </li>
            <li aria-label='Version Control'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Version Control.</b> Git for version control, enabling seamless collaboration and code management.</p>
            </li>
            <li aria-label='Responsive Web Design'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Responsive Web Design.</b> Responsive web design to ensure websites perform flawlessly on all devices.</p>
            </li>
            <li aria-label='Web Performace Optimization'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Web Performance Optimization.</b> Create websites that load quickly and efficiently, enhancing the user experience.</p>
            </li>
            <li aria-label='Cross-Browser Compatibility'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Cross-Browser Compatibility.</b> Test and optimize websites for cross-browser compatibility to reach a broader audience.</p>
            </li>
            <li aria-label='Performance Analysis with Browser Tools'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Performance Analysis with Browser Tools.</b> Analyze and optimize website's performance, and identifying areas for improvement.</p>
            </li>
            <li aria-label='Continuous Learning'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Continuous Learning.</b> Staying updated with the latest web development trends and technologies.</p>
            </li>
          </ul>
        </article>

        {/* End of Web Devlopment */}

        <article className='service item-three' tabIndex='0'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li aria-label='Content Strategy'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Content Strategy.</b> Align content with goals, target audience, and brand identity.</p>
            </li>
            <li aria-label='Engaging Copy'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Engaging Copy.</b> Juris Doctorate degree and extensive legal writing experience brings unique perspective.</p>
            </li>
            <li aria-label='Multimedia Content'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Multimedia Content.</b> Images, videos, etc., to enrich your website.</p>
            </li>
            <li aria-label='SEO optimization'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>SEO Optimization.</b> Optimize content for search engines, improving website's visibility.</p>
            </li>
            <li aria-label='Content Management'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>Content Management.</b> Ensuring website stays fresh and up-to-date.</p>
            </li>
            <li aria-label='AI-Powered Content'>
              <BiCheck className='service_list-icon' aria-hidden='true' />
              <p><b>AI-Powered Content.</b> Leverage cutting-edge AI technologies like chatGPT, to create dynamic and personalized content.</p>
            </li>
          </ul>
        </article>

        {/* End of Content Creation */}

      </div>
    </section>
  )
}

export default Services