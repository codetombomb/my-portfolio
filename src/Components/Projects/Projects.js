import React from "react";
import ReactPlayer from 'react-player'
import './Project.css'

const Projects = props => {



  return (
    <div className="project-div">




      <div className="demo-wrapper">
        {/* Covid Chaos */}
        <h3>{props.videoInfo.covidChaos.title}</h3>
        <ReactPlayer
          className="demo-vid"
          url={props.videoInfo.covidChaos.url}



        />
        <div className="video-description">
          <p>
            {props.videoInfo.covidChaos.description}
          </p>
          <ul>
            <li><p>{props.videoInfo.covidChaos.facts.one}</p></li>
            <li><p>{props.videoInfo.covidChaos.facts.two}</p></li>
            <li><p>{props.videoInfo.covidChaos.facts.three}</p></li>
          </ul>
        </div>
      </div>


      <div className="demo-wrapper">
        {/* Covid Chaos */}
        <h3>{props.videoInfo.motoGo.title}</h3>
        <ReactPlayer
          className="demo-vid"
          url={props.videoInfo.motoGo.url}
        />
        <div className="video-description">
          <p>
            {props.videoInfo.motoGo.description}
          </p>
          <ul>
            <li><p>{props.videoInfo.motoGo.facts.one}</p></li>
            <li><p>{props.videoInfo.motoGo.facts.two}</p></li>
            <li><p>{props.videoInfo.motoGo.facts.three}</p></li>
            <li><p>{props.videoInfo.motoGo.facts.four}</p></li>

          </ul>
        </div>

      </div>





      <div className="demo-wrapper">
        {/* Covid Chaos */}
        <h3>{props.videoInfo.jeopardy.title}</h3>
        <ReactPlayer
          className="demo-vid"
          url={props.videoInfo.jeopardy.url}

        />
        <div className="video-description">
          <p>
            {props.videoInfo.jeopardy.description}
          </p>
          <ul>
            <li><p>{props.videoInfo.jeopardy.facts.one}</p></li>
            <li><p>{props.videoInfo.jeopardy.facts.two}</p></li>
            <li><p>{props.videoInfo.jeopardy.facts.three}</p></li>
          </ul>
        </div>
      </div>


      <div className="demo-wrapper">
        {/* Covid Chaos */}
        <h3>{props.videoInfo.iceBreaker.title}</h3>
        <ReactPlayer
          className="demo-vid"
          url={props.videoInfo.iceBreaker.url}

        />
        <div className="video-description">
          <p>
            {props.videoInfo.iceBreaker.description}
          </p>
          <ul>
            <li><p>{props.videoInfo.iceBreaker.facts.one}</p></li>
            <li><p>{props.videoInfo.iceBreaker.facts.two}</p></li>
            <li><p>{props.videoInfo.iceBreaker.facts.three}</p></li>
          </ul>
        </div>
      </div>



    </div>
  );
}
export default Projects;
