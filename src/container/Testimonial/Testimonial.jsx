import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper';
import Testimonialcard from './card/TestimonialCard';
import './Testimonial.scss';
import testtimonialdata from './testtimonialData';
import { AppWrap, MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components';

const Testimonial = () => (
  <div style={{ position: "relative" }}>

    <div className="testimonials_socialmedia" style={{ position: "absolute", top: "40%" }}>
      <SocialMedia />
    </div>
    <div className="testimonials_parent">

      <h2 className="head-text">Hear From <span> My Satisfied Clients</span> <br /> And
        Their Success Stories
      </h2>



      {window.innerWidth > 1200 ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            testtimonialdata.map((testimonial, index) => (
              <SwiperSlide key={index}> <Testimonialcard testimonial={testimonial} /> </SwiperSlide>
            ))
          }
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            testtimonialdata.map((testimonial, index) => (
              <SwiperSlide key={index}> <Testimonialcard testimonial={testimonial} /> </SwiperSlide>
            ))
          }
        </Swiper>
      )}

      <br />
      <br />
      <br />
    </div>

  </div>
);

export default Testimonial

// export default AppWrap(
//   MotionWrap(Testimonial, 'app__testimonial'),
//   'testimonial',
//   'app__whitebg',
// );
