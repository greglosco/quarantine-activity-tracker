import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="ui inverted fluid five item menu">
                <NavLink className="item" activeClassName="active" exact to="/">Homepage</NavLink>
                <NavLink className="item" activeClassName="active" to="/fitnessactivities">Fitness Activities</NavLink>
                <NavLink className="item" activeClassName="active" to="/recipes">Recipes</NavLink>
                <NavLink className="item" activeClassName="active" to="/hobbies">Hobbies</NavLink>
                <NavLink className="item" activeClassName="active" to="/livestreams">Livestreams</NavLink>
        </div> 
    )
}

export default NavBar;