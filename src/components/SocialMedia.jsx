/* eslint-disable quotes */
import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/tamalCodes" target="_blank" rel="noreferrer">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://github.com/tamalCodes" target="_blank" rel="noreferrer">

      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/say-hello-to-tamal/" target="_blank" rel="noreferrer">
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
