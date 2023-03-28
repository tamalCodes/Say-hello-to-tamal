/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */

import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';


import fd from "../../assets/about/frontenddevelopment.png";
import bd from "../../assets/about/backenddevelopment.png";
import tw from "../../assets/about/technicalwriting.png";
import wd from "../../assets/about/webdesign.png";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      {/*   <h2 className="head-text"> What makes me a  <span>Good Dev ? </span> <br />It&apos;s the  <span>awesome products i build.</span></h2> */}

      <h2 className="head-text"> Bringing Your Digital Vision to Life with <br /> <span>The services i provide</span> </h2>

      <div className="about__profiles">
        <div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="about__profile-item"

        >
          <img src={fd} alt="fronted" className='abtlogo' />
          <h2 className="abthead" style={{ marginTop: 20 }}>Frontend Development</h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>I will make a responsive, clean and eye catching interface for the user with React, HTML, CSS, and other latest technologies.</p>
        </div>
        <div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="about__profile-item"

        >
          <img src={bd} alt="fronted" className='abtlogo' />
          <h2 className="abthead" style={{ marginTop: 20 }}>Backend Development</h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>I will develop a scalable server side code based on Firebase, MongoDB, Node, Express, GraphQL, AWS, Javascript.</p>
        </div>
        <div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="about__profile-item"

        >
          <img src={tw} alt="fronted" className='abtlogo' />
          <h2 className="abthead" style={{ marginTop: 20 }}>Technical Writing</h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>I will write a well structured article for you, your product, or any given topic along with proper banners and pictures.</p>
        </div>

      </div>


      <div className="about__profiles" style={{ marginTop: "3.3rem" }}>
        <div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="about__profile-item"

        >
          <img src={wd} alt="fronted" className='abtlogo' />
          <h2 className="abthead" style={{ marginTop: 20 }}>Web Design</h2>
          <hr />
          <p className="abtdesc" style={{ marginTop: 25 }}>I will design a clean and minimal prototype using tools like Canva, Figma based on your choice of themes.</p>
        </div>
      </div>



    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'about__about'),
  'about',
  'about__whitebg',
);
