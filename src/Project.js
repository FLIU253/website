import React from 'react';
import './Project.css';
import spotifyClone from './images/spotify-clone.png';
import animeGenerator from './images/anime-generator.png';
import chromeExtension from './images/chrome-extension.png';
import jams from './images/jams.png';
import geoPins from './images/geo-pins.png';
import clothingStore from './images/clothing-store.png';
import reactImdb from './images/react-imdb.png';
import reactSlackClone from './images/react-slack-clone.png';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyHover: false,
      clothingStoreHover: false,
      reactImdbHover: false,
      slackHover: false,
    };
  }

  onspotifyHover = () => {
    this.setState({ spotifyHover: !this.state.spotifyHover });
  };

  onClothingStoreHover = () => {
    this.setState({ clothingStoreHover: !this.state.clothingStoreHover });
  };
  onreactImdbHover = () => {
    this.setState({ reactImdbHover: !this.state.reactImdbHover });
  };
  onSlackHover = () => {
    this.setState({ slackHover: !this.state.slackHover });
  };

  render() {
    return (
      <div
        className="project"
        id="#project"
        style={{ backgroundColor: 'rgb(10, 25, 47)' }}
      >
        <div className="container pb-4">
          <h1 className="text-center p-1 mb-5 project-title" id="project">
            <strong data-aos="fade-down" data-aos-duration="1500">
              Some Things I've Bulit
            </strong>
          </h1>

          <div className="project-grid mb-5">
            <div>
              <a
                href="https://geopins.fliu253.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img"
                  src={geoPins}
                  alt="Card cap"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                />
              </a>
            </div>
            <div
              className="featured-description"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p style={{ marginBottom: '0' }}>Featured Project</p>
              <h4 className="project-name">GeoPins</h4>
              <p className="project-description">
                GeoPin is a real time application that reads the user's current
                location and allows the user to drop pins on a map and write a
                message about the location for other users to see. APIs used
                include Google login and Mapbox.
              </p>
              <ul className="language-list">
                <li>Vue.Js</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>MAL's Unofficial API</li>
              </ul>
              <a
                href="https://github.com/FLIU253/geo-pins"
                target="_blank"
                rel="noopener noreferrer"
                alt="github icon"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>

          <div className="project-grid mb-5">
            <div
              className="featured-description"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p style={{ marginBottom: '0' }}>Featured Project</p>
              <h4 className="project-name">
                JAMS: Job Application Management System
              </h4>
              <p className="project-description">
                A job management system that allows users to track all of their
                job application date including: places to apply, places applied
                to, upcoming interviews, rejections, and offered positions.
              </p>
              <ul className="language-list">
                <li>React.Js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
              <a
                href="https://github.com/FLIU253/Job-application-management-system"
                target="_blank"
                rel="noopener noreferrer"
                alt="github icon"
              >
                <i className="fab fa-github" />
              </a>
            </div>
            <div>
              <a
                href="https://jam-system.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img"
                  src={jams}
                  alt="Card cap"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                />
              </a>
            </div>
          </div>

          <div className="project-grid mb-5">
            <div>
              <a
                href="https://github.com/FLIU253/random-anime-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img"
                  src={animeGenerator}
                  alt="Card cap"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                />
              </a>
            </div>
            <div
              className="featured-description"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p style={{ marginBottom: '0' }}>Featured Project</p>
              <h4 className="project-name">Random Anime Generator</h4>
              <p className="project-description">
                A fun application that can generate a random anime for the user
                using MAL's unofficial API. This application can also create an
                anime tier list based on a user's MAL account username.
              </p>
              <ul className="language-list">
                <li>Vue.Js</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>MAL's Unofficial API</li>
              </ul>
              <a
                href="https://github.com/FLIU253/random-anime-generator"
                target="_blank"
                rel="noopener noreferrer"
                alt="github icon"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>

          <div className="project-grid mb-5 mt-5">
            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p style={{ marginBottom: '0' }}>Featured Project</p>
              <h4 className="project-name">Chrome Anime Dashboard Extension</h4>
              <p className="project-description">
                Replace new tab page with a randomly generated anime wallpaper.
                The new tab page also displays the current temperature and
                location of the user. This extension also shows the current
                anime airing schedule.
              </p>
              <ul className="language-list-2">
                <li>Vue.Js</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Alphacoders' API</li>
                <li>OpenWeather's API</li>
              </ul>
              <a
                href="https://github.com/FLIU253/anime-schedule-extension"
                target="_blank"
                rel="noopener noreferrer"
                alt="github icon"
              >
                <i className="fab fa-github" />
              </a>
            </div>
            <div>
              <a
                href="https://chrome.google.com/webstore/detail/ani-wallpaper-generator/cjofcjkdefpalnmbelgfnmkgooflgmeo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="card-img"
                  src={chromeExtension}
                  alt="Card cap"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                />
              </a>
            </div>
          </div>
        </div>

        <h1
          className="text-center p-1 mb-5 project-title"
          id="project"
          style={{ marginTop: '200px' }}
        >
          <strong data-aos="fade-up">Other Projects</strong>
        </h1>
        <div className="container pb-4">
          <div className="project-grid">
            <div data-aos="fade-right" data-aos-duration="1000">
              {this.state.spotifyHover === true ? (
                <div
                  className="card-info"
                  onClick={this.onspotifyHover}
                  data-aos="fade-right"
                >
                  <h3 className="card-info-title">
                    <strong>Spotify Clone</strong>
                  </h3>
                  <hr className="line" />
                  <p>A simple music client inspired by Spotify.</p>
                  <p style={{ color: '#5E9516' }}>
                    <strong>Built with:</strong>
                  </p>
                  <p>JavaScript, HTML, CSS, MySQL</p>
                </div>
              ) : (
                <img
                  className="card-img"
                  src={spotifyClone}
                  alt="Card cap"
                  onClick={this.onspotifyHover}
                  data-aos="fade-right"
                />
              )}
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              {this.state.clothingStoreHover === true ? (
                <div
                  className="card-info"
                  data-aos="fade-left"
                  onClick={this.onClothingStoreHover}
                >
                  <h3 className="card-info-title">
                    <strong>Clothing Store Application</strong>
                  </h3>
                  <hr className="line" />
                  <p>
                    A clothing store like application built to learn how to use
                    redux with react. This application uses Firebase and Stripe
                    API to simulate logins and payments respectively.
                  </p>
                  <p style={{ color: '#5E9516' }}>
                    <strong>Built with:</strong>
                  </p>
                  <p>React.JS, Firebase, Stripe API</p>
                </div>
              ) : (
                <img
                  className="card-img"
                  src={clothingStore}
                  alt="Card cap"
                  onClick={this.onClothingStoreHover}
                  data-aos="fade-left"
                />
              )}
            </div>

            <div data-aos="fade-right" data-aos-duration="1000">
              {this.state.reactImdbHover === true ? (
                <div
                  className="card-info"
                  data-aos="fade-right"
                  onClick={this.onreactImdbHover}
                >
                  <h3 className="card-info-title">
                    <strong>React IMDB</strong>
                  </h3>
                  <hr className="line" />
                  <p>
                    A movie searching website that is powered by the movie DB
                    api.
                  </p>
                  <p style={{ color: '#5E9516' }}>
                    <strong>Built with:</strong>
                  </p>
                  <p>React.JS, HTML, CSS, the movie DB API</p>
                  <a
                    href="https://react-imdb-12312.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out here!
                  </a>
                </div>
              ) : (
                <img
                  className="card-img"
                  src={reactImdb}
                  alt="Card cap"
                  onClick={this.onreactImdbHover}
                  data-aos="fade-right"
                />
              )}
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              {this.state.slackHover === true ? (
                <div
                  className="card-info"
                  data-aos="fade-left"
                  onClick={this.onSlackHover}
                >
                  <h3 className="card-info-title">
                    <strong>React Slack Clone</strong>
                  </h3>
                  <hr className="line" />
                  <p>
                    A React slack clone that beheaves just like slack!
                    Functionalities include: direct messaging a user, uploading
                    pictures to chat, searching for messages and many more!
                  </p>
                  <p style={{ color: '#5E9516' }}>
                    <strong>Built with:</strong>
                  </p>
                  <p>React.JS, HTML, CSS, Firebase, Node.JS</p>
                  <a
                    href="https://react-slack-clone-5239b.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out here!
                  </a>
                </div>
              ) : (
                <img
                  className="card-img"
                  src={reactSlackClone}
                  alt="Card cap"
                  onClick={this.onSlackHover}
                  data-aos="fade-left"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
