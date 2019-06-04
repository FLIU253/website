import React from 'react';
import './Footer.css';

const Footer = () =>{
  return(
    <div data-aos="slide-up">
      <footer className="footer" id = "contact">
      <h1 className="pt-4">CONTACT</h1>
        <div className="container">
        <div className="row p-5">
        <div className="col-3"></div>
        <div className="col-6">
        <a href="https://www.facebook.com/franklin.liu3" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x p-3"></i></a>
        <a href="https://www.instagram.com/franklin_liu3/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x p-3"></i></a>
        <a href="https://www.linkedin.com/in/franklin-liu-199a00141/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x p-3"></i></a>
        <a href="https://github.com/FLIU253" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x p-3"></i></a>
        <a href="https://franklin_liu3@hotmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square fa-3x p-3"></i></a>
        </div>
        <div className="col-3"></div>
        </div>
        </div>
      </footer>
      <div className="copyright">
      <div className="footer-copyright text-center py-3 copy-text p-4">Franklin Liu © 2018 Copyright
    </div>
      </div>
    </div>
  );
}

export default Footer;