import React, { Component } from 'react';
import ReactGoogleDocsViewer from 'react-google-docs-viewer'

class Resume extends Component {
    render() {
        return (
            <div>
                <ReactGoogleDocsViewer
                    width="600px"
                    height="780px"
                    fileUrl=""
                />
            </div>
        )
    }
}
export default Resume;