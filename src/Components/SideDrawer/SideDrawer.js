import React from 'react';
import './SideDrawer.css'
import Resume from '../../ttobar.pdf';

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">about</a></li>
                <li><a href="/projects">projects</a></li>
                <li><a href={Resume} target="_blank" rel="noopener noreferrer">resume</a></li>
                <li><a href="mailto:devtomtobar@gmail.com" target="_blank" rel="noopener noreferrer">email me</a></li></ul>
        </nav >
    )
};

export default SideDrawer;