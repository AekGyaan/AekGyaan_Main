import React from "react";

const Contact = () => {
  return (
    <>
      <div class="cu">
        <div class="cu1">
          <div class="cu1-h1">CONTACT US</div>
        </div>
      </div>
      <div class=""></div>
      <div class="wrapper">
        <div class="d-grid contact-view">
          <div class="cont-details">
            <div class="cont-top">
              <div class="cont-left text-center">
                <span class="fa fa-phone text-primary"></span>
              </div>

              <div class="cont-right">
                <h6>Call Us</h6>
                <p>9999800870, 9891202070</p>
              </div>
            </div>

            <div class="cont-top margin-up">
              <div class="cont-left text-center">
                <span class="fa fa-envelope-o text-primary"></span>
              </div>
              <div class="cont-right">
                <h6>Email Us</h6>
                <p>
                  <a href="mailto:aekgyaan@gmail.com" class="mail">
                    aekgyaan@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div class="cont-top margin-up">
              <div class="cont-left text-center">
                <span class="fa fa-map-marker text-primary"></span>
              </div>
              <div class="cont-right">
                <h6>Address</h6>
                <p>House No. 854, Sector 4, Urban Estate, Gurugram, Haryana.</p>
              </div>
            </div>
          </div>

          <div class="map-content">
            <div class="cu-form-h">Submit Your Query</div>
            <form action="#" method="post">
              <div class="twice-two">
                <input
                  type="text"
                  class="form-control"
                  name="w3lName"
                  id="w3lName"
                  placeholder="Name"
                  required=""
                />
                <input
                  type="email"
                  class="form-control"
                  name="w3lSender"
                  id="w3lSender"
                  placeholder="Email"
                  required=""
                />
              </div>

              <div class="twice">
                <input
                  type="text"
                  class="form-control"
                  name="w3lSubject"
                  id="w3lSubject"
                  placeholder="Subject"
                  required=""
                />
              </div>

              <textarea
                name="w3lMessage"
                class="form-control"
                id="w3lMessage"
                placeholder="Message"
                required=""
              ></textarea>
              <button type="submit" class="btn btn-contact">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="cu-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2615168611082!2d77.01470701494502!3d28.471669898094323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d3e4d63189%3A0x1fadc15e4801122!2s854%2C%204%2C%20Urban%20Estate%2C%20Sector%207%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1630666042195!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
