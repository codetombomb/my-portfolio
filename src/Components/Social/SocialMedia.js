import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class SocialMedia extends Component {
    constructor() {
        super()
        this.state = {
            color: "white",
            size: 35,
            iconSize: 6
        }
    }



    render() {
        return (
            <div>
                {/* Github */}
                <SocialMediaIconsReact className="icon" icon="github" url="https://github.com/codetombomb" backgroundColor={"black"} iconColor={this.state.color} size={this.state.size} iconSize={this.state.iconSize} />
                {/* Linkedin */}
                <SocialMediaIconsReact className="icon" icon="linkedin" url="https://www.linkedin.com/in/tomtobar/" backgroundColor={"black"} iconColor={this.state.color} size={this.state.size} iconSize={this.state.iconSize} />
                {/* Twitter */}
                <SocialMediaIconsReact className="icon" icon="twitter" url="https://twitter.com/tom_tobar" backgroundColor={"black"} iconColor={this.state.color} size={this.state.size} iconSize={this.state.iconSize} />
                {/* Instagram */}
                <SocialMediaIconsReact className="icon" icon="instagram" url="https://www.instagram.com/tombomb_85/" backgroundColor={"black"} iconColor={this.state.color} size={this.state.size} iconSize={this.state.iconSize} />
            </div>
        )
    }
}
export default SocialMedia;