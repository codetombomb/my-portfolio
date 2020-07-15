import React, { Component } from 'react';
import MyImage from '../images/IMG_1196.jpeg'
import Projects from './Projects';



class Home extends Component {
    render(){
        return(
            <div>
                <h1 className="my-name">{this.props.title}</h1>
                <hr/>
                <img id="headshot-photo" alt="Tom Tobar" src={MyImage}/>
                <h2>{this.props.homeInfo.title}</h2>
                <hr/>
                <h2 id="about-me" style={{position: "relative", left: "160px"}}>ABOUT ME</h2>
                <p>{this.props.homeInfo.text}</p>
                <hr/>
                <h2 id="my-projects" style={{position: "relative", left: "145px"}}>MY PROJECTS</h2>
                <Projects/>
            </div>
        )
    }
}

export default Home;