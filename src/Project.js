import React from "react";
import "./Project.css";
import shoppingCart from "./images/shopping-cart.png";
import spotifyClone from "./images/spotify-clone.png";
import animeClient from "./images/anime-client.png";
import Modal from 'react-awesome-modal';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

keyPressed(e){
  if(e.keyCode === 13){
    console.log('value', e.target.value);
    // put the login here
 }
}
  render() {

    
    return (
      <div className = "project">
        <h1 className="text-center p-1 mb-5 project-title" id="project">
          <strong>My Personal Work</strong>
        </h1>


        <div className="container pb-4">
         <div className = "project-grid">

              <div>
                      <img
                      className="card-img"
                      src={spotifyClone}
                      alt="Card cap"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      onClick={() => this.openModal()}
                    />
                <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp"  onKeyDown={this.keyPress} onClickAway={() => this.closeModal()}>
                    <div>
                    <span>
                    {" "}
                    <h1 className="shopping-cart-title">
                      Simple Spotify Clone
                    </h1>
                    <h5>Built With:</h5>
                    <ul>
                      <li>Vanilla Javascript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>MySQL</li>
                    </ul>{" "}
                    <h5>Description:</h5>
                    <div>A simple Spotify inspired music client</div>
                  </span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
              </div>
              <div>
                 <img
                      className="card-img"
                      src={animeClient}
                      alt="Card cap"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      onClick={() => this.openModal()}
                    />
                <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <span>
                    {" "}
                    <h1 className="shopping-cart-title">React Anime List</h1>
                    <h5>Built With:</h5>
                    <ul>
                      <li>React</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>{" "}
                    <h5>Description:</h5>
                    <div>Using the Kitsu anime API, a simple client where you can search for 
                      certain animes
                    </div>
                  </span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
              </div>

              <div>
                 <img
                     className="card-img"
                      src={shoppingCart}
                      alt="Card cap"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      onClick={() => this.openModal()}
                    />
                <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <span>
                    {" "}
                    <h1 className="shopping-cart-title">Shopping Cart</h1>
                    <h5>Built With:</h5>
                    <ul>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                    </ul>
                    <h5>Description:</h5>
                    <div>A simple shopping cart application</div>
                  </span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
              </div>
            
          </div>
              
          
        </div>
      </div>
    );
  }
}
export default Project;
