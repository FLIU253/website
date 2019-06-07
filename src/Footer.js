import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div data-aos="slide-up" id="contact">
      <footer className="footer p-5">
        <div className="footer-info">
          <h2 className="pt-4">Toronto Based</h2>
          <p>Let's get in touch.</p>
          <p>My email is: </p>
          <p style={{ textDecoration: "underline" }}>
            franklin_liu3@hotmail.com
          </p>
        </div>
        <div className="container">
          <h4 className="pt-5">My Social media</h4>
          <div className="row">
            <div className="col-3" />
            <div className="col-6">
              <a
                data-aos="flip-left"
                href="https://www.facebook.com/franklin.liu3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-3x p-3 footer-icon" />
              </a>
              <a
               data-aos="flip-up"
                href="https://www.instagram.com/franklin_liu3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-3x p-3 footer-icon" />
              </a>
              <a
               data-aos="flip-down"
                href="https://www.linkedin.com/in/franklin-liu-199a00141/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x p-3 footer-icon" />
              </a>
              <a
                data-aos="flip-right"
                href="https://github.com/FLIU253"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square fa-3x p-3 footer-icon" />
              </a>
            </div>
            <div className="col-3" />
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="footer-copyright text-center py-3 copy-text p-4">
          Franklin Liu © 2019 Copyright
        </div>
      </div>
    </div>
  );
};

export default Footer;
