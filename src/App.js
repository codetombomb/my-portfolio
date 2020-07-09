import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

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
        title: "Persist 💪",
        subtitle: "My Projects",
        text: "Checkout my projects!"

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
              path={"/about"}
              render={props => (
                <About
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
