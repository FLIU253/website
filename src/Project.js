import React from 'react';
import './Project.css';
import shoppingCart from './images/shopping-cart.png';
import spotifyClone from './images/spotify-clone.png';
import animeClient from './images/anime-client.png';

class Project extends React.Component{

  constructor(props) {
    super(props);
    this.handleSpotifyMouseHover = this.handleSpotifyMouseHover.bind(this);
    this.handleShoppingCartMouseHover = this.handleShoppingCartMouseHover.bind(this);
    this.handleAnimeClientMouseHover=this.handleAnimeClientMouseHover.bind(this);

    this.state = {
      isSpotifyHover: false,
      isShoppingCartHover: false,
      isAnimeClientHover: false,
      hover: true
    };
  }

  handleShoppingCartMouseHover(){
    this.setState(this.toggleShoppingCartHoverState);
  }
  handleSpotifyMouseHover() {
    this.setState(this.toggleSpotifyHoverState);
  }
  handleAnimeClientMouseHover(){
    this.setState(this.toggleAnimeClientHoverState);
  }
  toggleSpotifyHoverState(state) {
    return {
      isSpotifyHover: !state.isSpotifyHover
    };
  }
  toggleShoppingCartHoverState(state){
    return{
      isShoppingCartHover: !state.isShoppingCartHover
    };
  }
  toggleAnimeClientHoverState(state){
    return{
      isAnimeClientHover: !state.isAnimeClientHover
    };
  }
  render() {

    return( <div>
      <h1 className="text-center p-1" id = "project">
      PROJECTS
      </h1>
  
      <div className = "container pb-4">
      <div className = "row">
      <div className = "col">
      <div className="card">
      <img className="card-img" src={shoppingCart} alt="Card cap" onMouseEnter={this.handleShoppingCartMouseHover} onMouseLeave={this.handleShoppingCartMouseHover}/>
      {
        this.state.isShoppingCartHover &&       
        <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        <ul className="card-text">
        <p>Bulit With:</p>
        <li>Angular 4 with Bootstrap</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express</li>
        </ul>
        </div>
      }
      </div>
      </div>
      <div className = "col">
      <div className="card">
      <img className="card-img" src={spotifyClone} alt="Card cap" 
      onMouseEnter={this.handleSpotifyMouseHover} onMouseLeave={this.handleSpotifyMouseHover}/>
      {
        this.state.isSpotifyHover && 
        <div className="card-body">
       <h5 className="card-title">Spotify Clone</h5>
       <ul className="card-text">
       <p>Bulit With:</p>
       <li>Pure JavaScript</li>
       <li>HTML</li>
       <li>CSS</li>
       <li>mySQL</li>
       </ul>
     </div>

      }
      </div>
      </div>
      <div className = "col">
      <div className="card">
      <img className="card-img" src={animeClient} alt="Card cap" 
      onMouseEnter={this.handleAnimeClientMouseHover} onMouseLeave={this.handleAnimeClientMouseHover}/>
       {
        this.state.isAnimeClientHover && 
        <div className="card-body">
         <h5 className="card-title">Anime Client</h5>
         <ul className="card-text">
         <p>Bulit With:</p>
         <li>React.js</li>
         <li>HTML</li>
         <li>CSS</li>
         <li>Kitsu Anime API</li>
         </ul>
       </div>

      }
      </div>
      </div>
      </div>
      </div>
      
      </div>);
  }
}
export default Project;