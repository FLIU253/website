import React, { Component } from 'react';
import './Experience.css';
import autodata from './images/autodata.jpg';
import western from './images/western.jpg';
import westernUni from './images/western university.jpg';
import mcdonalds from './images/mcdonalds.jpg';

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
              <p>May, 2019 - August, 2020</p>
              <h3 style={{ color: '#3377CC' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.autodatasolutions.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Autodata Solutions
                </a>
              </h3>
              <h5 style={{ color: '#5E9516' }}>
                QA Automation Analyst | Java, Cucumber, SerenityBDD
              </h5>
              <p style={{ fontWeight: 'bold' }}>
                100 Dundas St suite 500, London, ON N6A 5B6
              </p>
              <ul>
                <li>
                  Developed and maintained the regression test suite from
                  scratch
                </li>
                <li>
                  Increased the overall amount of test coverage by 50% through
                  writing 50+ test scenarios
                </li>
                <li>
                  Decreased the amount of time needed for regression testing by
                  over 30% as more automation testing was developed
                </li>
                <li>
                  Maintained cooperative relationships with developers and
                  communicate with stakeholders
                </li>
                <li>
                  Tracked the status of defects and provided a status report
                  during daily meetings
                </li>
                <li>
                  Analyzed software requirements and design documentation,
                  created test plans and test cases to validate business logic
                </li>
              </ul>
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
              <p>May, 2018 - April, 2019</p>
              <h3 style={{ color: '#3377CC' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://itrc.uwo.ca/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Western Technology Services
                </a>
              </h3>
              <h5 style={{ color: '#5E9516' }}>IT Consultant | HTML, CSS</h5>
              <p style={{ fontWeight: 'bold' }}>
                100 Dundas St suite 500, London, ON N6A 5B6
              </p>
              <ul>
                <li>
                  Educated professors and faculty members on how to use
                  different technologies such as Western's learning management
                  system
                </li>
                <li>
                  Created and edited CSS and HTML files for faculty members’
                  course websites toenhance the students’ learning experience
                </li>
              </ul>
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
              <h3 style={{ color: '#3377CC' }}>
                <a
                  href="https://uwo.ca/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  Western University
                </a>
              </h3>
              <h5 style={{ color: '#5E9516' }}>BESc in Software Engineering</h5>
              <p style={{ fontWeight: 'bold' }}>
                1151 Richmond St, London, ON N6A 3K7
              </p>
              <ul>
                <li>
                  Dean's honor list in the calendar school year of 2016 - 2017
                  and 2017 - 2018
                </li>
                <li>
                  Participated in a 16 month inernship program from 2019 - 2020
                </li>
              </ul>
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
              <h3 style={{ color: '#3377CC' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://www.mcdonalds.com/ca/en-ca.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  McDonald's Canada
                </a>
              </h3>
              <h5 style={{ color: '#5E9516' }}>Crew Member</h5>
              <p style={{ fontWeight: 'bold' }}>
                95 Bamburgh Cir, Scarborough, ON M1W 3G4
              </p>
              <ul>
                <li>
                  Collaborated with fellow crew members to prepare customers’
                  orders in a fastpaced high stress environment
                </li>
                <li>
                  Awarded employee of the month for outstanding customer service
                  and satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
