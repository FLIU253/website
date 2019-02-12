import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <div className="">
        <Header/>
        <About/>
        <Experience/>
        <Project/>
      </div>
    );
  }
}

export default App;
