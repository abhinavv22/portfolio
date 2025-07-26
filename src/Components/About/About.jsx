import React from 'react'
import './About.css'
import Theme_pattern from'../../assets/theme_pattern.svg'
import profile_image from '../../assets/LOGO3.png'

const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi, I’m Abhinav — a tech enthusiast who enjoys building smart solutions with code. When I’m not debugging, I’m probably designing, learning, or exploring the latest in tech.</p>
            <p>With a strong foundation in OOP and frameworks like Selenium, Django, and React, I love building efficient, user-friendly applications.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>UI/UX</p><hr style={{width:"40%"}}/></div>

          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>QUICK</h1>
          <p>LEARNER</p>
        </div>
        <hr />
         <div className="about-achivement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achivement">
          <h1>KEEP</h1>
          <p>LEARNING</p>
        </div>
      </div>
    </div>
  )
}

export default About