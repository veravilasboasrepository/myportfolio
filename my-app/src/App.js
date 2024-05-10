import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import About from "./about";
import Project from "./Project"

export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/035/666/737/non_2x/black-minimalist-logo-sample-for-brands-on-a-transparent-background-free-png.png"
          className="logo img-fluid"
          alt="logo"
        />
      </header>

      <div>
        <Navbar/>
        <Route path="/About" component={About} />
        <Route path="/Project" component={Project} />
      </div>

      <main>
        <div className="container">
          <h1>👋 Hello, I'm</h1>
          <h1 className="mb-5"> Vera Vilas Boas</h1>
          <h2 className="mb-5"> Front end developer from portugal</h2>
          <a href="/contact.html" class="btn btn-branding-outline">
            Contact me
          </a>
        </div>

        <div class="container">
          <div class="row mt-5 mb-5">
            <div className="col d-none d-lg-block">
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                className="img-fluid rounded"
                alt="imageporfolio"
                rel="noreferrer"
              />
            </div>
            <div className="col">
              <div className="project-desciption">
                <h2 className="mb-5">XX project</h2>
                <p className="mb-5 text-muted">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by
                </p>
                <a href="./About.js" className="btn btn-branding-outline">
                  {" "}
                  Learn more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container">
        <div className="contact-box justify-content-between mb-4 d-none d-md-flex">
          <div>
            <h4>Work Inquiry</h4>
            <p className="text-muted">Let's work together</p>
          </div>
          <div>
            <a href="./contact.js" className="btn btn-branding mt-3">
              {" "}
              Contact me{" "}
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <a href="mailto:veravilasboas@outlook.pt" class="email-link">
            VeraVilasBoas
          </a>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a
            href="https://github.com/veravilasboasrepository/myportfolio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instragram.com/Verah"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com/Vera"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
