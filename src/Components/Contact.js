import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="contact-section form-contact container-fluid">
        <div className="row top-banner-contact align-items-center">
          <div className="top-banner-img col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center text-center text-md-left">
            <div>
              <h2 className="text-white">Contact Us</h2>
              <p className="text-warning">HOME \ DINDIGUL TO OOTY</p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            {/* <img src="/img/car-gif.gif" alt="vaigai" className="img-fluid" /> */}
          </div>
        </div>

        <div className="contact-form">
          <h2 className="text-danger text-center p-3">CONTACT</h2>
          <div className="form-inform">
            <div className="contact-page pt-3 rounded">
              <div className="company-address mb-4">
                <h5>
                  <i className="bi bi-telephone-fill p-2"></i>CALL US
                </h5>
                <p>9466384554</p>
                <h5>
                  <i className="bi bi-geo-alt-fill p-2"></i>LOCATION
                </h5>
                <p>Dindigul Main Road / Anna Salai</p>
                <h5>
                  <i className="bi bi-stopwatch-fill p-2"></i>BUSINESS HOURS
                </h5>
                <p>Monday to Friday / 9.30 AM - 6.30 PM</p>
              </div>
              <div className="form-details rounded">
                <form className="d-flex flex-column ps-3 pe-3 pb-3">
                  <h2 className="text-center">Contact Now</h2>
                  <label htmlFor="name_field" className="fs-5">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control mt-2"
                    placeholder="Enter your name..."
                  />
                  <label htmlFor="phone_field" className="fs-5 mt-3">
                    Enter Mobile Number
                  </label>
                  <input
                    type="number"
                    id="phone_field"
                    className="form-control mt-2"
                    placeholder="Enter mobile number..."
                  />
                  <label htmlFor="email_field" className="fs-5 mt-3">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control mt-2"
                    placeholder="Enter your email..."
                  />
                  <label htmlFor="message" className="fs-5 mt-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control ps-2 mt-2"
                    placeholder="Message..."
                  ></textarea>
                  <button type="submit" className="btn mt-3 btn-warning">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <p className="text-center text-md-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              placeat eveniet hic possimus nam quam? Dolores sapiente quasi
              deserunt veritatis, optio illo ea in atque? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsum placeat eveniet hic
              possimus nam quam? Dolores sapiente quasi deserunt veritatis,
              optio illo ea in atque? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum placeat eveniet hic possimus nam quam?
              Dolores sapiente quasi deserunt veritatis, optio illo ea in
              atque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum placeat eveniet hic possimus nam quam? Dolores sapiente
              quasi deserunt veritatis, optio illo ea in atque?
            </p>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              title="contact"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.973115541336!2d77.95915816166627!3d10.362400144001597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa57a54881e3%3A0x765a14068982e6e7!2sDindigul%2C%20Tamil%20Nadu%20624001!5e0!3m2!1sen!2sin!4v1708509429996!5m2!1sen!2sin"
              className="rounded w-100"
              height="370"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
