import React, { Component } from 'react';
import YouTube from 'react-youtube'

class Projects extends Component {

    _onReady(e) {
        e.target.Video();
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        return(
            <div>
                <YouTube
                videoId={"H8kO7bLe3Cc"}
                opts={opts}
                // onReady={this._onReady}
                />
            </div>
        )
    }
}
export default Projects;