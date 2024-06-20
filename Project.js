import React from 'react'
import './Project.css'
import diabetes from '../img/diabetes.jpg'
import face from '../img/face.jpg'
import textUtils from '../img/textUtils.jpg'
import portfolio from '../img/portfolio.jpg'
import emotion from '../img/emotion.jpg'

export default function Project() {
  return (
    <section>
        <div className="project_page" id="Project">
            <header>
                <h1 className='project_heading'> <b>My <span style={{color:'#006494'}}>Projects</span></b> </h1>
            </header>
            <main>
                <section className="project">
                    <div className="school container4">
                        <img className='diabetes_image' src={diabetes} alt="" />
                        <div className='overlay1'>
                            <div className='text1'>
                                <p className='p'>Diabetes Prediction System</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="school container5">
                        <img className='diabetes_image' src={face} alt="" />
                        <div className='overlay1'>
                            <div className='text1'>
                                <p className='p'>Face Detection</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="school container6">
                        <img className='diabetes_image' src={textUtils} alt="" />
                        <div className='overlay1'>
                            <div className='text1'>
                                <p className='p'>TextUtils-textOperations</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    </div>
    
                    <div className="school container7">
                        <img className='diabetes_image' src={emotion} alt="" />
                        <div className='overlay1'>
                            <div className='text1'>
                                <p className='p'>Emotion Detection</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="school container8">
                        <img className='diabetes_image' src={portfolio} alt="" />
                        <div className='overlay1'>
                            <div className='text1'>
                                <p className='p'>Portfolio Website</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    </div>
                    </section>
            </main>
        </div>
    </section>
  )
}
