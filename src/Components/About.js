import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about.jpg";

function About() {
  return (
    <>
      <div className="about-section p-3">
        {/* Top Banner Section */}
        <div className="row top-banner-about">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="text-center text-md-left">
              <h2 className="text-white">About Us</h2>
              <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
              <Link to={"/contact"} role="button">
                <button className="btn btn-danger">Book Now</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {/* Uncomment the line below if you want to use the GIF */}
            {/* <img src="/img/car-gif.gif" alt="vaigai" className="img-fluid" /> */}
          </div>
        </div>

        {/* About Us Section */}
        <h2 className="text-center p-3 mt-3 shadow">About Us</h2>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2 className="pt-3 pb-4 text-center text-md-left">VAIGAI TRAVAL</h2>
              <p>
                We are one of the leading cab providers in Chennai with over 30 years of experience in providing services to locals, tourists, and majorly corporates. We offer a wide variety of passenger vehicles to suit all your needs, be it local, airport trips, and even outstation trips. We are driven by our commitment to provide the best customer service and client relations, which has earned us the trust of our esteemed customers for so many years. We work round the clock to provide services with well-groomed drivers backed with well-maintained cars.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={about}
              className="rounded shadow img-fluid"
              alt="vaigai"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
