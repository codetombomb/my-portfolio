import React, { Component } from "react";
import YouTube from "react-youtube";
import './Project.css'

class Projects extends Component {
  _onReady(e) {
    e.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "280",
      width: "420",
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <div className="project-div">
        <div className="demo-vid">
          {/* Covid Chaos */}
          <h3>Covid Chaos</h3>
          <YouTube id="covid-chaos" videoId={"gVurgKxb6l8"} opts={opts} />
          <p>
            Built using Javascript and Ruby on Rails, a dodging style game in which the player can accumulate points by collecting toilet paper rolls and hand sanitizer. The player must avoid Covid-19 viruses falling from above as well as other infected people falling from above.
          </p>
        </div>

        <div className="demo-vid">
          {/* MotoGo */}
          <h3>MotoGo</h3>
          <YouTube id="motogo" videoId={"vbAduAp5svg"} opts={opts} />
          <p>
            A Motorcycle rental application built using React JS and Ruby on Rails that allows users to list their personal motorcycles for lease for a period of time and make money.
        </p>
        </div>

        <div className="demo-vid">
          <h3>Jeopardy Lite</h3>
          <YouTube id="jeopardy" videoId={"YuLM-0J_7k8"} opts={opts} />
          <p>A game made for the Command Line that gives users a single player version of Jeopardy that will prepare them for their appearance on the Jeopardy show</p>
        </div>

        <div className="demo-vid">
          {/* IceBreaker */}
          <h3>IceBreaker</h3>
          <YouTube
            id="icebreaker"
            videoId={"H8kO7bLe3Cc"}
            opts={opts}
          />
          <p>A Command Line Interface application that allows users to learn a numbers based fact that will allow them to start a conversation with someone new</p>
        </div>
      </div>
    );
  }
}
export default Projects;
