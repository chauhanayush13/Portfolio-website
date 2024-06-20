import React, { useState, useEffect } from 'react';
import './Home.css';
import ayush from '../img/ayush.jpg';

export default function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [introText, setIntroText] = useState("Front end developer");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping && index <= introText.length) {
        setText(introText.substring(0, index));
        setIndex(prevIndex => prevIndex + 1);
      } else if (isTyping) {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 1000); // Wait for 1 second before removing letters
      } else if (!isTyping && index >= 0) {
        setText(introText.substring(0, index));
        setIndex(prevIndex => prevIndex - 1);
      } else {
        setIsTyping(true);
        setIntroText("Another Text");
        setIndex(0);
      }
    }, 40); // Adjust typing speed here (milliseconds)

    return () => clearInterval(typingInterval);
  }, [index, introText, isTyping]); // Added isTyping to dependencies

  
  return (
    <section className='section' id="home">
      <div className='home'>
        <h2 className="slideIn">Hello , It's Me</h2>
        <h1 className="slideIn text"> <b><span style={{color:'#006494'}}>Ayush</span> Chauhan</b></h1>
        <h2 className="slideIn">I'm a <span style={{color:'#006494'}}>{text}</span></h2>
        <br />
        <p className="slideIn paragraph">Passionate front-end developer with user experiences. Skilled in HTML, CSS, JavaScript, and React, 
                                I strive to create engaging web applications that leave a lasting impression. 
                                Let's collaborate and bring your ideas to life!</p>
      </div>
      <img className='image-animation img' src={ayush} alt=""/>
      

      <div className="social-icons slideIn">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/chauhanayush13/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/chauhan_ayush13/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <button className='resume-button'>Download Resume</button>
      </div>
    </section>
  );
}
