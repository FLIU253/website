import React from "react";
import "./Landing.css";
import PORTAIT from "./images/portait.jpg";
  
const Landing = () => {
  return (
    <div className="wrapper" id = "landing">
      <div className="text-white text-center landing-info">
        <h1 data-aos="zoom-in" style = {{'color': '#E6F1FF', 'fontWeight' : 'bold', 'fontSize' : '70px'}}>
          {" "}
          <hr />
          Hello, I'm Franklin Liu <hr />
        </h1>
        <div className="profile" data-aos="zoom-in">
          <img
            src={PORTAIT}
            alt="portait"
            className="portait-img"
            data-aos="flip-up"
          />
          <div className="bio">
            <h3>Details</h3>
            <br />
            <p>
              <strong>Name:</strong>
            </p>
            <p>Franklin Liu</p>
            <p>
              <strong>Age:</strong>
            </p>
            <p>Born July 3rd, 1998</p>
            <p>
              <strong>Location: </strong>
            </p>
            <p>Toronto, Ontario</p>
            <p style={{ lineHeight: "1em" }}>
              Currently a software engineering student. Aspiring Fullstack Web
              Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
