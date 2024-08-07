import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="pt-5 mt-3">
      <div className="container-fluid footer-section container-lg">
        <div className="row local-links">
          {/* Address Section */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h3>ADDRESS</h3>
            <img src={logo} alt="vaigai" className="img-fluid" />
          </div>
          
          {/* Main Links Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="text-center text-md-start">MAIN LINKS</h3>
            <ul className="navbar-nav text-center text-md-start">
              <li><Link to={"/"} className="nav-link">Home</Link></li>
              <li><Link to={"/about"} className="nav-link">About</Link></li>
              <li><Link to={"/service"} className="nav-link">Service</Link></li>
              <li><Link to={"/gallery"} className="nav-link">Gallery</Link></li>
              <li><Link to={"/contact"} className="nav-link">Contact</Link></li>
            </ul>
          </div>
          
          {/* Tour Packages Section */}
          <div className="col-12 col-md-4">
            <h3 className="text-center text-md-start">TOUR PACKAGES</h3>
            <ul className="navbar-nav text-center text-md-start">
              <li><Link to={"/dindigul-ooty"} className="nav-link">DINDIGUL TO OOTY</Link></li>
              <li><Link to={"/dindigul-kodaikanal"} className="nav-link">DINDIGUL TO KODAIKANAL</Link></li>
              <li><Link to={"/dindigul-munnar"} className="nav-link">DINDIGUL TO MUNNAR</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <h4 className="p-3 text-center text-md-start">
          Copyright Vaigai Tour and Travels &copy; {year.getFullYear()}
        </h4>
        <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
          <li className="d-inline-flex p-2">
            <a href="/" className="text-dark">
              <i className="bi bi-whatsapp fs-5"></i>
            </a>
          </li>
          <li className="d-inline-flex p-2">
            <a href="/" className="text-dark">
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </li>
          <li className="d-inline-flex p-2">
            <a href="/" className="text-dark">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
