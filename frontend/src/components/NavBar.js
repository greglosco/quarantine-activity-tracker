import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/fitnessactivities">Fitness Activities</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/hobbies">Hobbies</NavLink>
            <NavLink to="/livestreams">Livestreams</NavLink>
        </div>
    )
}

export default NavBar;