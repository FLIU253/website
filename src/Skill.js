import React, { Component } from "react";
import "./Skill.css";


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
    });
  };

  render() {
    return (
      <div className="skill" id="skill">
        <div className="container pb-5 skills-container">
          <div>
            {" "}
            <h1 className=" p-4 skill-title">
              <strong>What I Offer</strong>
            </h1>
          </div>
          <div>
            <div
              className="card-style mb-2 mt-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div
                onClick={this.developmentCollapsePressed}
                className="skills-card card-header"
              >
                <h5>
                  <i className="fas fa-code" style={{ fontSize: "15px" }} />{" "}
                  Development/Software
                </h5>
              </div>
              {this.state.developmentCollapse ? (
                <div
                  className={
                    this.state.developmentCollapse
                      ? "card-body dropdown-visible text-center"
                      : "card-body dropdown-not-visible"
                  }
                >
                  <blockquote>
                    <div className="container">
                    <div className="row text-left">
                      <ul>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>mySQL</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                    </div>
                  </blockquote>
                </div>
              ) : null}
            </div>

            <div
              className="card-style mb-2"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div
                onClick={this.uiUxCollapsePressed}
                className="skills-card card-header"
              >
                <h5>
                  <i className="fas fa-desktop" style={{ fontSize: "15px" }} />{" "}
                  UI/UX/Frameworks
                </h5>
              </div>
              {this.state.uiUxCollapse ? (
                <div
                  className={
                    this.state.uiUxCollapse
                      ? "card-body dropdown-visible text-center"
                      : "card-body dropdown-not-visible"
                  }
                >
                  <blockquote>
                    <div className="container">
                    <div className="row text-left">
                      <ul>
                        <li>Reactjs</li>
                        <li>Vuejs</li>
                        <li>Angularjs</li>
                        <li>Nodejs</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </ul>
                    </div>
                    </div>
                  </blockquote>
                </div>
              ) : null}
            </div>

            <div
              className="card-style mb-2"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div
                onClick={this.peopleSkillCollapsePressed}
                className="skills-card card-header"
              >
                <h5>
                  <i
                    className="fas fa-user-friends"
                    style={{ fontSize: "15px" }}
                  />{" "}
                  Soft Skills
                </h5>
              </div>
              {this.state.peopleSkillCollapse === true ? (
                <div
                  className={
                    this.state.peopleSkillCollapse
                      ? "card-body dropdown-visible text-center"
                      : "card-body dropdown-not-visible"
                  }
                >
                  <div className="container">
                    <div className="row text-left">
                      <ul>
                        <li>Leadership</li>
                        <li>Communication</li>
                        <li>Responsible</li>
                        <li>flexible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="card-style mb-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div
                onClick={this.otherSoftwareCollapsePressed}
                className="skills-card card-header"
              >
                <h5>
                  <i
                    className="fas fa-caret-square-down"
                    style={{ fontSize: "15px" }}
                  />{" "}
                  Other Skills
                </h5>
              </div>
              {this.state.otherSoftwareCollapse === true ? (
                <div
                  className={
                    this.state.otherSoftwareCollapse
                      ? "card-body dropdown-visible text-center"
                      : "card-body dropdown-not-visible"
                  }
                >
                    <div className="container">
                      <div className="row text-left">
                        <ul>
                          <li>Quality Assurance</li>
                          <li>Software Testing</li>
                          <li>Git Version Control</li>
                        </ul>
                      </div>
                    </div>
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
