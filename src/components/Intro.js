import React from "react";
import "../styles/intro.css";
import profilepic from "../assets/updated pic.jpg";

const Intro = () => (
  <div>
      <div className="intro">
        <img id="profilePic"src={profilepic} alt="profilePicture"></img>
        <h2>Web developer from Southern California. Educator and Life-Long Learner.
          <br></br>
          Have spend most of my career in education working as a secondary teacher of history and science. 
        Have a BA in business economics and strive to find creative solutions to ensure client satisfaction.
          <br></br>
        Looking to channel my creativity and problem solving through web development.
          <br></br> 
        Team oriented and self motivated with experience working with teams for front-end and back-end applications.
        </h2>
      </div>
      <div>
        <hr></hr>
        <h4 className="tag">
          <p>Take an analytical approach to problem solving and would like to apply my newly acquired techinical skills
                        in web development and programming to help you achieve your goals.</p>
        </h4>
        <hr></hr>
      </div>
  </div>
);

export default Intro;