import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class SocialMedia extends Component {
    render() {
        return(
            <div id="social-icons">
                {/* Github */}
                <SocialMediaIconsReact icon="github" url="https://github.com/codetombomb" backgroundColor={"black"} iconColor={"white"} size={50} iconSize={8}/>
                {/* Linkedin */}
                <SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/tomtobar/" backgroundColor={"black"} iconColor={"white"} size={50} iconSize={8}/>
                {/* Twitter */}
                <SocialMediaIconsReact icon="twitter" url="https://twitter.com/tom_tobar" backgroundColor={"black"} iconColor={"white"} size={50} iconSize={8}/>
                {/* Instagram */}
                <SocialMediaIconsReact icon="instagram" url="https://www.instagram.com/tombomb_85/" backgroundColor={"black"} iconColor={"white"} size={50} iconSize={8}/>
            </div>
        )
    }
}
export default SocialMedia;