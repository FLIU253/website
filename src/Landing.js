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
      <Particles params = {particlesOptions} style = {{position: 'absolute'}}/>
      <div className="menu-icon">
        <i className="fa fa-bars fa-2x" />
      </div>
      <div className="text-white text-center center">
        <h1> <hr/>Hello, I'm Franklin Liu <hr/></h1>
       <div className="profile">
        <img src={PORTAIT} alt="portait" className="portait-img" data-aos = "flip-up"/>
        <div className = "ml-5">
          <h3>Details</h3>
          <br/>
          <p><strong>Name:</strong></p>
          <p>Franklin Liu</p>
          <p><strong>Age:</strong></p>
          <p>Born July 3rd, 1998</p>
          <p><strong>Location: </strong></p>
          <p>Toronto, Ontario</p>
          <p style = {{lineHeight: "1em"}}>Currently a software engineering student. Aspiring Fullstack Web Developer</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Landing;
