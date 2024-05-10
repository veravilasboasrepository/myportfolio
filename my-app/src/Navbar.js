import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </div>
  );
}