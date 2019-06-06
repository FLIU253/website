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

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <div className="all-content">
        <Landing />
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
