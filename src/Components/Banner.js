import React from "react";
import { Link } from "react-router-dom";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import ooty from "../assets/ooty-img-4.jpg";
import kodai from "../assets/kodai-4.jpg";
import munnar from "../assets/munnar-4.jpg";

function Banner() {
  return (
    <>
      <div>
        <div className="banner-top-site">
          <div className="slider-img">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active pi">
                  <img src={one} className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Water Falls</h1>
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                  </div>
                </div>
                <div className="carousel-item pi">
                  <img src={two} className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Natural Place</h1>
                    {/* <p>Some representative placeholder content for the second slide.</p> */}
                  </div>
                </div>
                <div className="carousel-item pi">
                  <img src={three} className="d-block w-100 img-fluid" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Beach Place</h1>
                    {/* <p>Some representative placeholder content for the third slide.</p> */}
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="intro-to-top d-flex justify-content-center align-items-center">
            <div>
              <h1>VAIGAI</h1>
              <marquee direction="left">
                <p className="fs-5">Tours & Travels</p>
              </marquee>
            </div>
          </div>
        </div>

        {/* our intro */}

        <div className="our-home-intro my-3">
          <div className="container-md ">
            <h2 className="pt-4 pb-4 text-center">
              Welcome to Vaigai Tours and Travels in Dindigul
            </h2>
            <div className="row">
              <div className="col-md-10 col-sm-12 mx-auto">
                <p className="h5 pt-4 pb-4">
                  Tours and Travels in Dindigul, Tamilnadu
                </p>
                <p>
                  At our tours and travels in Dindigul, we pride ourselves on
                  blending local expertise with global standards, ensuring your
                  exploration of Dindigul is not just a trip but a cultural
                  immersion. Our travel agents in Dindigul are committed to
                  creating personalised itineraries that reflect your interests,
                  whether it’s delving into historical landmarks, savouring
                  local cuisine, or embracing the natural beauty of the region.
                  With meticulous attention to detail, we transform ordinary
                  tours into extraordinary experiences, making us the go-to
                  choice for discerning travellers seeking the best in tours and
                  travel in Dindigul.
                </p>
                <p>
                  We understand that every traveller is unique, and that’s why
                  we go the extra mile to tailor our services to meet your
                  specific preferences. Whether you are a solo adventurer, a
                  couple seeking a romantic getaway, or a family in search of
                  memorable moments, our travel agents in Dindigul are here to
                  curate a journey that suits your style. Choose us for
                  unparalleled tours and travels in Dindigul, where every step
                  is an invitation to discover the essence of this captivating
                  destination.”
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What We Offer */}
        <div className="container my-5">
          <h2 className="text-center p-1">What We Offer</h2>
          <div className="row offer-service">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to={"/dindigul-ooty"}>
                <div className="we-offer">
                  <div className="offer-img">
                    <img src={ooty} alt="vaigai" className="img-fluid" />
                  </div>
                  <div className="offer-details d-flex justify-content-center align-items-center">
                    <h2 className="text-white">Dindigul to Ooty</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to={"/dindigul-kodaikanal"}>
                <div className="we-offer">
                  <div className="offer-img">
                    <img src={kodai} alt="vaigai" className="img-fluid" />
                  </div>
                  <div className="offer-details d-flex justify-content-center align-items-center">
                    <h2 className="text-white">Dindigul to Kodaikanal</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to={"/dindigul-munnar"}>
                <div className="we-offer">
                  <div className="offer-img">
                    <img src={munnar} alt="vaigai" className="img-fluid" />
                  </div>
                  <div className="offer-details d-flex justify-content-center align-items-center">
                    <h2 className="text-white">Dindigul to Munnar</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
