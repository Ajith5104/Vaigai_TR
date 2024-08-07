import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import car from "../assets/car-gif.gif";
import one from "../assets/ooty-img.jpg";
import two from "../assets/ooty-img-2.jpg";
import three from "../assets/ooty-img-3.jpg";
import four from "../assets/ooty-img-4.jpg";
import five from "../assets/ooty-img-5.jpg";
import six from "../assets/ooty-img-6.jpg";
import siven from "../assets/ooty-img-7.jpg";
import eight from "../assets/ooty-img-8.jpg";
import nine from "../assets/ooty-img-9.png";

const Ooty = () => {
  return (
    <div className="ooty-container container-fluid">
      <div className="row top-banner">
        <div className="top-banner-img col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <div className="text-center text-md-start">
            <h2 className="text-white">Dindigul to Ooty</h2>
            <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
            <Link to="/contact" role="button">
              <button className="btn btn-danger">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={car} alt="car" className="img-fluid" />
        </div>
      </div>
      
      <div className="container-md pt-5">
        <h2>Dindigul to Ooty</h2>
        <hr />
        <div className="place-details">
          <p className="pt-3">
            Embark on a picturesque voyage from Dindigul to Ooty with AB Tours
            and Travels, your reliable travel agents in Dindigul. Our expertly
            crafted travel packages ensure a seamless transition from the
            historic landscapes of Dindigul to the captivating beauty of Ooty,
            making your journey as memorable as the destinations themselves.
          </p>
          <div className="row">
            {[one, two, three, four, five, six, siven, eight, nine].map((img, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
                <img src={img} alt={`place-${index}`} className="img-fluid" />
              </div>
            ))}
          </div>
          <h2 className="pt-5">About Ooty</h2>
          <p>
            Ooty, also known as Udhagamandalam, is a picturesque hill station
            located in the southern state of Tamil Nadu, India. It is a popular
            destination among tourists due to its pleasant climate, scenic
            beauty, and a range of outdoor activities. Here are some of the top
            visiting places in Ooty that you can include in your tour and travel
            website.
          </p>
          <div className="row">
            <div className="col-12 col-md-10 pt-3">
              <iframe
                title="ooty-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62575.032789490404!2d76.65222163242208!3d11.411933863388231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708876416152!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ooty;
