import {useEffect, useState} from "react";
import { navLinks } from "../constants";

//navBar scrolling to sections
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    //three parts to nav bar
    //Top Left: my name that returns to Hero/landing section
    //Middle: Different buttons that will scroll to desired section
    //Top Right: Button to take you to a Contact me location
    return ( 
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Harkeerat Lit
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>

        </header>
     );
}
 
export default NavBar;