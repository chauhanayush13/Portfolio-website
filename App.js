import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/> 
    </>
  );
}

export default App;
