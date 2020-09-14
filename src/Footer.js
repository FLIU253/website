import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div data-aos="slide-up" id="contact">
      <footer className="footer">
        <div className="footer-info">
          <h5 style={{ color: '#64ffda' }}>What's Next?</h5>
          <h1
            style={{ color: '#E6F1FF', fontWeight: 'bold', fontSize: '50px' }}
            className="pt-4"
          >
            Get In Touch
          </h1>
          <h2 className="pt-4 mb-4">Toronto Based</h2>
          <p>Let's get in touch.</p>
          <p>My email is: </p>
          <p style={{ textDecoration: 'underline' }} className="mb-5 pb-3">
            franklin_liu3@hotmail.com
          </p>
          <a
            href="mailto: franklin_liu3@hotmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="email-button"
          >
            Say Hello
          </a>
        </div>
        <div className="container">
          <h4 className="pt-5">My Social Media</h4>
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
        <div className=" text-center py-3 p-4 footer-text">
          Franklin Liu © 2020 Copyright
        </div>
      </div>
    </div>
  );
};

export default Footer;
