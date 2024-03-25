import {useEffect} from "react";

export const Navbar = () => {
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
            <div className="nav-link"><a href="https://github.com/JuliaHusar/JuliaHusar.github.io">Github</a></div>
            <div className="nav-link"><a href="https://www.linkedin.com/in/julia-husar-3a6661291/">LinkedIn</a></div>
            <div className="nav-link"><a href="">Contact</a></div>
        </div>
);
}