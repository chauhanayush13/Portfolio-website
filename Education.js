import React from 'react'
import './Education.css'
export default function Education() {
  return (
    <section>
        <div className="education-page" id="Education">
            <header>
                <h1> <b>My <span style={{color:'#006494'}}>Education</span></b> </h1>
            </header>
            <main>
                <section className="education">
                    <div className="school container1">
                        <h2 className='mbit'>MBIT college</h2>
                        <div className='overlay'>
                            <div className='text1'>
                                <p style={{marginLeft:'90px'}}>B.E IN</p>
                                <p>Information Technology</p>
                                <p>Graduation Year : 2025</p>
                                <p style={{marginLeft:'60px'}}>CGPA : 8.63</p>
                            </div>
                        </div>
                    </div>

                    <div className="school container2">
                        <h2 className='HSC'>Aryam Educational Ecademy</h2>
                        <div className='overlay'>
                            <div className='text1'>
                                <p className='para'>Higher Secondery  Education<br />
                                Borard <br />(H.S.C) :- 2020-21 <br /> Percentage : 87.4%</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="school container3">
                        <h2 className='SSC'>Tapovan Vidhyaalay</h2>
                        <div className='overlay'>
                            <div className='text1'>
                                <p className='para'>Secondery  School Education<br />
                                Borard <br />(S.S.C) :- 2018-19 <br /> Percentage : 80.34%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </section>
  )
}
