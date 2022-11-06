/* eslint-disable quotes */
import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter onClick={() => { window.location.href = "https://twitter.com/mrTamall"; }} />
    </div>
    <div>
      <BsGithub onClick={() => { window.location.href = "https://github.com/IAmTamal"; }} />
    </div>
    <div>
      <BsInstagram onClick={() => { window.location.href = "https://twitter.com/mrTamall"; }} />
    </div>
  </div>
);

export default SocialMedia;
