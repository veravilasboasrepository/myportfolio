
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default ImageGallery
function ImageGallery() {
  return (

    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/" alt="First slide">
            {" "}
          </img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide">
            {" "}
          </img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide">
            {" "}
          </img>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
