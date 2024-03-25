import {useEffect, useRef} from "react";

export const Contact = () => {
    const contactRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const rect = contactRef.current.getBoundingClientRect();
            const opacity = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight) *1.4);
            contactRef.current.style.opacity = opacity;

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="contact" ref={contactRef}>
            <h1>Contact</h1>
            <p>M: (704) - 557 - 6950</p>
            <p>E: juliahusar03@gmail.com</p>
            <p>Based in Charlotte, NC</p>
        </div>
    );
}