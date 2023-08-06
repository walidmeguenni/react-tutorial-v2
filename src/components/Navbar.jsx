import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
