import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/LOGO_astro1.png';
import github_logo from '../../assets/github_logo.svg';
import instagram_logo from '../../assets/instagram_logo.svg';
import linkedin_logo from '../../assets/linkedin_logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img className='footer-logo' src={footer_logo} alt="footer logo" />
          <p>Thanks for Watching my Portfolio</p>
        </div>
        <div className="footer-top-right">
          <a
            href="https://github.com/abhinavv22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_logo} alt="GitHub" className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/abhinav.singhh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram_logo} alt="Instagram" className="footer-icon" />
          </a>
          <a
  href="https://www.linkedin.com/in/abhinav-singh-05bb9723a/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={linkedin_logo} alt="LinkedIn" className="footer-icon" />
</a>

        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bootom-left">Hope you liked it 😊</p>
        <div className="footer-bottom-right">
          <p>FOLLOW ME HERE</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
