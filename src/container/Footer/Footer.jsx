/* eslint-disable jsx-quotes */
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {


  return (
    <>
      <h2 className="head-text">Wanna say something ? <br /> <span>I&apos;m listening</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="https://forms.gle/T2bSE4JbtQ4tNcnB8" target="_blank" rel="noreferrer" className="p-text">Drop me a message</a>
        </div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);
