import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'

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
        title: "Persistent",
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
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
