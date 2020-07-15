import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';

class App extends Component {
  constructor() {
    super()

    this.state = {
      title: "TOM TOBAR",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "FULL STACK WEB DEVELOPER",
        subtitle: "My Projects",
        text: "I worked in the Motorcycle Industry as a mechanic, doing repairs and service, and a service adviser for almost 10 years. I transitioned into web development after helping my father in law with social media marketing project and found that I liked HTML and CSS. I attended Flatiron School and made my first computer game and fell in love. Because of my background as a mechanic, I tend to pay attention to details and think outside of the box creatively. I am actively seeking employment as a web developer and expanding my knowledge in Computer Science."
      },
      about: {
        title: 'About Me',

      },
      contact: {
        title: "Let's Chat"
      },


    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <BrowserRouter>
          <Switch>
          {/* 
          Route to home or top of page
           */}
            <Route
              exact
              path={"/"}
              render={props => (
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
              render={props => (
                <Projects
                  {...props}
                />
              )}
            />


            <Route
              exact
              path={"/about"}
              render={props => (
                <About
                  {...props}
                  title={this.state.about.title}
                  
                />
              )}
            />
            {/* Route to the bottom of the page with contact info */}
            <Route
              exact
              path={"/contact"}
              render={props => (
                <Contact
                  {...props}
                  title={this.state.contact.title}
                  
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
