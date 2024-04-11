import React, { useEffect, useRef } from 'react';

const AboutMe = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            let scrollPosition = window.scrollY;
            let itemPosition = window.scrollY;

            if(aboutRef.current){
                let elementPosition = aboutRef.current.getBoundingClientRect().top;
                let elementHeight = aboutRef.current.offsetHeight;
                let opacity = 0;
                let translateXValue = 40; // Initial translateX value

                if (elementPosition < window.innerHeight && elementPosition + elementHeight > 0) {
                    opacity = (window.innerHeight - elementPosition) / window.innerHeight;
                    translateXValue = 40 - (opacity * 40);
                }

                aboutRef.current.style.opacity = Math.min(opacity, 1);
                aboutRef.current.style.transform = `translateY(${itemPosition * -0.1}px)`;
                aboutRef.current.style.transform = `translateX(${translateXValue}px)`;
            }
        }

        window.addEventListener('scroll', onScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div ref={aboutRef} className="aboutContainer">
            <p>I craft dynamic digital experiences catered to the needs of a business. Let's build something incredible!</p>
        </div>
    );
}

export default AboutMe;