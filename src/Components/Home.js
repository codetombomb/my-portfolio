import React, { Component } from 'react';
import MyImage from '../images/IMG_1196.jpeg'

class Home extends Component {
    render(){
        return(
            <div>
                <h1 className="my-name">{this.props.title}</h1>
                <hr/>
                <img id="headshot-photo" alt="Tom Tobar" src={MyImage}/>
                <h2>{this.props.homeInfo.title}</h2>
                {/* <h2>{this.props.homeInfo.subtitle}</h2>
                <h2>{this.props.homeInfo.text}</h2>
                <h2>{this.props.homeInfo.title}</h2> */}
            </div>
        )
    }
}

export default Home;