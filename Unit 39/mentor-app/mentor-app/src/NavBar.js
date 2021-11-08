import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const HamburgerMenu = ({ open, toggle, hover, bold, unhover }) => {
    const className = 'hamburger' + (open ? ' open' : '');
    const hoverName = 'hamburgerLine' + (bold ? ' bold' : '')

    return (
        <div className={className} onClick={toggle} onMouseEnter={hover} onMouseLeave={unhover}>
            <div className={hoverName}></div>
            <div className={hoverName}></div>
            <div className={hoverName}></div>
        </div>
    )
}


export default function NavBar({isHidden, toggle}) {
    const [isHover, setHover] = useState(true);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    return (
        <>
            <HamburgerMenu toggle={toggle} open={!isHidden} hover={handleMouseOver} unhover={handleMouseOut} bold={isHover} />
            <div className={isHidden ? "hidden" : null}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};