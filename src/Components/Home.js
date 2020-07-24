import React, { Component } from "react";
import MyImage from "../images/IMG_1196.jpeg";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="my-name">{this.props.title}</h1>
        <hr />
        <img id="headshot-photo" alt="Tom Tobar" src={MyImage} />
        <h2>{this.props.homeInfo.title}</h2>
        <SocialMedia />
        <hr />
        <h2 id="about-me">ABOUT ME</h2>
        <p>{this.props.homeInfo.text}</p>
        <hr />
        <h2 id="my-projects">MY PROJECTS</h2>
        <Projects />
      </div>
    );
  }
}

export default Home;
