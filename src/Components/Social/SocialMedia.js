import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class SocialMedia extends Component {
    constructor() {
        super()
        this.state = {
            color: "white"
        }
    }



    render() {
        return (
            <div>
                {/* Github */}
                <SocialMediaIconsReact className="icon" icon="github" url="https://github.com/codetombomb" backgroundColor={"black"} iconColor={this.state.color} size={35} iconSize={6} />
                {/* Linkedin */}
                <SocialMediaIconsReact className="icon" icon="linkedin" url="https://www.linkedin.com/in/tomtobar/" backgroundColor={"black"} iconColor={this.state.color} size={35} iconSize={6} />
                {/* Twitter */}
                <SocialMediaIconsReact className="icon" icon="twitter" url="https://twitter.com/tom_tobar" backgroundColor={"black"} iconColor={this.state.color} iconSize={6} />
                {/* Instagram */}
                <SocialMediaIconsReact className="icon" icon="instagram" url="https://www.instagram.com/tombomb_85/" backgroundColor={"black"} iconColor={this.state.color} size={35} iconSize={6} />
            </div>
        )
    }
}
export default SocialMedia;