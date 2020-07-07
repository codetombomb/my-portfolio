import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.homeInfo.subtitle}</h2>
                <h2>{this.props.homeInfo.text}</h2>
                <h2>{this.props.homeInfo.title}</h2>
            </div>
        )
    }
}

export default Home;