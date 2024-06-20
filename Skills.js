import React from 'react'
import './Skills.css'
export default function Skills() {
  return (
  <section className='Skills_page' id="Skills">
  <div class="container">
    <h1 className='skill-heading'> <b>Skills</b> </h1>
    <div class="skill">
      <div class="skill-name">Programming Languages</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'75%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">HTML</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'90%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">CSS</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'85%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">Java Script</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'75%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">ReactJs</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'70%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">Django</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'75%'}}></div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-name">ML</div>
      <div class="progress-bar">
        <div class="progress" style={{width:'80%'}}></div>
      </div>
    </div>
  </div>
  </section>
  )
}

