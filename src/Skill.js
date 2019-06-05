import React, { Component } from "react";
import "./Skill.css";
import CSS from "./images/CSS.png";
import HTML5 from "./images/HTML5.png";
import BLOGO from "./images/bootstrap.png";
import RLogo from "./images/React.png";
import angular from "./images/angular.png";
import mongodb from "./images/mongodb.png";
import node from "./images/node.png";
import mysql from "./images/mysql.png";
import java from "./images/Java.png";
import javascript from "./images/javascript.png";
import python from "./images/python.png";
import cplus from "./images/c++.png";
import json from "./images/json.png";
import xml from "./images/xml.png";
import git from "./images/git.png";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developmentCollapse: false,
      peopleSkillCollapse: false,
      uiUxCollapse: false,
      otherSoftwareCollapse: false
    };
  }

  developmentCollapsePressed = () => {
    this.setState({
      developmentCollapse: !this.state.developmentCollapse
    });
  };

  peopleSkillCollapsePressed = () => {
    this.setState({
      peopleSkillCollapse: !this.state.peopleSkillCollapse
    });
  };

  uiUxCollapsePressed = () => {
    this.setState({
      uiUxCollapse: !this.state.uiUxCollapse
    });
  };

  otherSoftwareCollapsePressed = () => {
    this.setState({
      otherSoftwareCollapse: !this.state.otherSoftwareCollapse
    })
  }

  render() {
    return (
      <div className="skill" id="skill">
        <div className="container pb-5 skills-container">
          <div> <h1 className="text-left p-4 skill-title"><strong>What I Offer</strong></h1></div>
          <div >
          <div className="card-style mb-2 mt-4"data-aos="fade-down" data-aos-duration="1000">
            <div onClick={this.developmentCollapsePressed}className="skills-card card-header">
              <h5><i className="fas fa-code" style = {{fontSize:"15px"}}></i>   Development/Software</h5>
            </div>
            {this.state.developmentCollapse ? (    <div className="card-body" className = {this.state.developmentCollapse ? 
                'dropdown-visible text-center' : 'dropdown-not-visible'} >
                <blockquote>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          className="skillPic"
                          src={javascript}
                          alt="javascript logo"
                        />
                        <div className="col">JavaScript</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={java}
                          alt="java logo"
                        />
                        <div className="col">Java</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={python} alt="python logo" />
                        <div className="col">Python</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={cplus} alt="c++ logo" />
                        <div className="col">C++</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={mysql} alt="SQL logo" />
                        <div className="col">SQL</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={json}
                          alt="json logo"
                        />
                        <div className="col">JSON</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={xml}
                          alt="xml logo"
                        />
                        <div className="col">XML</div>
                        </div>
                        <div className="col">
                        <img
                          className="skillPic"
                          src={git}
                          alt="git logo"
                        />
                        <div className="col">Git</div>
                    </div>
                    </div>

                  </div>
                </blockquote>
              </div>): null}
          </div>

          <div className="card-style mb-2" data-aos="fade-down" data-aos-duration="1000">
            <div onClick={this.uiUxCollapsePressed} className="skills-card card-header">
              <h5><i className="fas fa-desktop" style = {{fontSize:"15px"}}></i>   UI/UX/Frameworks</h5>
            </div>
            {this.state.uiUxCollapse  ? (
              <div className="card-body"  className = {this.state.uiUxCollapse ? 
                'dropdown-visible text-center' : 'dropdown-not-visible'} >
                <blockquote>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img className="skillPic" src={BLOGO} alt="bootstrap logo" />
                        <div className="col">Bootstrap</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={RLogo}
                          alt="react logo"
                        />
                        <div className="col">React</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={angular}
                          alt="angular logo"
                        />
                        <div className="col">Angular</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={node} alt="Nodejs logo" />
                        <div className="col">Nodejs</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={CSS}
                          alt="Bootstrap logo"
                        />
                        <div className="col">CSS</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={HTML5}
                          alt="HTML5 logo"
                        />
                        <div className="col">HTML5</div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ) : null}
          </div>

          <div className="card-style mb-2" data-aos="fade-down" data-aos-duration="1000">
            <div onClick={this.peopleSkillCollapsePressed} className="skills-card card-header">
              <h5><i className="fas fa-user-friends" style = {{fontSize:"15px"}}></i>   Soft Skills</h5>
            </div>
            {this.state.peopleSkillCollapse === true ? (
              <div className="card-body"  className = {this.state.peopleSkillCollapse ? 
                'dropdown-visible text-center' : 'dropdown-not-visible'} >
                <div className="container">
                  <div className="row text-left">
                    <ul>
                      <li>
                        Leadership
                      </li>
                      <li>
                        Communication
                      </li>
                      <li>
                        Responsible
                      </li>
                      <li>
                        flexible
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
         
          <div className="card-style mb-3" data-aos="fade-down" data-aos-duration="1000">
            <div onClick={this.otherSoftwareCollapsePressed} className="skills-card card-header">
              <h5><i className="fas fa-caret-square-down" style = {{fontSize:"15px"}}></i>   Other Skills</h5>
            </div>
            {this.state.otherSoftwareCollapse === true ? (
              <div className="card-body"  className = {this.state.otherSoftwareCollapse ? 
                'dropdown-visible text-center' : 'dropdown-not-visible'} >
                <blockquote className="blockquote mb-0">
                  <div className="container">
                    <div className="row text-left">
                      <ul>
                        <li>
                            Quality Assurance
                        </li>
                        <li>
                          Software Testing
                        </li>
                      </ul>
                    </div>
                  </div>
                </blockquote>
              </div>
            ) : null}
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
