/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import communityData from './communityData';

const Communities = () => (
  <>
    <h2 className="head-text"> Giving back to   <span>the community 💙 </span> <br /></h2>

    <div className="app__profiles">
      {communityData.map((el, index) => (
        <div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={index}
        >
          <img src={el.img} alt={el.title} />
          <h2 className="abthead" style={{ marginTop: 20 }}>{el.title}</h2>
          <p className="abtdesc" style={{ marginTop: 25 }}>{el.description}</p>
          <a href={el.visitlink} className="abtdesc" style={{ marginTop: 10, color: "#313bac", fontWeight: "600" }}>Visit</a>
          <a href={el.twitterlink} className="abtdesc" style={{ marginTop: 10, color: "#313bac", fontWeight: "600", textDecoration: "underline" }}>Social media post</a>

        </div>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Communities, 'app__about'),
  'community work',
  'app__whitebg',
);
