import React from 'react';
import { Link } from 'react-router-dom';
import car from "../assets/car-gif.gif";
import one from "../assets/kodai-1.jpg";
import two from "../assets/kodai-2.jpg";
import three from "../assets/kodai-3.jpg";
import foru from "../assets/kodai-4.jpg";
import five from "../assets/kodai-5.jpg";
import six from "../assets/kodai-6.jpg";
import siven from "../assets/kodai-7.jpg";
import eight from "../assets/kodai-8.jpg";
import nine from "../assets/kodai-9.jpg";

export const Kodaikanal = () => {
  return (
    <div className="kodaikanal-container container-fluid">
      <div className="row top-banner kodaikanal-banner-img">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center top-banner-img">
          <div className="text-center text-md-start">
            <h2 className="text-white">Dindigul to Kodaikanal</h2>
            <p className="text-warning">HOME\ DINDIGUL TO KODAIKANAL</p>
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
        <h2>Dindigul to Kodaikanal</h2>
        <hr />
        <p className="pt-3">
          Embark on enchanting journeys from Dindigul to Kodaikanal and Dindigul 
          to Wayanad with AB Tours and Travels, your esteemed travel agents in Dindigul.
          Immerse yourself in the serene landscapes, cultural richness, and captivating 
          experiences as we curate seamless and unforgettable adventures for you.
        </p>
        
        <div className="row g-3">
          {[one, two, three, foru, five, six, siven, eight, nine].map((img, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <img src={img} alt={`kodaikanal-${index}`} className="img-fluid" />
            </div>
          ))}
        </div>

        <h2 className="pt-5">About Kodaikanal</h2>
        <p>
          Kodaikanal is another popular hill station in Tamil Nadu known 
          for its scenic beauty. It is home to several beautiful lakes,
          waterfalls, and gardens that make it an ideal destination for nature lovers.
        </p>

        {/* kodaikanal-iframe */}
        <div className="row">
          <div className="col-12">
            <iframe
              title="kodaikanal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31410.522368847865!2d77.47772071164096!3d10.236134685165645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0766637f0a0387%3A0x9ffae9373758c13c!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709012663863!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className='view-place pt-4'>
          <h2>More Places To Visit Kodaikanal</h2>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='place-view card p-2'>
                {["Berijam Lake", "Chettiar Park", "Coakers Walk", "Bryant park", "Kodai Lake", "Echo Point", "Kurinjiandavar Temple", "Green Valley View", "Suicide Point", "Pillar Rocks"].map((place, index) => (
                  <p key={index}><i className="bi bi-geo-alt p-4"></i>{place}</p>
                ))}
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='place-view card p-2'>
                {["Silent Valley View", "Cap's Fly", "Devil's Kitchen", "Guna Caves", "Pine Forest", "Shanthi Valley", "Silver Cascade", "Old Suicide Point", "Bear Shola falls", "Wax Museum"].map((place, index) => (
                  <p key={index}><i className="bi bi-geo-alt p-4"></i>{place}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
