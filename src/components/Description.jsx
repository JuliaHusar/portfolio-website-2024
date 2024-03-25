import {useEffect, useRef} from "react";
import "../style.css";



export const Description = () => {
    const descRef = useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            let scrollPosition = window.scrollY;
            let opacity = (scrollPosition / scrollHeight) * 2.4;
            let itemPosition = window.scrollY;

            if(descRef.current){
                let translateXValue = itemPosition * 0.4;
                let limit = 40;

                // Check if the translateX value has reached the limit
                if(translateXValue > limit) {
                    translateXValue = limit;
                }

                descRef.current.style.opacity = opacity;
                descRef.current.style.transform = `translateY(${itemPosition * -0.1}px)`;
                descRef.current.style.transform = `translateX(${translateXValue}px)`;
            }
        }

    }, []);


    return(
        <div className="desc-container">
            <div ref={descRef} className="description">
                <p>Hi, I’m Julia, a fullstack developer.</p>
            </div>
        </div>
    );
};