import React from 'react';
import { Link } from 'react-router-dom';
import car from "../assets/car-gif.gif";
import one from "../assets/munnar-1.jpg";
import two from "../assets/munnar-2.jpg";
import three from "../assets/munnar-3.jpg";
import foru from "../assets/munnar-4.jpg";
import five from "../assets/munnar-5.jpg";
import six from "../assets/munnar-6.jpg";
import siven from "../assets/munnar-7.jpg";
import eight from "../assets/munnar-8.jpg";
import nine from "../assets/munnar-9.jpeg";

export const Munnar = () => {
  return (
    <div className="container-fluid">
      <div className="row top-banner munnar-banner-img">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center top-banner-img">
          <div className="text-center text-md-left">
            <h2 className="text-white">Dindigul to Munnar</h2>
            <p className="text-warning">HOME \ DINDIGUL TO MUNNAR</p>
            <Link to={"/contact"} role="button">
              <button className="btn btn-danger">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={car} alt="car" className="img-fluid" />
        </div>
      </div>

      <div className="container-md pt-5">
        <h2>Dindigul to Munnar</h2>
        <hr />
        <p className="pt-3">
          Embark on a journey from the historic charm of Dindigul to the serene landscapes of Munnar with AB Tours and Travels, your esteemed travel agents in Dindigul. Immerse yourself in the natural beauty and cultural richness as we guide you through this enchanting route.
        </p>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={one} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={two} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={three} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={foru} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={five} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={six} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={siven} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={eight} alt="Munnar" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <img src={nine} alt="Munnar" className="img-fluid rounded" />
          </div>
        </div>

        <h2 className="pt-5">About Munnar</h2>
        <p>
          Munnar is a picturesque hill station located in the southern state of Kerala, India. It is a popular destination among tourists due to its pleasant climate, scenic beauty, and a range of outdoor activities.
        </p>

        <div className="row">
          <div className="col-12">
            <iframe
              title="munnar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.898588227436!2d77.05387816163588!3d10.080670516990306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099a6d%3A0x63250e5553c7e0c!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1709016851400!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="view-place pt-4">
          <h2>More Places To Visit Munnar</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="place-view card p-2">
                <p><i className="bi bi-geo-alt p-4"></i>Tea Gardens</p>
                <p><i className="bi bi-geo-alt p-4"></i>Eravikulam National Park</p>
                <p><i className="bi bi-geo-alt p-4"></i>Anamudi Peak</p>
                <p><i className="bi bi-geo-alt p-4"></i>Mattupetty Dam</p>
                <p><i className="bi bi-geo-alt p-4"></i>Attukal Waterfalls</p>
                <p><i className="bi bi-geo-alt p-4"></i>Echo Point</p>
                <p><i className="bi bi-geo-alt p-4"></i>Nyayamakad Waterfalls</p>
                <p><i className="bi bi-geo-alt p-4"></i>Top Station</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="place-view card p-2">
                <p><i className="bi bi-geo-alt p-4"></i>Pothamedu Viewpoint</p>
                <p><i className="bi bi-geo-alt p-4"></i>Kundala Dam</p>
                <p><i className="bi bi-geo-alt p-4"></i>Rose Gardens</p>
                <p><i className="bi bi-geo-alt p-4"></i>Chinnar Wildlife Sanctuary</p>
                <p><i className="bi bi-geo-alt p-4"></i>Marayoor Sandalwood Forest</p>
                <p><i className="bi bi-geo-alt p-4"></i>Lockhart Gap</p>
                <p><i className="bi bi-geo-alt p-4"></i>Cheeyappara Waterfalls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
