import React, { Component } from "react";
import './Experience.css';
import autodata from './images/autodata.jpg';
import western from './images/western.jpg';
import westernUni from './images/western university.jpg';

class Experience extends Component {
  render() {
    return (
      <div className="experience" id = "experience"> 
          <div className = "container"> 
         <h1 className="text-center p-4 experience-title" data-aos="zoom-out-down">
         <strong>Here is What I have Done So Far</strong>
      </h1>
      <div className = "experience-container">
      <div>
       <img className ="autodata-logo" src = {autodata} alt = "autodata logo" data-aos="zoom-out-down"></img>
      </div>
      <div className = "text-left" data-aos="zoom-out-down">
        <p>May 7th, 2019 - August 28th, 2019</p>
        <h3 style = {{color: "#3377CC"}} >
          <a style = {{textDecoration: "none"}} href = "https://autodata.net/" rel="noopener noreferrer" target="_blank">Autodata Solutions</a>
          </h3>
        <h5 style = {{color: "#5E9516"}}>QA Automation Analyst</h5>
        <p style = {{fontWeight: "bold"}}>100 Dundas St suite 500, London, ON N6A 5B6</p>
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
       <img className ="western-logo" src = {western} alt = "western logo" data-aos="zoom-out-down"></img>
      </div>
      <div className = "text-left" data-aos="zoom-out-down">
        <p>May 2nd, 2018 - April 29th, 2019</p>
        <h3 style = {{color: "#3377CC"}}>
          <a style = {{textDecoration: "none"}} href = "https://itrc.uwo.ca/"  rel="noopener noreferrer" target="_blank">Western Technology Services</a>
        </h3>
        <h5 style = {{color: "#5E9516"}}>Instructional Technology Resoure Centre Consultant</h5>
        <p style = {{fontWeight: "bold"}}>100 Dundas St suite 500, London, ON N6A 5B6</p>
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
       <img className ="western-uni-logo" src = {westernUni} alt = "western university logo" data-aos="zoom-out-down"></img>
      </div>
      <div className = "text-left" data-aos="zoom-out-down">
        <p>September, 2016 - April, 2021</p>
        <h3 style = {{color: "#3377CC"}}>
          <a href = "https://uwo.ca/"  rel="noopener noreferrer" target="_blank" style = {{textDecoration: "none"}}>Western University</a>
        </h3>
        <h5 style = {{color: "#5E9516"}}>BESc in Software Engineering</h5>
        <p style = {{fontWeight: "bold"}}>1151 Richmond St, London, ON N6A 3K7</p>
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
