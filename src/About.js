import React from 'react';
import './About.css';

const About = () => {
  return(
    <div className="content" id ="about">
      <h1 className = "text-center">ABOUT</h1>
      <div className="container">
      <div className="row">
      <div className="col">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      <div className="col">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      <div className="col">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      <div className="col">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      </div>
      <div className="row pt-5">
      <div className="col">
      Who is this guy?
      </div>
      <div className="col">
      skill section
      <br/>
      <br/>
       <h6 className="progress-label">Java</h6>
      <div className="progress mb-2" style = {{height: '20px'}}>
      <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> 25%</div>
    </div>
    <h6 className="progress-label">Java</h6>
    <div className="progress mb-2" style = {{height: '20px'}}>
      <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h6 className="progress-label">Java</h6>
    <div className="progress mb-2" style = {{height: '20px'}}>
      <div className="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h6 className="progress-label">Java</h6>
    <div className="progress mb-2" style = {{height: '20px'}}>
      <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

      </div>
      </div>
      </div>
 </div>
  );
}
export default About;