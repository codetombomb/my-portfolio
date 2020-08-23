import React from 'react';
import './Resume.css'




const Resume = props => (
  <div className="resume">
    <div className="resume-child">
      {/* <h1>{props.title}</h1> */}
      <p>Pflugerville, TX 78660 | 512-487-2569 | <a href={'mailto: devtomtobar@gmail.com'}>codetombomb@gmail.com</a></p>
      <p><a href={"https://github.com/codetombomb"} rel="noopener noreferrer" target="_blank">Github</a>| <a href={"https://medium.com/@codetombomb"} rel="noopener noreferrer" target="_blank">My Blog</a></p>
      <hr />
      <p>Junior Developer with Ruby on Rails and React.js based programming experience and a background in motorcycle mechanics. Excellent understanding of Full Stack Web Development and great customer service skills. With the high expectations I set for myself and my goal oriented approach, I am able to work well under pressure to meet deadlines or demand. As a programmer, I am excited to continue to learn and grow to fulfill my passion for web development.</p>
      <h3>TECHNICAL SKILLS</h3>
      <p style={{ fontWeight: "bold" }}>Ruby, Rails, SQLite3, Javscript, React, HTML, CSS</p>
      <h3>TECHNICAL PROJECTS</h3>
      <hr />


      <h3 style={{ fontWeight: "bold" }}>MotoGo</h3><p><a href="https://github.com/codetombomb/MotoGoApp" rel="noopener noreferrer" target="_blank">Github</a> | <a href="https://youtu.be/vbAduAp5svg" rel="noopener noreferrer" target="_blank">Demo</a></p>
      <p><em>A Motorcycle rental application built using React JS and Ruby on Rails that allows users to list their personal motorcycles for lease for a period of time and make money.</em></p>
      <ul>
        <li><p>Combined React JS Framework and  React Router to quickly create this application with clean and abstracted architecture.</p></li>
        <li><p>Developed a Rails API backend with endpoints for users, posts, bikes, and join table creations for renter to post.</p></li>
        <li><p>Uses the Google Maps API to allow users to see on a map, the proximity of available posted units. The users IP address is captured and sent to the Rails backend when a user signs up and converted to latitude and longitude coordinates.</p></li>
        <li><p>Utilized rails serializers to customize JSON output.</p></li>
      </ul>

      {/* Covid Chaos */}
      <h3 style={{ fontWeight: "bold" }}>Covid Chaos</h3><p><a href="https://github.com/codetombomb/covid-chaos-frontend" rel="noopener noreferrer" target="_blank">Github</a> | <a href="https://www.youtube.com/watch?v=gVurgKxb6l8" rel="noopener noreferrer" target="_blank">Demo</a></p>
      <p><em>Built using Javascript and Ruby on Rails, a dodging style game in which the player can accumulate points by collecting toilet paper rolls and hand sanitizer. The player must avoid Covid-19 viruses falling from above as well as other infected people falling from above. </em></p>
      <ul>
        <li><p>Frontend gameplay written in JavaScript with a Ruby on Rails API-Only backend to persist user’s credentials and score data. </p></li>
        <li><p>Applied a simplistic backend that serves JSON player past game info and endpoints for user CRUD functions.</p></li>
        <li><p>Used the HTML canvas and requestAnimationFrame to allow for seamless animation during gameplay and a game loop that makes multiple inspections at each frame to allow the game to continue or end.</p></li>
      </ul>

      {/* Jeopardy Lite */}
      <h3 style={{ fontWeight: "bold" }}>Jeopardy Lite</h3><p><a href="https://github.com/codetombomb/this_is_jeopardy" rel="noopener noreferrer" target="_blank">Github</a> | <a href="https://www.youtube.com/watch?v=YuLM-0J_7k8&feature=youtu.be" rel="noopener noreferrer" target="_blank">Demo</a></p>
      <p><em>A game made for the Command Line that gives users a single player version of Jeopardy that will prepare them for their appearance on the Jeopardy show.</em></p>
      <ul>
        <li><p>CLI built using Ruby on Rails for the backend and SQlite3 database to store User and Jeopardy Question data.</p></li>
        <li><p>Uses the Eventmachine Gem timer module to create a time limit on the Jeopardy and Double Jeopardy round.</p></li>
        <li><p>Employed a beautiful interactive and easy to use user interface with the addition of the TTY - Prompt Gem.</p></li>
      </ul>



      <h3 style={{ fontWeight: "bold" }}>IceBreaker</h3><p><a href="https://github.com/codetombomb/IceBreaker" rel="noopener noreferrer" target="_blank">Github</a> | <a href="https://www.youtube.com/watch?v=H8kO7bLe3Cc" rel="noopener noreferrer" target="_blank">Demo</a></p>
      <p><em>A Command Line Interface application that allows users to learn a numbers based fact that will allow them to start a conversation with someone new.</em></p>
      <ul>
        <li><p>Built CLI application using Ruby on Rails.</p></li>
        <li><p>Performs a GET request to a specific Numbers API endpoint if it is not already persisted in the SQLite3 database.</p></li>
        <li><p>Implemented user Authentication with the TTY-Prompt Gem and Rails Active Record.</p></li>
      </ul>


    </div>


  </div>

)
export default Resume;