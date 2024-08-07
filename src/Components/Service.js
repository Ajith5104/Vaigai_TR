import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/car-gif.gif";
import wedding from "../assets/wedding.jpeg";

function Service() {
  return (
    <div className="service container-fluid">
      {/* Top Banner */}
      <div className="d-flex flex-column flex-md-row top-banner align-items-center">
        <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-grow-1 p-4">
          <div>
            <h2 className="text-white">Service</h2>
            <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
            <Link to="/contact" role="button">
              <button className="btn btn-danger">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-grow-1 p-4">
          <img src={car} alt="vaigai" className="img-fluid" />
        </div>
      </div>

      {/* Main Content */}
      <h2 className="container text-center pb-4 mt-4">VAIGAI TRAVEL SERVICE</h2>
      <div className="service-section container-fluid py-3">
        {/* First Row */}

        {/* <div className="d-flex flex-wrap justify-content-around mt-3 ">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center mb-4 p-3"
                style={{
                  maxWidth: "300px",
                  flex: "1 1 auto",
                  minWidth: "250px",
                }}
                key={`second-row-${index}`}
              >
                <div className="service-main">
                  <div className="container-service rounded" id="image-slide">
                    <div className="service-img">
                      <img
                        src={wedding}
                        className="rounded img-fluid"
                        alt="vaigai"
                      />
                    </div>
                    <div className="service-details rounded d-flex justify-content-center align-items-center">
                      <div>
                        <h2 className="text-center">Details</h2>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, blanditiis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div> */}

        {/* Second Row */}
        {/* <div className="d-flex flex-wrap justify-content-around mt-3 ">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center mb-4 p-3"
                style={{
                  maxWidth: "300px",
                  flex: "1 1 auto",
                  minWidth: "250px",
                }}
                key={`second-row-${index}`}
              >
                <div className="service-main">
                  <div className="container-service rounded" id="image-slide">
                    <div className="service-img">
                      <img
                        src={wedding}
                        className="rounded img-fluid"
                        alt="vaigai"
                      />
                    </div>
                    <div className="service-details rounded d-flex justify-content-center align-items-center">
                      <div>
                        <h2 className="text-center">Details</h2>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto, blanditiis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}

export default Service;
