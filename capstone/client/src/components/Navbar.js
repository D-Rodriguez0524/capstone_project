import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="Navbar">
      <div className="MenuIcon" onClick={toggleMenu}>
        <div className={`Bar ${showMenu ? "RotateBar1" : ""}`}></div>
        <div className={`Bar ${showMenu ? "HideBar2" : ""}`}></div>
        <div className={`Bar ${showMenu ? "RotateBar3" : ""}`}></div>
      </div>
      <div className={`NavbarLinks ${showMenu ? "ShowMenu" : ""}`}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/movies">
          Movies
        </NavLink>
        <NavLink exact to="/people">
          People
        </NavLink>
        <NavLink exact to="/starships">
          Starships
        </NavLink>
        <NavLink exact to="/planets">
          Planets
        </NavLink>
        <NavLink exact to="/vehicles">
          Vehicles
        </NavLink>
        <NavLink exact to="/species">
          Species
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink exact to="/logout">
              Logout
            </NavLink>
            <NavLink exact to="/profile">
              Profile
            </NavLink>
          </>
        ) : (
          <>
            <NavLink exact to="/signup">
              SignUp
            </NavLink>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
