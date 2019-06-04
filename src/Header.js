import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.css";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  render() {
    return (
      <header className="header-navbar" id="navbar" data-aos="zoom-in">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                >
                  About
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink
                  className="nav-link"
                  offset={() => 100}
                  href="#experience"
                >
                  Experience
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink
                  className="nav-link"
                  offset={() => 100}
                  href="#project"
                >
                  Projects
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink
                  className="nav-link"
                  offset={() => 100}
                  href="#skill"
                >
                  Skills
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink
                  className="nav-link"
                  offset={() => 100}
                  href="#education"
                >
                  Education
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink
                  className="nav-link"
                  offset={() => 100}
                  href="#contact"
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

export default Header;
