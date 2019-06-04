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

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developmentCollapse: false,
      peopleSkillCollapse: false,
      uiUxCollapse: false
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

  render() {
    return (
      <div className="skill" id="skill">
        <h1 className="text-center p-4">SKILLS</h1>

        <div className="container pb-5">
          <div className="card mb-3">
            <div className="card-header">
              <h3 onClick={this.developmentCollapsePressed}>Frameworks</h3>
            </div>
            {this.state.developmentCollapse === true ? (
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          className="skillPic"
                          src={BLOGO}
                          alt="bootstrap logo"
                        />
                        <div className="col">BOOTSTRAP</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={RLogo}
                          alt="react logo"
                        />
                        <div className="col">REACT</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={angular}
                          alt="angular logo"
                        />
                        <div className="col">ANGULAR</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={node} alt="node logo" />
                        <div className="col">Node.Js</div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ) : null}
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <h3 onClick={this.uiUxCollapsePressed}>Languages</h3>
            </div>
            {this.state.uiUxCollapse === true ? (
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img className="skillPic" src={java} alt="java logo" />
                        <div className="col">JAVA</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={javascript}
                          alt="javascript logo"
                        />
                        <div className="col">JAVASCRIPT</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={python}
                          alt="python logo"
                        />
                        <div className="col">PYTHON</div>
                      </div>
                      <div className="col">
                        <img className="skillPic" src={cplus} alt="c++ logo" />
                        <div className="col">C++</div>
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

          <div className="card">
            <div className="card-header">
              <h3 onClick={this.peopleSkillCollapsePressed}>Backend</h3>
            </div>
            {this.state.peopleSkillCollapse === true ? (
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img
                          className="skillPic"
                          src={mysql}
                          alt="mysql logo"
                        />
                        <div className="col">MySQL</div>
                      </div>
                      <div className="col">
                        <img
                          className="skillPic"
                          src={mongodb}
                          alt="mongodb logo"
                        />
                        <div className="col">MongoDB</div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
