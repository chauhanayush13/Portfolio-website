import React from 'react'
import './AboutMe.css'
import photos from '../img/photos.jpg';
export default function AboutMe() {
  return (
    <section className='about-me' id='about'>
    <div className='about'>
        <h1 className='h1 slideIn' > <b>About <span className="me">Me</span></b></h1>
        <p className='slideIn'>Hello there! I'm Ayush Chauhan a computer science student  at the University of CVM , pursuing my Bachelor’s degree in 
          Information Technology . I'm deeply Passionate about a front end developer i strive to a developer. I also make the Projects
          based on machine learning and also create a simple basic react app as a front end developer . I always approach my work with 
          enthusiasam and dedication. I love learning new things, whether it's through formal education or hands-on experience.
        </p>
        <button className='contact-button slideIn'>Contact Me</button>
        <img className='image' src={photos} alt=""/>
    </div>
    </section>
  )
}
