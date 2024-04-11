import {useEffect} from "react";

export const Navbar = () => {
    const scrollToContact = () => {
        const contact = document.getElementById('fourth-section');
        contact.scrollIntoView({behavior: "smooth"});
    }
    useEffect(() => {
        const nav = document.querySelector('.navbar');
        const section2 = document.getElementById('second-section');
        const section1 = document.getElementById('first-section');
        const fixNav = () => {
            if(window.scrollY >= document.getElementsByClassName('navbar')[0].offsetTop) {
                nav.classList.add('fixed-nav');
                section2.style.paddingTop = `${nav.offsetHeight}px`;
                console.log("fixed");
            }
            if(window.scrollY <= section1.offsetHeight){
                nav.classList.remove('fixed-nav');
                section2.style.paddingTop = '0';
            }
        }

        window.addEventListener('scroll', fixNav);
        return () => window.removeEventListener('scroll', fixNav);
    }, []);
return (
        <div className="nav-container">
            <div className="nav-link"><a href="https://github.com/JuliaHusar">Github</a></div>
            <div className="nav-link"><a href="https://www.linkedin.com/in/julia-husar-3a6661291/">LinkedIn</a></div>
            <div className="nav-link"><a href="javascript:void(0)" onClick={scrollToContact}>Contact</a></div>
        </div>
);
}