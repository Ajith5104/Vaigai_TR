import React from "react";
import {Link} from "react-router-dom";
import about from "../assets/about.jpg"

function About() {
  return (
    <>
      <div className="about-section p-3">
      <div className="row top-banner-about ">
        <div className="top-banner-img col-md-6 d-flex justify-content-sm-start justify-content-md-center  align-items-center">
          <div>
            <h2 className="text-white">About Us</h2>
            <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
            <Link to={"/contact"} role="button"><button className="btn btn-danger" >Book Now</button></Link>
          </div>
        </div>
        <div className="col-md-6  d-flex justify-content-sm-start justify-content-md-center  align-items-center">
          {/* <img src="/img/car-gif.gif"  alt="vaigai" /> */}
        </div>
      </div>
        <h2 className="text-center p-3 mt-3 shadow">About Us</h2>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="">
              <h2 className="pt-3 pb-4 text-center">VAIGAI TRAVAL</h2>
              <p>
                We are one of the leading cab providers in Chennai with over 30
                years of experience in providing services to locals, tourists
                and majorly corporates. We offer a wide variety of passenger
                vehicles to suit all your needs be it local, airport trips and
                even outstation trips. We are driven by our commitment to
                provide the best customer service and client relations which has
                earned us the trust of our esteemed customers for so many years.
                We work round the clock to provide services with well-groomed
                drivers backed with well-maintained cars.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center ">
            <img
              src={about}
              className="rounded shadow"
              height="400"
              width="100%"
              alt="vaigai"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
