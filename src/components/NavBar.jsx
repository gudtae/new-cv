import React, { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    let Link = Scroll.Link;
    let Button = Scroll.Button;
    let Element = Scroll.Element;
    let Events = Scroll.Events;
    let scroll = Scroll.animateScroll;
    let scrollSpy = Scroll.scrollSpy;
    return (
        <nav className={`${sticky ? "sticky" : ""}`} id="navbar">
            <div className="nav-items">
                <Link activeClass="active" spy={true} smooth='easeOutQuad' offset={1} duration={500} to='About' className="nav-item">
                    About
                </Link>
                <Link to='Experience' className="nav-item" activeClass="active" spy={true} smooth='easeOutQuad' offset={1} duration={500} >
                    Experience
                </Link>
                <Link to='Publication' className="nav-item" activeClass="active" spy={true} smooth='easeOutQuad' offset={1} duration={500}>
                    Publication
                </Link>
            </div>
        </nav>
    )
}

export default NavBar