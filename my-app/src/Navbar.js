import React from "react";
import "./Navbar.css"


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/" title="Homepage">
          Vera Vilas Boas{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="active nav-item">
              <a className="nav-link active" href="./App.js">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./About.js">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" eventKey="link-2" href="./Project.js">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./About.js">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
