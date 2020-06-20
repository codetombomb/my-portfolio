import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

class App extends Component {
  constructor() {
    super()

    this.state = {
      title: "Tom Tobar",
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
        <BrowserRouter>
          <Switch>
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
