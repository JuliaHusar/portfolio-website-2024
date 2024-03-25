
import './App.css'
import React from 'react'
import {Title} from "./components/TitleComponent.jsx";
import {DownButton} from "./components/DownButtonComponent.jsx";
import {Description} from "./components/Description.jsx";
import {ProjectContainer} from "./components/ProjectContainer.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Contact} from "./components/Contact.jsx";

function App() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollHeight = window.document.body.scrollHeight;
        const scrollPosition = window.scrollY;
        const opacity = (scrollPosition / scrollHeight)*3;
        if(navbar){
            navbar.style.opacity = opacity;
        }
    });

  return (
    <div>
        <div id="first-section">
            <Title />
            <DownButton />
        </div>
        <div className="navbar fixed">
            <Navbar/>
        </div>
        <div id="second-section">
            <Description/>
            <div id="project-location">
                <ProjectContainer/>
            </div>
        </div>
        <div id="third-section">
          <div id="contact-container">
              <Contact/>
          </div>
        </div>
    </div>
  )
}

export default App
