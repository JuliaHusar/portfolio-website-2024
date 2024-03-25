import "../style.css";
import {useEffect, useRef} from "react";

export const DownButton = () => {
    const buttonRef = useRef(null);
    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    }

    useEffect(() => {
        const onScroll = () => {
            let scrollHeight = document.documentElement.scrollHeight;
            let scrollPosition = window.innerHeight + window.scrollY;
            let opacity = 1.6 - (scrollPosition / scrollHeight) / 0.6;
            let itemPosition = window.scrollY;
            console.log("event firing")

            if(buttonRef.current){
                buttonRef.current.style.opacity = opacity;
                buttonRef.current.style.transform = `translateY(${itemPosition * -0.1}px)`;
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []);

    return (
        <div ref={buttonRef} onClick={handleClick} className="down-button">
            <div className="overlap-group">
                <svg width="100" height="52" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 15L50 47L97 15" stroke="#242624" strokeWidth="8"/>
                    <path d="M10 4L49.5 31L89 4" stroke="#242624" strokeWidth="8"/>
                </svg>
            </div>
        </div>
    );
};