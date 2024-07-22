import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light p-3">
        <div className="container-fluid">
          <div>
            <img
              src={logo}
              className="rounded brand-vaigai-travel"
              height="65"
              alt="vaigai traval"
            />
          </div>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-target="#vaigai"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="vaigai">
            <ul className="navbar-nav ms-auto">
              <i className="nav-item">
                <Link to={"/"} className="nav-link fs-5">
                  Home
                </Link>
              </i>
              <i className="nav-item">
                <Link to={"/about"} className="nav-link fs-5">
                  About
                </Link>
              </i>
              <i className="nav-item">
                <Link to={"/service"} className="nav-link fs-5">
                  Service
                </Link>
              </i>
              <i className=" nav-item fs-5 nav-link px-3 "  >
              <div class="dropdown">
  <span class=" dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </span>
  <ul class="dropdown-menu">
    <li><Link  to={"/dindigul-ooty"} className="dropdown-item">Dindigul to Ooty</Link></li>
    <li><Link  to={"/dindigul-kodaikanal"} className="dropdown-item">Dindigul to Kodaikanal</Link></li>
    <li><Link  to={"/dindigul-munnar"} className="dropdown-item">Dindigul to Munnar</Link></li>
  </ul>
</div>
              </i>
              <i className="nav-item">
                <Link to={"/gallery"} className="nav-link fs-5">
                  Gallery
                </Link>
              </i>
              <i className="nav-item">
                <Link to={"/contact"} className="nav-link fs-5">
                  Contact Us
                </Link>
              </i>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
