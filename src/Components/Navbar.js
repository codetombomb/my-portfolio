import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="#my-projects">PROJECTS</a></li>
                        <li><a href="#about-me">ABOUT</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                        <li><a href="/resume">RESUME</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;