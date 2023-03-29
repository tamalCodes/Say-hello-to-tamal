/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import testtimonialdata from './testtimonialData';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "4rem" }}> Hear From My <span>Satisfied Clients</span> and <br /> Their Success Stories </h2>

      {testtimonialdata.length && (
        <>
          <div className="app__testimonial-item">

            <div className="app__testimonial-content">
              <p className="p-text">{testtimonialdata[currentIndex].description}</p>

            </div>

            <a className='app__testimonial-imgdiv' href={testtimonialdata[currentIndex].linkedin} target="_blank" rel='noreferrer'>
              <img src={testtimonialdata[currentIndex].picture} alt={testtimonialdata[currentIndex].name} />
              <div>
                <h4 className="bold-text">{testtimonialdata[currentIndex].name}</h4>
                <h5 className="p-text">{testtimonialdata[currentIndex].postition}</h5>
              </div>
            </a>

          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testtimonialdata.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testtimonialdata.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__whitebg',
);
