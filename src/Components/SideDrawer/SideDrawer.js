import React from 'react';
import './SideDrawer.css'

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">projects</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
                <li><a href="/">resume</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;