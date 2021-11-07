import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/kale-chips">
                Kale Chips
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/sushi">
                Sushi
            </NavLink>
        </nav>
    )
}
