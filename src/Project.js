import React from "react";
import "./Project.css";
import shoppingCart from "./images/shopping-cart.png";
import spotifyClone from "./images/spotify-clone.png";
import animeClient from "./images/anime-client.png";
import jobSort from "./images/jobSort.png";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <div className="project">
        <h1 className="text-center p-1 mb-5 project-title" id="project">
          <strong>My Personal Work</strong>
        </h1>
        <div className="container pb-4">
          <div className="project-grid">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img
                className="card-img"
                src={spotifyClone}
                alt="Card cap"
                onMouseEnter={this.onHover}
                onMouseLeave={this.onHover}
              />
              {this.state.hover && (
                <div style={{ position: "absolute", top: "0px" }}>hovering</div>
              )}
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <img className="card-img" src={animeClient} alt="Card cap" />
            </div>

            <div data-aos="fade-right" data-aos-duration="1000">
              <img className="card-img" src={shoppingCart} alt="Card cap" />
            </div>

            <div data-aos="fade-right" data-aos-duration="1000">
              <img className="card-img" src={jobSort} alt="Card cap" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
