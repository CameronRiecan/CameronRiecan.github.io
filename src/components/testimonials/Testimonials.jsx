import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Person 1",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus!'
  },
  {
    avatar: AVTR2 ,
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

      <Swiper className="container testimonials_container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials