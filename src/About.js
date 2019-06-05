import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="content" id="about" data-aos="fade-right">
      <h1 className="text-center about-title">
        <strong>About Me</strong>
      </h1>
      <div className="container text-center">
        <div className="row pt-4">
          <div className="col">
            <i className="fas fa-child" />
            <span>Passionate</span>
          </div>
          <div className="col">
            <i className="fas fa-users"  data-aos="fade-right"/>
            <span>Team-Oriented</span>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col">
            <i className="fas fa-brain" data-aos="fade-right"/>
            <span>Open-Minded</span>
          </div>
          <div className="col">
            <i className="fas fa-clipboard-check" data-aos="fade-right"/>
            <span>Problem-Solver</span>
          </div>
        </div>
        <div className="row pt-4 text-center">
          <div className="col-1" />
          <div className="col-10">
            A software engineering student with a strong passion for web
            development.
          </div>
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
};
export default About;
