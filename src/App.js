import React, { Component } from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import Footer from "./Footer";
import Interest from "./Interest";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }

  onUpArrowClick = () => {
    this.refs.landing.scrollIntoView({ behavior: "smooth" });
    console.log("test");
  };
  onDownArrowClick = () => {
    console.log("test");
  };
  render() {
    return (
      <div className="all-content">
        <div className="sidebar">
          <ul>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#landing">
                Profile
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#about">
                About
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#experience">
                Experience
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#project">
                Projects
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#skill">
                Skills
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#article">
                Articles
              </AnchorLink>
            </li>
            <li className="list-section">
              <AnchorLink offset={() => 100} href="#contact">
                Contacts
              </AnchorLink>
            </li>
          </ul>
        </div>

        <i
          className="fas fa-caret-square-up up-arrow"
          style={{ fontSize: "1.5em" }}
          onClick={this.onUpArrowClick}
        />
        <div ref="landing">
          <Landing />
        </div>
        <About />
        <Experience />
        <Project />
        <Skill />
        <Interest />
        <Footer />
      </div>
    );
  }
}

export default App;
