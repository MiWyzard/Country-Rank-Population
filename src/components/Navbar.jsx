import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ComparisonForm">Comparison</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
};