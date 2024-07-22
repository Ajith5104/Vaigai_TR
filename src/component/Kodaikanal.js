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
      <div className="top-banner-img col-md-6 d-flex justify-content-sm-start justify-content-md-center  align-items-center">
        <div>
          <h2 className="text-white">Dindigul to Kodaikanal</h2>
          <p className="text-warning">HOME\ DINDIGUL TO KODAIKANAL</p>
          <Link to={"/contact"} role="button"><button className="btn btn-danger" >Book Now</button></Link>
        </div>
      </div>
      <div className="col-md-6  d-flex justify-content-sm-start justify-content-md-center  align-items-center">
        <img src={car}  alt="vaigai" />
      </div>
    </div>
    <div className="container-md pt-5">
      <h2>Dindigul to Kodaikanal</h2>
      <hr />
      <div className="place-details">
        <p className="pt-3">
        Embark on enchanting journeys from Dindigul to Kodaikanal and Dindigul 
        to Wayanad with AB Tours and Travels, your esteemed travel agents in Dindigul.
         Immerse yourself in the serene landscapes, cultural richness, and captivating 
         experiences as we curate seamless and unforgettable adventures for you.
        </p>
        <div className="details-place">
          <div className="place-image">
            <img src={one} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={two} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={three} alt="vaigai" />
          </div>
        </div>
        <div className="details-place mt-3">
          <div className="place-image">
            <img src={foru} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={five} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={six} alt="vaigai" />
          </div>
        </div>
        <div className="details-place mt-3">
          <div className="place-image">
            <img src={siven} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={eight} alt="vaigai" />
          </div>
          <div className="place-image">
            <img src={nine} alt="vaigai" />
          </div>
        </div>
        <h2 className="pt-5">About Kodaikanal</h2>
        <p>
        Kodaikanal is another popular hill station in Tamil Nadu known 
        for its scenic beauty. It is home to several beautiful lakes,
         waterfalls, and gardens that make it an ideal destination for nature lovers.
        </p>
        {/* kodaikanal-iframe */}
        <div className="row">
            <div className="col-md-10 pt-3">
              <iframe title="kodaikanal" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31410.522368847865!2d77.47772071164096!3d10.236134685165645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0766637f0a0387%3A0x9ffae9373758c13c!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709012663863!5m2!1sen!2sin" width="100%" height="450" style={{border:"0",borderRadius:"10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          
            </div>
        </div>
        <div className='view-place pt-4'>
              <h2>More Places To Visit Kodaikanal</h2>
              <div className='row'>
                  <div className='col-md-6'>
                       <div className='place-view card p-2'>
                            <p><i class="bi bi-geo-alt p-4"></i>Berijam Lake</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Chettiar Park</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Coakers Walk</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Bryant park</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Kodai Lake</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Echo Point</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Kurinjiandavar Temple</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Green Valley View</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Suicide Point</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Pillar Rocks</p>
                       </div>
                  </div>
                  <div className='col-md-6'>
                        <div className='place-view card p-2'>
                            <p><i class="bi bi-geo-alt p-4"></i>Silent Valley View</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Cap's Fly</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Devil's Kitchen</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Guna Caves</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Pine Forest</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Shanthi Valley</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Silver Cascade</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Old Suicide Point</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Bear Shola falls</p>
                            <p><i class="bi bi-geo-alt p-4"></i>Wax Museum</p>
                        </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
  )
}
