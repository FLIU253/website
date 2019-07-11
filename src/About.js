import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="content p-5" id="about">
      <h1 className="text-center about-title pt-5" data-aos="fade-right" style = {{'color': '#E6F1FF', 'fontWeight' : 'bold'}}>
        <strong>Who I Am</strong>
      </h1>
      <div className="container text-center" style = {{"color" : "#8892b0"}}>
        <div className="row pt-4">
          <div className="col">
            <i className="fas fa-child" />
            <span>Passionate</span>
          </div>
          <div className="col">
            <i className="fas fa-users" data-aos="fade-right" />
            <span>Team-Oriented</span>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col">
            <i className="fas fa-brain" data-aos="fade-right" />
            <span>Open-Minded</span>
          </div>
          <div className="col">
            <i className="fas fa-clipboard-check" data-aos="fade-right" />
            <span>Problem-Solver</span>
          </div>
        </div>
        <div className="row pt-4 text-center">
          <div className="col-1" />
          <div className="col-10 p-5 mb-5">
            Hello! I'm Franklin, a software engineering student based in Toronto, ON but currently attending school
            at <a href = "https://uwo.ca/" target = "_blank" rel="noopener noreferrer" className = "uni-link">Western University</a> in London, ON.  I enjoy developing web applications with the hopes of becoming a
            fullstack web developer. One day I also hope to en an entrepreneur. 
          </div>
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
};
export default About;
