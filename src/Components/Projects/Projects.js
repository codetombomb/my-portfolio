import React, { Component } from "react";
import YouTube from "react-youtube";
import './Project.css'

class Projects extends Component {
  _onReady(e) {
    e.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "300",
      width: "500",
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
        </div>
        <div className="demo-vid">
          {/* MotoGo */}
          <h3>MotoGo</h3>
          <YouTube id="motogo" videoId={"vbAduAp5svg"} opts={opts} />
        </div>
        <div className="demo-vid">
          <h3>Jeopardy Lite</h3>
          <YouTube id="jeopardy" videoId={"YuLM-0J_7k8"} opts={opts} />
        </div>
        <div className="demo-vid">
          {/* IceBreaker */}
          <h3>IceBreaker</h3>
          <YouTube
            id="icebreaker"
            videoId={"H8kO7bLe3Cc"}
            opts={opts}
          />
        </div>
      </div>
    );
  }
}
export default Projects;
