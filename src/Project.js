import React from "react";
import "./Project.css";
import shoppingCart from "./images/shopping-cart.png";
import spotifyClone from "./images/spotify-clone.png";
import animeClient from "./images/anime-client.png";
import jobSort from "./images/jobSort.png";
import animeGenerator from "./images/anime-generator.png";
import chromeExtension from "./images/chrome-extension.png";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyHover: false,
      animeHover: false,
      shopHover: false,
      jobHover: false
    };
  }

  onspotifyHover = () => {
    this.setState({ spotifyHover: !this.state.spotifyHover });
  };

  onAnimeHover = () => {
    this.setState({ animeHover: !this.state.animeHover });
  };
  onShopHover = () => {
    this.setState({ shopHover: !this.state.shopHover });
  };
  onJobHover = () => {
    this.setState({ jobHover: !this.state.jobHover });
  };

  render() {
    return (
      <div className="project" id = "#project" style = {{backgroundColor: "rgb(10, 25, 47)"}}>

      <div className="container pb-4">
      <h1 className="text-center p-1 mb-5 project-title" id="project"><strong data-aos="fade-down" data-aos-duration="1500">Some Thing I've Bulit</strong></h1>
        <div className = "project-grid mb-5">
          <div>
          <img className="card-img" src={animeGenerator} alt="Card cap" data-aos="fade-right" data-aos-duration="1500"/>
          </div>
          <div className = "featured-description"data-aos="fade-left" data-aos-duration="1500">
            <p style = {{marginBottom: "0"}}>Featured Project</p>
            <h4 className = "project-name">Random Anime Generator</h4>
            <p className = "project-description">A fun application that can generate a random anime for the user using MAL's unofficial API.
              This application can also create an anime tier list based on a user's MAL account username. 
            </p>
            <ul className = "language-list">
              <li>Vue.Js</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>MAL's Unofficial API</li>
            </ul>
              <a href="https://github.com/FLIU253/random-anime-generator" target = "_blank"  rel="noopener noreferrer" alt = "github icon">
              <i className ="fab fa-github"></i></a>
          </div>
        </div>
        

        <div className = "project-grid mb-5 mt-5">
          <div className = "text-left" data-aos="fade-right" data-aos-duration="1500">
            <p style = {{marginBottom: "0"}}>Featured Project</p>
            <h4 className = "project-name">Chrome Anime Dashboard Extension</h4>
            <p className = "project-description">Replace new tab page with a randomly generated anime wallpaper. 
            The new tab page also displays the current temperature and location of the user. This extension also 
            shows the current anime airing schedule. 
            </p>
            <ul className = "language-list-2">
              <li>Vue.Js</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Alphacoders' API</li>
              <li>OpenWeather's API</li>
            </ul>
              <a href="https://github.com/FLIU253/anime-schedule-extension" target = "_blank"  rel="noopener noreferrer" alt = "github icon">
              <i className="fab fa-github"></i></a>
          </div>
          <div>
          <img className="card-img" src={chromeExtension} alt="Card cap" data-aos="fade-left" data-aos-duration="1500"/>
          </div>
        </div>

      </div>

        <h1 className="text-center p-1 mb-5 project-title" id="project" style = {{marginTop: "200px"}}>
          <strong data-aos="fade-up">Other Projects</strong>
        </h1>
        <div className="container pb-4">
          <div className="project-grid">
            <div data-aos="fade-right" data-aos-duration="1000">
              {this.state.spotifyHover === true ? (
                <div className = "card-info"  onClick={this.onspotifyHover}  data-aos="fade-right">
                  <h3 className = "card-info-title"><strong>Spotify Clone</strong></h3>
                  <hr className = "line"/>
                  <p>A simple music client inspired by Spotify.</p>
                  <p  style = {{color: '#5E9516'}}><strong>Built with:</strong></p>
                  <p>JavaScript, HTML, CSS, MySQL</p>
                </div>
              ): <img
              className="card-img" src={spotifyClone} alt="Card cap" onClick={this.onspotifyHover}  data-aos="fade-right"/>}
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
            {this.state.animeHover === true ? (
                <div className = "card-info" data-aos="fade-left"  onClick={this.onAnimeHover}>
                  <h3 className = "card-info-title"><strong>Simple Anime Client</strong></h3>
                  <hr className = "line"/>
                  <p>A simple anime client built using Kitu's API.</p>
                  <p  style = {{color: '#5E9516'}}><strong>Built with:</strong></p>
                  <p>React.JS, HTML, CSS</p>
                </div>
              ): <img className="card-img" src={animeClient} alt="Card cap" onClick={this.onAnimeHover} data-aos="fade-left"/>}
            </div>

            <div data-aos="fade-right" data-aos-duration="1000">
            {this.state.shopHover === true ? (
                <div className = "card-info" data-aos="fade-right" onClick={this.onShopHover}>
                  <h3 className = "card-info-title"><strong>Shopping Cart</strong></h3>
                  <hr className = "line"/>
                  <p>A simple shopping cart assignment</p>
                  <p  style = {{color: '#5E9516'}}><strong>Built with:</strong></p>
                  <p>Angular.JS, HTML, CSS, MongoDB, Node.JS</p>
                </div>
              ):   <img className="card-img" src={shoppingCart} alt="Card cap" onClick={this.onShopHover} data-aos="fade-right"/>}
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
            {this.state.jobHover === true ? (
                <div className = "card-info" data-aos="fade-left" onClick={this.onJobHover}>
                  <h3 className = "card-info-title"><strong>Job Sort</strong></h3>
                  <hr className = "line"/>
                  <p>An application that let you sort your job applications (still a work in progress)</p>
                  <p style = {{color: '#5E9516'}}><strong>Built with:</strong></p>
                  <p>React.JS, HTML, CSS, MongoDB, Node.JS</p>
                </div>
              ):   <img className="card-img" src={jobSort} alt="Card cap" onClick={this.onJobHover}data-aos="fade-left" />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
