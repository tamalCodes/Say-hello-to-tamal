/* eslint-disable quotes */
import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/mrTamall" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/IAmTamal" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>

    </div>
    <div>
      <a href="https://instagram.com/hellotamal" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
