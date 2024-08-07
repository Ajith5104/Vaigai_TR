import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            className="rounded brand-vaigai-travel"
            height="65"
            alt="vaigai travel"
          />
        </div>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-target="#vaigai"
          data-bs-toggle="collapse"
          aria-controls="vaigai"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="vaigai">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link fs-5">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link fs-5">
                Service
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle fs-5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinations
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/dindigul-ooty" className="dropdown-item">
                    Dindigul to Ooty
                  </Link>
                </li>
                <li>
                  <Link to="/dindigul-kodaikanal" className="dropdown-item">
                    Dindigul to Kodaikanal
                  </Link>
                </li>
                <li>
                  <Link to="/dindigul-munnar" className="dropdown-item">
                    Dindigul to Munnar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link fs-5">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fs-5">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
