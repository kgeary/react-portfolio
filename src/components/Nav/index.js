import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-md p-0">
        <div className="container px-0">
          <div className="navbar-brand h1">Kevin Geary</div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;