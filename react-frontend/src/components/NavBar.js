import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink className="nav-link" activeClassName="active" exact to="/">Homepage</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/fitnessactivities">Fitness Activities</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/recipes">Recipes</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/hobbies">Hobbies</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/livestreams">Livestreams</NavLink>
        </div> 
    )
}

export default NavBar;