import React from "react";
import "./Landing.css";
import PORTAIT from "./images/portait.jpg";
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

const Landing = () => {
  return (
    <div className="wrapper">
      <Particles params = {particlesOptions}/>
      <div className="menu-icon">
        <i className="fa fa-bars fa-2x" />
      </div>
      <div className="text-white text-center center">
        <h1>Hello, I'm Franklin Liu</h1>
        <span>Software Engineering Student </span>
        <img src={PORTAIT} alt="portait" className="portait-img" data-aos = "flip-up"/>
        <span>Aspiring Fullstack Web Developer</span>
      </div>
    </div>
  );
};

export default Landing;
