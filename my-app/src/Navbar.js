import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default Navbar;
function Navbar() {
  return (
    <div>
      <Link to="/About">About</Link>
      <Link to="/Project">Project</Link>
    </div>
  );
}