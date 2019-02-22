import React from 'react';
import './About.css';

const About = () => {
  return(
    <div className="content" id ="about">
      <h1 className = "text-center">ABOUT</h1>
      <div className="container">
      <div className="row pt-4">
      <div className="col">
      <h3>Passionate</h3>
      </div>
      <div className="col">
      <h3>Team-Oriented</h3>
      </div>
      <div className="col">
      <h3>Open-Minded</h3>
      </div>
      <div className="col">
      <h3>Problem-Solver</h3>
      </div>
      </div>

      <div className = "row pt-4 text-center">
      A software engineering student with a strong passion for web development. 
      </div>
      
      </div>
 </div>
  );
}
export default About;