import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import Education from "./Education";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <About />
        <Experience />
        <Project />
        <Skill />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
