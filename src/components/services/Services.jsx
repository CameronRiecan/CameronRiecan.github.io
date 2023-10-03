import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container row-container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User-Centered Design. Every element is crafted with the end-user in mind.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing and Prototyping. Visualize the user journey and iterate on design concepts.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Design. Prioritize responsive design principles for optimal experience across various devices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Accessibility. Ensuring inclusivity, implement accessibility features for a wider audience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mobile-First Design. Provides an excellent user experience on smartphones and tablets.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Visual Design. Visually appealing and intuitive interfaces that captivate users.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend Excellence. HTML5, CSS3, JavaScript, and React.js for dynamic and interactive user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Version Control. Git for version control, enabling seamless collaboration and code management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Web Design. Responsive web design to ensure websites perform flawlessly on all devices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Performance Optimization. Create websites that load quickly and efficiently, enhancing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Cross-Browser Compatibility. Test and optimize websites for cross-browser compatibility to reach a broader audience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Performance Analysis with Browser Tools. Analyze and optimize website's performance, and identifying areas for improvement.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning. Staying updated with the latest web development trends and technologies.</p>
            </li>
          </ul>
        </article>

        {/* End of Web Devlopment */}

        <article className='service item-three'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Strategy. Align content with goals, target audience, and brand identity.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Engaging Copy. Juris Doctorate degree and extensive legal writing experience brings unique perspective to content creation.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Multimedia Content. Images, videos, etc., to enrich your website.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>SEO Optimization. Optimize content for search engines, improving website's visibility.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Management. Ensuring website stays fresh and up-to-date.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>AI-Powered Content. Leverage cutting-edge AI technologies like chatGPT, to create dynamic and personalized content experiences</p>
            </li>
          </ul>
        </article>

        {/* End of Content Creation */}

      </div>
    </section>
  )
}

export default Services