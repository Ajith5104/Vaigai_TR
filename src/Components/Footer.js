import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
const Footer = () => {
  const year = new Date();
  return (
    <footer className="pt-5 mt-3">
       <div className="container-fluid footer-section container-lg">
           <div className="row local-links">
               <div className="col-md-4">
                    <h3>ADDRESS</h3>
                    <img src={logo} alt="vaigai"/>
               </div>
               <div className="col-md-4">
                     <h3>MAIN LINKS</h3>
                     <ul className="navbar-nav">
                        <li><Link to={"/"} className="nav-link">Home</Link></li>
                        <li><Link to={"/about"} className="nav-link">About</Link></li>
                        <li><Link to={"/servive"} className="nav-link">Servive</Link></li>
                        <li><Link to={"/gallery"} className="nav-link">Gallery</Link></li>
                        <li><Link to={"/contact"} className="nav-link">Contact</Link></li>
                     </ul>
               </div>
               <div className="col-md-4">
                   <h3>TOUR PACKAGES</h3>
                   <ul className="navbar-nav">
                        <li><Link to={"/dindigul-ooty"} className="nav-link">DINDIGUL TO OOTY</Link></li>
                        <li><Link to={"/dindigul-kodaikanal"} className="nav-link">DINDIGUL TO KODAIKANAL</Link></li>
                        <li><Link to={"/dindigul-munnar"} className="nav-link">DINDIGUL TO mUNNAR</Link></li>
                     </ul>
               </div>
           </div>
       </div>
         <div className=" d-md-flex justify-content-between align-items-center">
            <h4 className="p-3">Copyright Vaigai Tour and Travels &copy; {year.getFullYear()} </h4>
            <ul type={"none"}>
                <li className="d-inline-flex p-2"><a href="/"><i class="bi bi-whatsapp fs-5"></i></a></li>
                <li className="d-inline-flex p-2"><a href="/"><i class="bi bi-facebook fs-5"></i></a></li>
                <li className="d-inline-flex p-2"><a href="/"><i class="bi bi-instagram fs-5"></i></a></li>
            </ul>
         </div>
    </footer>
  );
};
export default Footer;
