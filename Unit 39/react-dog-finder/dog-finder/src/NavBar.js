import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar({dogs}) {
    return (
        <nav className="NavBar">
            <NavLink to="/dogs">
                Home
            </NavLink>
            {dogs.map((dog) => <NavLink to={`/dogs/${dog.src}`} key={dog.src}>
                {dog.name}
            </NavLink>)}
        </nav>
    )
}
