import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from './Components/Nav/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import Projects from "./Components/Projects/Projects";


class App extends Component {
  constructor() {
    super();

    this.state = {
      sideDrawerOpen: false,
      title: "TOM TOBAR",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Full Stack Web Developer",
        subtitle: "My Projects",
        text: "Hi! My name is Tom and I am a web developer. After almost 10 years in the fun and energetic Motorcycle Industry, I decided to take a hobby to the next level and attend Flatiron School's Sofware Engineering Immersive program where I was met with a heaps of new challenges. I completed the program and created projects that I am very proud of. Flatiron instilled in me a love for programming and problem solving that I would like to share with everyone! I am a father, husband, and lover of family time video games."
      },
      contact: {
        title: "Tom Tobar",
      },
      projectDemoVideos: {
        covidChaos: {
          url: "youtube.com/watch?v=gVurgKxb6l8&t",
          title: "Covid Chaos",
          description: "Single Page Application dodging style game that uses the arrow keys to avoid enemies while earning points.",
          facts: {
            one: "Learned collision detection in JavaScript and sprite manipulation within the game loop.",
            two: "Managed time in order to deliver this project in the allotted time frame.",
            three: "Applied an Object Oriented Approach when rendering multiples of the same sprites on the canvas.",
          }
        },
        motoGo: {
          url: "youtube.com/watch?v=vbAduAp5svg",
          title: "MotoGo",
          description: "Motorcycle rental app that allows users to rent out their personal bikes.",
          facts: {
            one: "Used React JS to create a user friendly front end that interacts with the Rails API.",
            two: "Utilized Rails’ built in sessions to authenticate users on the back end.",
            three: "Obtains users IP address to geolocate and render exact position on Google Map API.",
          }
        },
        jeopardy: {
          url: "https://www.youtube.com/watch?v=YuLM-0J_7k8",
          title: "Jeopardy Lite",
          description: "Command line interface application game that aims at preparing a user for an appearance on the Jeopardy show",
          facts: {
            one: "Was able to deliver stretch goals for a more complete project with teamwork.",
            two: "Sourced a Public API to acquire and populate SQLite database with Jeopardy answers and questions.",
            three: "Created a friendly user experience on the command line using gems, terminal art, and audio."
          }
        },
        iceBreaker: {
          url: "https://www.youtube.com/watch?v=H8kO7bLe3Cc",
          title: "Ice Breaker",
          description: "A Command Line Interface application that allows users to learn a numbers based fact that will allow them to start a conversation with someone new.",
          facts: {
            one: "Built CLI application using Ruby on Rails",
            two: "Performs a GET request to a specific Numbers API endpoint if it is not already persisted in the SQLite3 database",
            three: "Implemented user Authentication with the TTY-Prompt Gem and Rails Active Record"
          }
        }
      }
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <BrowserRouter>
          <Switch>
            {/* 
          Route to home or top of page
           */}
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  title={this.state.title}
                  homeInfo={this.state.home}
                />
              )}
            />
            {/* 
          Route to the "about" section
           */}
            <Route
              exact
              path={"/projects"}
              render={(props) => <Projects {...props} videoInfo={this.state.projectDemoVideos} />}
            />

            <Route
              exact
              path={"/about"}
              render={(props) => (
                <About {...props} title={this.state.about.title} aboutMe={this.state.about.me} />
              )}
            />
            {/* Route to the bottom of the page with contact info */}
            <Route
              exact
              path={"/contact"}
              render={(props) => (
                <Contact {...props} title={this.state.contact.title} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
