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
import IntersectionVisible    from 'react-intersection-visible';
import GithubCorner from 'react-github-corner';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profileActive: false,
      aboutActive: false,
      experienceActive: false,
      projectActive: false,
      skillActive: false,
      articleActive: false,
      contactActive: false,
      burgerActive: false
    }
  }

  componentDidMount() {
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }

  setColor = (location) => {
    if(location === "profile")
    {
      this.setState({profileActive: true});
    }else if(location === "about"){
      this.setState({aboutActive: true});
    }else if(location === "experience"){
      this.setState({experienceActive: true})
    }else if(location === "project"){
      this.setState({projectActive: true})
    }else if(location === "skill"){
      this.setState({skillActive: true})
    }else if(location === "article"){
      this.setState({articleActive: true})
    }else if(location === "contact"){
      this.setState({contactActive: true})
    }
  }
  removeColor = (location) => { 
    if(location === "profile")
    {
      this.setState({profileActive: false});
    }else if(location === "about"){
      this.setState({aboutActive: false});
    }else if(location === "experience"){
      this.setState({experienceActive: false})
    }else if(location === "project"){
      this.setState({projectActive: false})
    }else if(location === "skill"){
      this.setState({skillActive: false})
    }else if(location === "article"){
      this.setState({articleActive: false})
    }else if(location === "contact"){
      this.setState({contactActive: false})
    }
  }
  onUpArrowClick = () => {
    this.refs.landing.scrollIntoView({ behavior: "smooth" });
    console.log("test");
  };

  onBurgerClick = () => {
    this.setState({burgerActive: !this.state.burgerActive});
    console.log("test");
  }
  render() {
    return (
      <div className="all-content" >
      <div className = "burger-nav" data-aos="fade-down">
        <i className="fas fa-bars dropdown-nav" style={{ fontSize: "1.5em" }} onClick = {this.onBurgerClick}></i>
        {this.state.burgerActive && (
          <div className = "burger-tag" >
            <hr style = {{border:"1px solid white", width: "100%", marginTop: "28px"}}/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#landing" style = {{color: "white", textDecoraction: "none"}} >
          Profile
        </AnchorLink>
        <br/>
        <AnchorLink offset={() => 100} data-aos="fade-down" href="#about"style = {{color: "white", textDecoraction: "none"}}>
          About
          </AnchorLink>
          <br/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#experience" style = {{color: "white", textDecoraction: "none"}}>
            Experience
          </AnchorLink>
          <br/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#project" style = {{color: "white", textDecoraction: "none"}}>
            Projects
          </AnchorLink>
          <br/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#skill" style = {{color: "white", textDecoraction: "none"}}>
            Skills
          </AnchorLink>
          <br/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#article" style = {{color: "white", textDecoraction: "none"}}>
            Articles
          </AnchorLink>
          <br/>
          <AnchorLink offset={() => 100} data-aos="fade-down" href="#contact" style = {{color: "white", textDecoraction: "none"}}>
            Contacts
          </AnchorLink>
          <br/>
        </div>
        
        )}
        </div>
        
        <div className="sidebar">
          <ul>
            <li className= {this.state.profileActive ? "list-section profile-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#landing">
                Profile
              </AnchorLink>
            </li>
            <li className={this.state.aboutActive ? "list-section about-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#about">
                About
              </AnchorLink>
            </li>
            <li className={this.state.experienceActive ? "list-section experience-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#experience">
                Experience
              </AnchorLink>
            </li>
            <li className={this.state.projectActive ? "list-section project-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#project">
                Projects
              </AnchorLink>
            </li>
            <li className={this.state.skillActive ? "list-section skill-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#skill">
                Skills
              </AnchorLink>
            </li>
            <li className={this.state.articleActive ? "list-section article-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#article">
                Articles
              </AnchorLink>
            </li>
            <li className={this.state.contactActive ? "list-section contact-tag" : "list-section"}>
              <AnchorLink offset={() => 100} href="#contact">
                Contacts
              </AnchorLink>
            </li>
          </ul>
        </div>

        <i
          className="fas fa-caret-square-up up-arrow"
          style={{ fontSize: "1.5em",  "mixBlendMode": "difference"}}
          onClick={this.onUpArrowClick}
        />
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("profile")}
        onHide={() => this.removeColor("profile")}>
        <div ref="landing">
          <Landing />
        </div>
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("about")}
        onHide={() => this.removeColor("about")}>
        <About />
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("experience")}
        onHide={() => this.removeColor("experience")}>
        <Experience />
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("project")}
        onHide={() => this.removeColor("project")}>
        <Project />
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("skill")}
        onHide={() => this.removeColor("skill")}>
        <Skill />
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("article")}
        onHide={() => this.removeColor("article")}>
        <Interest />
        </IntersectionVisible>
        <IntersectionVisible
        onIntersect={(entries) => console.log(entries)}
        onShow={() => this.setColor("contact")}
        onHide={() => this.removeColor("contact")}>
        <Footer />
        </IntersectionVisible>
        
        <GithubCorner href="https://github.com/username/repo" direction = "left" size = "100" bannerColor = "#000000" className = "github-banner"/>
      </div>
    );
  }
}

export default App;
