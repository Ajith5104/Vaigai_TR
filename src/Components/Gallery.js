import React from "react";
import Hyundai from "../assets/cars/Hyundai_Creta.jpg";
import Kia from "../assets/cars/Kia_Seltos.jpg";
import Maruti from "../assets/cars/Maruti_Ertiga.jpg";
import Swift from "../assets/cars/Maruti_Swift.jpg";
import Tata from "../assets/cars/Tata_Punch.jpg";
import Toyota from "../assets/cars/Toyota_Fortuner.jpg";

function Gallery() {
  return (
    <>
      <div className="gallery-section">
        <h2 className="text-center pb-5">Gallery</h2>
        <div className="gallery-section mt-2">
          <div className="row pt-5 gallery-row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Hyundai}
                  className="img-fluid Gallery rounded"
                  alt="Hyundai Creta"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">
                  Hyundai Creta
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Kia}
                  className="img-fluid Gallery rounded"
                  alt="Kia Seltos"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">Kia Seltos</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Maruti}
                  className="img-fluid Gallery rounded"
                  alt="Maruti Ertiga"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">
                  Maruti Ertiga
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Swift}
                  className="img-fluid Gallery rounded"
                  alt="Maruti Swift"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">Maruti Swift</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Tata}
                  className="img-fluid Gallery rounded"
                  alt="Tata Punch"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">Tata Punch</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 service-parent">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Toyota}
                  className="img-fluid Gallery rounded"
                  alt="Toyota Fortuner"
                />
              </div>
              <div className="place-details">
                <p className="text-center fs-5 pt-2 text-white">
                  Toyota Fortuner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
