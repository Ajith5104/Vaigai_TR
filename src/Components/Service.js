import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/car-gif.gif";
import wedding from "../assets/wedding.jpeg";

function Service() {
  return (
    <>
      <div className="service container-fluid">
        <div className="row top-banner align-items-center">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
            <div>
              <h2 className="text-white">Service</h2>
              <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
              <Link to="/contact" role="button">
                <button className="btn btn-danger">Book Now</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={car} alt="vaigai" className="img-fluid" />
          </div>
        </div>
        <h2 className="text-center pb-4 mt-4">VAIGAI TRAVEL SERVICE</h2>
        <div className="service-section container-fluid py-3">
          <div className="row">
            {/* First Row */}
            {Array(3).fill().map((_, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={`first-row-${index}`}>
                <div className="service-main">
                  <div className="container-service rounded" id="image-slide">
                    <div className="service-img">
                      <img src={wedding} className="rounded img-fluid" alt="vaigai" />
                    </div>
                    <div className="service-details rounded d-flex justify-content-center align-items-center">
                      <div>
                        <h2 className="text-center">Details</h2>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, blanditiis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="row mt-3">
            {Array(3).fill().map((_, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={`second-row-${index}`}>
                <div className="service-main">
                  <div className="container-service rounded" id="image-slide">
                    <div className="service-img">
                      <img src={wedding} className="rounded img-fluid" alt="vaigai" />
                    </div>
                    <div className="service-details rounded d-flex justify-content-center align-items-center">
                      <div>
                        <h2 className="text-center">Details</h2>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, blanditiis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
