import React, { Component } from "react";
import "./Experience.css";
import autodata from "./images/autodata.jpg";
import western from "./images/western.jpg";
import westernUni from "./images/western university.jpg";
import mcdonalds from "./images/mcdonalds.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="experience" id="experience">
        <div className="container p-5">
          <h1
            className="text-center pb-5 experience-title"
            data-aos="zoom-out-down"
          >
            <strong>Here is What I have Done So Far</strong>
          </h1>
          <div className="experience-container">
            <div>
              <img
                className="autodata-logo"
                src={autodata}
                alt="autodata logo"
                data-aos="zoom-out-down"
              />
            </div>
            <div className="text-left" data-aos="zoom-out-down">
              <p>May 7th, 2019 - August 28th, 2019</p>
              <h3 style={{ color: "#3377CC" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://autodata.net/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Autodata Solutions
                </a>
              </h3>
              <h5 style={{ color: "#5E9516" }}>QA Automation Analyst</h5>
              <p style={{ fontWeight: "bold" }}>
                100 Dundas St suite 500, London, ON N6A 5B6
              </p>
              <p className="description">
               Currently working here!
              </p>
            </div>
          </div>
          <div className="experience-container mt-5">
            <div>
              <img
                className="western-logo"
                src={western}
                alt="western logo"
                data-aos="zoom-out-down"
              />
            </div>
            <div className="text-left" data-aos="zoom-out-down">
              <p>May 2nd, 2018 - April 29th, 2019</p>
              <h3 style={{ color: "#3377CC" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://itrc.uwo.ca/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Western Technology Services
                </a>
              </h3>
              <h5 style={{ color: "#5E9516" }}>
                Instructional Technology Resoure Centre Consultant
              </h5>
              <p style={{ fontWeight: "bold" }}>
                100 Dundas St suite 500, London, ON N6A 5B6
              </p>
              <p className="description">
                  During my experience here, I learned how to film, record and edit content for professors and University faculty members.
                  I also collabrated with collegues to produce content such as instructional videos and online quizzes written in LaTeX for
                  professors to use in classrooms. Finally, I created and edited HTML and CSS files for faculty members' course websites to enhance
                  and improve students' learning experience.
              </p>
            </div>
          </div>

          <div className="experience-container mt-5">
            <div>
              <img
                className="western-uni-logo"
                src={westernUni}
                alt="western university logo"
                data-aos="zoom-out-down"
              />
            </div>
            <div className="text-left" data-aos="zoom-out-down">
              <p>September, 2016 - April, 2021</p>
              <h3 style={{ color: "#3377CC" }}>
                <a
                  href="https://uwo.ca/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Western University
                </a>
              </h3>
              <h5 style={{ color: "#5E9516" }}>BESc in Software Engineering</h5>
              <p style={{ fontWeight: "bold" }}>
                1151 Richmond St, London, ON N6A 3K7
              </p>
              <p className="description">
                  Currently studying Software Engineering at Western University. As of right now from May 2019 to August 2020, I am on a 
                  16 month internship at Autodata Solutions. I will be returning to school in September 2020 as a 4th year Software Engineering student.
                  I play Varsity Ultimate Frisbee at Western and I was a honors student for my first two years at Western. I also received the Freedom 55
                  Financial Scholar Athlete Award for achieving an average of 80% or higher while participating in a varsity sport. 
              </p>
            </div>
          </div>

          <div className="experience-container mt-5">
            <div>
              <img
                className="western-logo"
                src={mcdonalds}
                alt="mcdonalds logo"
                data-aos="zoom-out-down"
              />
            </div>
            <div className="text-left" data-aos="zoom-out-down">
              <p>September, 2014 - August, 2016</p>
              <h3 style={{ color: "#3377CC" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.mcdonalds.com/ca/en-ca.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  McDonald's Canada
                </a>
              </h3>
              <h5 style={{ color: "#5E9516" }}>Crew Member</h5>
              <p style={{ fontWeight: "bold" }}>
                95 Bamburgh Cir, Scarborough, ON M1W 3G4
              </p>
              <p className="description">
                This was the first ever job I worked. At McDonald's, I collaborated with fellow crew members to prepare customers' order in a 
                fast-paced high stress environment. I was once named employee of the month during my time here. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
