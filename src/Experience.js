import React, { Component } from "react";
import './Experience.css';
import autodata from './images/autodata.jpg';
import western from './images/western.jpg';

class Experience extends Component {
  render() {
    return (
      <div className="experience">
          <div className = "container"> 
         <h1 className="text-center p-4">
         EXPERIENCE
      </h1>
      <div className = "experience-container">
      <div>
       <img className ="autodata-logo" src = {autodata} alt = "autodata logo"></img>
      </div>
      <div className = "text-center">
        <p>May 7th, 2019 - August 28th, 2019</p>
        <h4>Autodata Solutions</h4>
        <h5>QA Automation Analyst</h5>
        <p>100 Dundas St suite 500, London, ON N6A 5B6</p>
        <p className = "description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </div>

      <div className = "experience-container mt-5">
      <div>
       <img className ="western-logo" src = {western} alt = "western logo"></img>
      </div>
      <div className = "text-center">
        <p>May 2nd, 2018 - April 29th, 2019</p>
        <h4>Western Technology Services</h4>
        <h5>Instructional Technology Resoure Centre Consultant</h5>
        <p>100 Dundas St suite 500, London, ON N6A 5B6</p>
        <p className = "description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </div>
    </div>
      </div>
    );
  }
}
export default Experience;
