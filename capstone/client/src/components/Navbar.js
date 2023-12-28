import React from "react";
import { NavLink } from "react-router-dom";
import '../Navbar.css';


const Navbar = () => {



    return (
        <nav className="Navbar">

            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/movies'>Movies</NavLink>
            <NavLink exact to='/people'>People</NavLink>
            <NavLink exact to='/starships'>Starships</NavLink>
            <NavLink exact to='/planets'>Planets</NavLink>
            <NavLink exact to='/vehicles'>Vehicles</NavLink>
            <NavLink exact to='/species'>Species</NavLink>
            <NavLink exact to='/signup'>SignUp</NavLink>
            <NavLink exact to="/login">Login</NavLink>
            {/* {
                isAuthenticated ?
                    <><NavLink exact to='/signup'>SignUp</NavLink>
                        <NavLink exact to="/login">Login</NavLink></> :
                    <NavLink exact to='/logout'>Logout</NavLink>
            } */}

        </nav>
    )
}

export default Navbar;