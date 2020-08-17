import React from 'react';
import './Resume.css'




const Resume = props => (
  <div className="resume">
    <h1>{props.title}</h1>
    <p>Pflugerville, TX 78660 | 512-487-2569 | <a href={'mailto: devtomtobar@gmail.com'}>codetombomb@gmail.com</a></p>
    <p><a href={"https://github.com/codetombomb"} rel="noopener noreferrer" target="_blank">Github</a>| <a href={"https://medium.com/@codetombomb"} rel="noopener noreferrer" target="_blank">My Blog</a></p>
    <hr />
    <p>Junior Developer with Ruby on Rails and React.js based programming experience and a background in motorcycle mechanics. Excellent understanding of Full Stack Web Development and great customer service skills. With the high expectations I set for myself and my goal oriented approach, I am able to work well under pressure to meet deadlines or demand. As a programmer, I am excited to continue to learn and grow to fulfill my passion for web development.</p>
    <h3>TECHNICAL SKILLS</h3>
    <p style={{ fontWeight: "bold" }}>Ruby, Rails, SQLite3, Javscript, React, HTML, CSS</p>
    <h3>TECHNICAL PROJECTS</h3>
    <hr />


  </div>

)
export default Resume;