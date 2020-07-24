import React, { Component } from 'react';
import './Social.css'
import { SocialMediaIconsReact } from 'social-media-icons-react';

class SocialMedia extends Component {
    render() {
        return (
            <div>
                {/* Github */}
                <SocialMediaIconsReact id="social-icon" icon="github" url="https://github.com/codetombomb" backgroundColor={"black"} iconColor={"white"} size={40} iconSize={8} />
                {/* Linkedin */}
                <SocialMediaIconsReact id="social-icon" icon="linkedin" url="https://www.linkedin.com/in/tomtobar/" backgroundColor={"black"} iconColor={"white"} size={40} iconSize={8} />
                {/* Twitter */}
                <SocialMediaIconsReact id="social-icon" icon="twitter" url="https://twitter.com/tom_tobar" backgroundColor={"black"} iconColor={"white"} size={40} iconSize={8} />
                {/* Instagram */}
                <SocialMediaIconsReact id="social-icon" icon="instagram" url="https://www.instagram.com/tombomb_85/" backgroundColor={"black"} iconColor={"white"} size={40} iconSize={8} />
            </div>
        )
    }
}
export default SocialMedia;