import React from 'react'
import CV from '../../assets/Cameron_Riecan_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn' aria-label='Download CV'>
        Download CV
      </a>
      <a href={CV} target='_blank' rel='noopener noreferrer' className='btn btn-primary' aria-label='Open CV in New Tab'>
        Open CV in New Tab
      </a>
      <a href='#contact' className='btn btn-primary' aria-label='Contact me'>
        Contact me!
      </a>
    </div>
  )
}

export default CTA