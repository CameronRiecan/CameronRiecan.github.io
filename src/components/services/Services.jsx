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
              <p>Frontend Excellence: My frontend skills involve HTML5, CSS3, JavaScript, and frameworks like React.js for dynamic and interactive user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Version Control: I use Git for version control, enabling seamless collaboration and code management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Web Design: I focus on responsive web design to ensure websites perform flawlessly on all devices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Performance Optimization: My goal is to create websites that load quickly and efficiently, enhancing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Cross-Browser Compatibility: I test and optimize websites for cross-browser compatibility to reach a broader audience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Performance Analysis with Browser Tools: I utilize browser developer tools to analyze and optimize your website's performance, identifying areas for improvement and enhancing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning: Staying updated with the latest web development trends and technologies is essential to my practice. I continually seek opportunities to learn and implement new techniques.</p>
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
              <p>Content Strategy: Crafting a content strategy, I align content with your goals, target audience, and brand identity.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Engaging Copy: With a Juris Doctorate degree and extensive legal writing experience, I bring a unique perspective to content creation. My writing skills extend to creating engaging and persuasive copy that resonates with your audience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Multimedia Content: I can produce multimedia content, including images, videos, and infographics, to enrich your website.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>SEO Optimization: I optimize content for search engines, improving your website's visibility.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Management: ensuring that your website stays fresh and up-to-date.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>AI-Powered Content: I leverage cutting-edge AI technologies, including chatbots and chatGPT, to create dynamic and personalized content experiences for your audience.</p>
            </li>
          </ul>
        </article>

        {/* End of Content Creation */}

      </div>
    </section>
  )
}

export default Services