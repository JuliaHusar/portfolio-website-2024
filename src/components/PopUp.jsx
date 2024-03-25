import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {ProjectContainer} from "./ProjectContainer.jsx";

export const PopUp = ({currentProject, exitPopup}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [currentProjectImage, setCurrentProjectImage] = useState(currentProject.image[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
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
    function rightClick(){
        if(currentImageIndex === currentProject.image.length){
            setCurrentProjectImage(currentProject.image[0]);
            setCurrentImageIndex(1);
            return;
        }
        setCurrentImageIndex(currentImageIndex+1);
        setCurrentProjectImage(currentProject.image[currentImageIndex]);
    }
    function leftClick(){
        setCurrentImageIndex(currentImageIndex-1);
        setCurrentProjectImage(currentProject.image[currentImageIndex-2]);

        if (currentImageIndex === 1){
            setCurrentProjectImage(currentProject.image[currentProject.image.length-1]);
            setCurrentImageIndex(currentProject.image.length);
        }
    }

    const rightImage = () => {
      return(
          <div className="right-arrow" onMouseOver={mouseOverImage} onClick={rightClick} onMouseLeave={mouseLeaveImage}>
              <svg width="36" height="65" viewBox="0 0 36 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L32.5 32.5L1.5 63.5" stroke="white" strokeWidth="4"/>
              </svg>
          </div>
      );
    };
    const leftImage = () => {
        return(
            <div className="left-arrow" onMouseOver={mouseOverImage} onClick={leftClick} onMouseLeave={mouseLeaveImage}>
                <svg width="36" height="65" viewBox="0 0 36 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5 1.5L3.5 32.5L34.5 63.5" stroke="white" strokeWidth="4"/>
                </svg>
            </div>
        )
    }

    useEffect(() => {
        setIsVisible(true);
        return () => {

        };
    }, []);
    return (
        <div className={`transparent-background ${isVisible ? 'visible' : ''}`}>
            <div className="popup-container">
                {leftImage()}
                <svg width="40" height="40" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg"
                     id="x-button" onClick={exitPopup}>
                <circle cx="51" cy="51" r="51" fill="#FFFFFF"/>
                    <path d="M24 24.5L78 78.5" stroke="black" strokeWidth="4"/>
                    <path d="M78 24L24 78" stroke="black" strokeWidth="4"/>
                </svg>

                <div className="popup-content">
                    <img src={currentProjectImage} alt="project" className="popup-image"/>
                </div>
                {rightImage()}
            </div>
        </div>
    );
};
PopUp.propTypes = {
    currentProject: PropTypes.shape({
        image: PropTypes.array,
    }),
    exitPopup: PropTypes.func.isRequired,
};