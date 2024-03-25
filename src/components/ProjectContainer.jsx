import "../style.css";
import {useEffect, useRef, useState} from "react";
import reviewRecordImage from "../assets/review-record.png";
import reviewRecordImage2 from "../assets/review-record2.png";
import reviewRecordImage3 from "../assets/review-record3.png";
import reviewRecordImage4 from "../assets/review-record4.png";
import kindred1 from "../assets/kindred-1.png";
import kindred2 from "../assets/kindred-2.png";
import kindred3 from "../assets/kindred-3.png";
import kindred4 from "../assets/kindred-4.png";
import bikeProject1 from "../assets/Bike-your-way-1.png";
import bikeProject2 from "../assets/Bike-your-way-2.png";
import soundbeans from "../assets/soundbeans1.png";
import {PopUp} from "./PopUp.jsx";

const initialText = "My Work";



const project = {
    name: initialText,
    link: null,
    image: null,
    inProgress: null,
    description: null
}
const projects = [
    project,
    {
        name: "Kindred Website",
        link: 'https://webpages.charlotte.edu/jhusar/itis3135/KindredContent/src/index.html',
        image: [kindred1, kindred2, kindred3, kindred4],
        inProgress: false,
        description: 'Kindred Website: Designed for a Specific part of a church. Collaborated with stakeholders and created using vanilla HTML/CSS/JS.'
    },
    {
        name: "Review that Record",
        link: "https://www.reviewthatrecord.com/",
        image: [reviewRecordImage, reviewRecordImage2, reviewRecordImage3, reviewRecordImage4],
        inProgress: false,
        description: 'Review that Record: A web application that allows users to review and rate their favorite albums. Java/SQL is used for the backend. Functional but UI/UX redesign is planned.'
    },
    {
        name: "Bike Your Way",
        link: null,
        image: [bikeProject1, bikeProject2],
        inProgress: true,
        description: 'A web application that allows users to plan their bike routes. Created in React with Firebase integration. In mid-development.'
    },
    {
        name: "Soundbeans",
        link: null,
        image: [soundbeans],
        inProgress: true,
        description: 'Mobile and Web App that allows users to keep track of new releases regarding their favorite artists. In early development'
    }
]

export const ProjectContainer = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isAboutClicked, setIsAboutClicked] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');
    const secondSectionRef = useRef();
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let secondSectionMiddle = secondSectionRef.current.offsetTop + secondSectionRef.current.offsetHeight / 2;

            if (scrollPosition > secondSectionMiddle) {
                destroyDescription();
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    }
    const onRightClick = () => {
            document.getElementsByClassName('project-image')[0].style.opacity = "0";
        setTimeout(() => {
            setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
            document.getElementsByClassName('project-image')[0].style.opacity = ".75";

        }, 200);
        destroyDescription();

    }
    const onLeftClick = () => {
        let projectImage = document.getElementsByClassName('project-image')[0];
        if(projectImage) {
            projectImage.style.opacity = "0";
        }
        setTimeout(() => {
            setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
            projectImage = document.getElementsByClassName('project-image')[0];
            if(projectImage) {
                projectImage.style.opacity = ".75";
            }
        }, 200);
        destroyDescription();
    }
    function mouseOver(event){
        event.target.style.cursor = "pointer";
        event.target.style.opacity = ".5";
    }

    function mouseOverImage(event){
        mouseOver(event);
        event.target.style.opacity = "1";
    }
    function mouseLeaveImage(event){
        event.target.style.opacity = "0.75";
    }
    function exitPopup(){
        setIsExiting(true);
        document.getElementsByClassName('popup-container')[0].style.opacity = "0";
        document.getElementsByClassName('transparent-background')[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
        setTimeout(() => {
            setIsPopupVisible(false);
            setIsExiting(false);
        }, 400);

    }
    function descriptionBlurb(){
        setIsAboutClicked(true);
        setCurrentDescription(projects[currentProjectIndex].description);

        const newDiv = document.createElement('div');
        newDiv.className = 'actual-description';
        newDiv.textContent = projects[currentProjectIndex].description;
        newDiv.style.opacity = "0";
        newDiv.style.height = "0";

        let descriptionElement = document.getElementsByClassName('desc-container')[0];
        descriptionElement.appendChild(newDiv);
        const heightValue = window.innerWidth * 0.1; // Adjust the multiplier as needed


        // Add a delay to allow the browser to recognize the new element before changing its max-height
        setTimeout(() => {
            newDiv.style.opacity = "1";
            if (window.innerWidth < 800) {
                newDiv.style.height = "25%";
            } else if (window.innerWidth < 1200) {
                newDiv.style.height = "10%";
            } else {
                newDiv.style.height = "8%";
            }

            newDiv.style.transform = "translateY(22%)";
        }, 0);
    }
    function destroyDescription(){
        let descriptionElement = document.getElementsByClassName('actual-description')[0];
        if(descriptionElement) {
            setIsAboutClicked(false);

            descriptionElement.style.opacity = "0";
            descriptionElement.style.height = "0";
            setTimeout(() => {
                descriptionElement.remove();
            }, 500);
        }
    }

    return (
        <div ref={secondSectionRef} className="project-container">
            <svg className="arrow" width="40" height="212" viewBox="0 0 40 212" fill="none"
                 xmlns="http://www.w3.org/2000/svg" onClick={onLeftClick} onMouseOver={mouseOverImage} onMouseLeave={mouseLeaveImage}>
                <path d="M36 2L5 106L36 210" stroke="#F2F4F4" strokeWidth="8"/>
            </svg>
            {projects[currentProjectIndex].name === initialText ? (
                <div className="project-image" style={{opacity: 1}}>
                <div id="default-text">{initialText}</div>
                </div>
            ) : (
                <div className="group-container">
                    <div className="project-name">{projects[currentProjectIndex].name}</div>
                    <div className="inner-class-container">
                        <img src={projects[currentProjectIndex].image[0]} alt="project" className="project-image" style={{opacity: 0.75}} onMouseOver={mouseOverImage} onMouseLeave={mouseLeaveImage} onClick={togglePopup}/>
                    </div>
                    {projects[currentProjectIndex].inProgress ? (
                        <div className="in-progress">
                            <div className="button-box">
                                {!isAboutClicked ? (
                                    <button onClick={descriptionBlurb}>About</button>
                                ) : (
                                    <button onClick={destroyDescription}>About</button>
                                )}
                            </div>
                        </div>
                    ) : (

                        <div className="in-progress">
                            <div className="button-box">
                                <a href={projects[currentProjectIndex].link}
                                   target="_blank">Link</a>
                            </div>
                            <div className="button-box">
                                {!isAboutClicked ? (
                                    <button onClick={descriptionBlurb}>About</button>
                                ) : (
                                    <button onClick={destroyDescription}>About</button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
            {isPopupVisible && (
                <PopUp
                    currentProject={projects[currentProjectIndex]}
                    exitPopup={exitPopup}
                    className={`transparent-background ${isExiting ? 'exiting' : ''}`}
                />
            )}
            <svg className="arrow" width="40" height="212" viewBox="0 0 40 212" fill="none"
                 xmlns="http://www.w3.org/2000/svg" onClick={onRightClick} onMouseOver={mouseOverImage} onMouseLeave={mouseLeaveImage}>
                <path d="M4 2L35 106L4 210" stroke="#F2F4F4" strokeWidth="8"/>
            </svg>
        </div>
    );
}