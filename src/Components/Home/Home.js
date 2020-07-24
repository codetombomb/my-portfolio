import React, { Component } from "react";
import MyImage from "../../images/IMG_1196.jpeg";
import SocialMedia from "../Social/SocialMedia";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-content">
        <hr />
        <img className="headshot-photo" alt="Tom Tobar" src={MyImage} />
        <h2 className="dev-title">{this.props.homeInfo.title}</h2>
        <SocialMedia />
        <hr />
        <h2 id="about-me">ABOUT ME</h2>
        <p>{this.props.homeInfo.text}</p>
      </div>
    );
  }
}

export default Home;
