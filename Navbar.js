import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#003554'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <b>Portfolio</b></a>
                <button className="navbar-toggler" style={{borderColor:'white' , marginLeft:'320px' , marginTop:'-40px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#about">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#Education">Education</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#Skills">Skills</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#Project">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" style={myStyle} aria-current="page" href="/#Contact">Contact Me</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
    </>
  )
}

const myStyle = {
    color:'white',
    fontSize: "20px",
};
