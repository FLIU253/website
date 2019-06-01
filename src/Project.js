import React from "react";
import "./Project.css";
import shoppingCart from "./images/shopping-cart.png";
import spotifyClone from "./images/spotify-clone.png";
import animeClient from "./images/anime-client.png";
import Popup from "reactjs-popup";

class Project extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center p-1" id="project">
          PROJECTS
        </h1>

        <div className="container pb-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <Popup
                  trigger={
                    <img
                      className="card-img"
                      src={shoppingCart}
                      alt="Card cap"
                    />
                  }
                  modal
                  closeOnDocumentClick
                >
                  <span> Modal content </span>
                </Popup>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Popup
                  trigger={
                    <img
                      className="card-img"
                      src={spotifyClone}
                      alt="Card cap"
                    />
                  }
                  modal
                  closeOnDocumentClick
                >
                  <span> Modal content </span>
                </Popup>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Popup
                  trigger={
                    <img
                      className="card-img"
                      src={animeClient}
                      alt="Card cap"
                    />
                  }
                  modal
                  closeOnDocumentClick
                >
                  <span> Modal content </span>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
