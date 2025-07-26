import React from 'react';
import './Hero.css';
import profile_img from '../../assets/LOGO3.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Abhinav,</span> Software Developer based in India.
      </h1>
      <p>I am a Software Developer. Learn more about me below.</p>
      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
