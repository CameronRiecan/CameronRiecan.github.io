import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import Swiper.js core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Person 1",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus!'
  },
  {
    avatar: AVTR2,
    name: "Person 2",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus!'
  },
  {
    avatar: AVTR3,
    name: "Person 3",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus!'
  },
  {
    avatar: AVTR4,
    name: "Person 4",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials