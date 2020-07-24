import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from './Components/Nav/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import Projects from "./Components/Projects";
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
        title: "FULL STACK WEB DEVELOPER",
        subtitle: "My Projects",
        text:
          "I worked in the Motorcycle Industry as a mechanic, doing repairs and service, and a service adviser for almost 10 years. I transitioned into web development after helping my father in law with social media marketing project and found that I liked HTML and CSS. I attended Flatiron School and made my first computer game and fell in love. Because of my background as a mechanic, I tend to pay attention to details and think outside of the box creatively. I am actively seeking employment as a web developer and expanding my knowledge in web developement.",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Chat",
      },
    };
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
              render={(props) => <Projects {...props} />}
            />

            <Route
              exact
              path={"/about"}
              render={(props) => (
                <About {...props} title={this.state.about.title} />
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
