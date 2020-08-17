import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from './Components/Nav/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume";


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
        text:
          "I worked in the Motorcycle Industry as a mechanic and a service advisor for almost 10 years before I decided to transition into web development. I attended Flatiron School December 2019, made my first computer game and fell in love. When I'm not coding, I spend time with my family and play video games. Because of my background, I tend to pay attention to details and think outside of the box creatively. I am actively seeking knowledge to expand my designing horizons.",
      },
      contact: {
        title: "Let's Chat",
      },
      projectDemoVideos: {
        covidChaos: {
          url: "youtube.com/watch?v=gVurgKxb6l8&t",
          title: "Covid Chaos",
          description: "Built using Javascript and Ruby on Rails, a dodging style game in which the player can accumulate points by collecting toilet paper rolls and hand sanitizer. The player must avoid Covid-19 viruses falling from above as well as other infected people falling from above.",
          facts: {
            one: "Frontend gameplay written in JavaScript with a Ruby on Rails API-Only backend to persist user’s credentials and score data.",
            two: "Implimented Object Oriented JavaScript and full CRUD functionality.",
            three: "Used the HTML canvas and requestAnimationFrame to allow for seamless animation during gameplay and a game loop that makes multiple inspections at each frame to allow the game to continue or end.",
          }
        },
        motoGo: {
          url: "youtube.com/watch?v=vbAduAp5svg",
          title: "MotoGo",
          description: "A Motorcycle rental application built using React JS and Ruby on Rails that allows users to list their personal motorcycles for lease for a period of time and make money.",
          facts: {
            one: "Combined React JS Framework and  React Router to quickly create this application with clean and abstracted architecture.",
            two: "Developed a Rails API backend with endpoints for users, posts, bikes, and join table creations for renter to post",
            three: "Uses the Google Maps API to allow users to see on a map, the proximity of available posted units. The users IP address is captured and sent to the Rails backend when a user signs up and converted to latitude and longitude coordinates.",
            four: "Utilized rails serializers to customize JSON output."
          }
        },
        jeopardy: {
          url: "https://www.youtube.com/watch?v=YuLM-0J_7k8",
          title: "Jeopardy Lite",
          description: "A game made for the Command Line that gives users a single player version of Jeopardy that will prepare them for their appearance on the Jeopardy show.",
          facts: {
            one: "CLI built using Ruby on Rails for the backend and SQlite3 database to store User and Jeopardy Question data.",
            two: "Uses the Eventmachine Gem timer module to create a time limit on the Jeopardy and Double Jeopardy round.",
            three: "Employed a beautiful interactive and easy to use user interface with the addition of the TTY - Prompt Gem."
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
            <Route
              exact
              path={"/resume"}
              render={(props) => (
                <Resume {...props} title={this.state.contact.title} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
