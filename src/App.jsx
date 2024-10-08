import './App.css';
import { Title } from "./components/TitleComponent.jsx";
import { DownButton } from "./components/DownButtonComponent.jsx";
import { Description } from "./components/Description.jsx";
import { ProjectContainer } from "./components/ProjectContainer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Contact } from "./components/Contact.jsx";
import AboutMe from "./components/AboutMe.jsx";
import { ComputerIcon } from "./components/ComputerIcon.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RuinTheAuxPrivacy } from "./components/RuinTheAuxPrivacy.jsx";

function App() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollHeight = window.document.body.scrollHeight;
        const scrollPosition = window.scrollY;
        const opacity = (scrollPosition / scrollHeight) * 3;
        if (navbar) {
            navbar.style.opacity = opacity;
        }
    });

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <div id="first-section">
                            <Title />
                            <DownButton />
                        </div>
                        <div className="navbar fixed">
                            <Navbar />
                        </div>
                        <div id="second-section">
                            <Description />
                            <div id="project-location">
                                <ProjectContainer />
                            </div>
                        </div>
                        <div id="third-section">
                            <AboutMe />
                            <ComputerIcon />
                        </div>
                        <div id="fourth-section">
                            <Contact />
                        </div>
                    </div>
                } />
                <Route path="/RuinTheAuxPrivacyPolicy" element={<RuinTheAuxPrivacy/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;