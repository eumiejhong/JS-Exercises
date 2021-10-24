import React from "react";
import { Link } from "react-router-dom"

export default function NavBar() {

    return (

        <div>
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
    )
};