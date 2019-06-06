import React, { Component } from "react";	
import AnchorLink from "react-anchor-link-smooth-scroll";	
import "./Navbar.css";	

 class Navbar extends Component {	
  componentDidMount() {	
    window.addEventListener("scroll", this.handleScroll);	
  }	

   componentWillUnmount() {	
    window.removeEventListener("scroll", this.handleScroll);	
  }	

   handleScroll = event => {	
    console.log("scrolling")	
  };	

   render() {	
    return (	
      <header className="header-navbar" id="navbar" data-aos="zoom-in">	
        <nav className="navbar navbar-expand-lg ">	
          <button	
            className="navbar-toggler"	
            type="button"	
            data-toggle="collapse"	
            data-target="#navbarNav"	
            aria-controls="navbarNav"	
            aria-expanded="false"	
            aria-label="Toggle navigation"	
          >	
            <span className="navbar-toggler-icon" />	
          </button>	
          <div className="collapse navbar-collapse" id="navbarNav">	
            <ul className="navbar-nav">	
              <li className="nav-item active">	
                <AnchorLink	
                  className="nav-link"	
                  offset={() => 100}	
                  href="#about"	
                  style = {{color: 'white'}}	
                >	
                  About	
                </AnchorLink>	
              </li>	
              <li className="nav-item active">	
                <AnchorLink	
                  className="nav-link"	
                  offset={() => 100}	
                  href="#experience"	
                  style = {{color: 'white'}}	
                >	
                  Experience	
                </AnchorLink>	
              </li>	
              <li className="nav-item active">	
                <AnchorLink	
                  className="nav-link"	
                  offset={() => 100}	
                  href="#project"	
                  style = {{color: 'white'}}	
                >	
                  Projects	
                </AnchorLink>	
              </li>	
              <li className="nav-item active">	
                <AnchorLink	
                  className="nav-link"	
                  offset={() => 100}	
                  href="#skill"	
                  style = {{color: 'white'}}	
                >	
                  Skills	
                </AnchorLink>	
              </li>	
              <li className="nav-item active">	
                <AnchorLink	
                  className="nav-link"	
                  offset={() => 100}	
                  href="#contact"	
                  style = {{color: 'white'}}	
                >	
                  Contact	
                </AnchorLink>	
              </li>	
            </ul>	
          </div>	
        </nav>	
      </header>	
    );	
  }	
}	

 export default Navbar;