import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/car-gif.gif";
import wedding from "../assets/wedding.jpeg";


function Service() {
  return (
    <>
      <div className="service container-fluid">
      <div className="row top-banner ">
        <div className="top-banner-img col-md-6 d-flex justify-content-sm-start justify-content-md-center  align-items-center">
          <div>
            <h2 className="text-white">Service</h2>
            <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
            <Link to={"/contact"} role="button"><button className="btn btn-danger" >Book Now</button></Link>
          </div>
        </div>
        <div className="col-md-6  d-flex justify-content-sm-start justify-content-md-center  align-items-center">
          <img src={car}  alt="vaigai" />
        </div>
      </div>
        <h2 className="text-center pb-4 mt-4">VAIGAI TRAVAL SERVICE</h2>
        <div className="service-section container-fluid py-3">
           <div className="first-section" >
               <div className="service-main" >
                <div className="container-service rounded " id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>
               <div className="service-main" >
                <div className="container-service rounded" id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>
               <div className="service-main" >
                <div className="container-service rounded" id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>  
           </div>
           {/* secount row */}
           <div className="first-section mt-3" >
               <div className="service-main" >
                <div className="container-service rounded " id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>
               <div className="service-main" >
                <div className="container-service rounded" id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>
               <div className="service-main" >
                <div className="container-service rounded" id="image-slide">
                  <div className="service-img">
                       <img src={wedding} className="rounded" alt="vaigai"/>
                  </div>
                  <div className="service-details rounded d-flex justify-content-center align-items-center">
                        <div>
                          <h2 className="text-center">Ajith Kumar</h2>
                          <p className="text-center">
                             Lorem ipsum dolor sit amet consectetur 
                             adipisicing elit. Architecto, blanditiis.
                          </p>
                        </div>
                  </div>
               </div>
               </div>  
           </div>
      </div>
      </div>
    </>
  );
}

export default Service;
