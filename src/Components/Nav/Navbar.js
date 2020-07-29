import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import './Navbar.css';
import SocialMedia from "../Social/SocialMedia";

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo"><a href="/">tom tobar</a></div>
      <div className="spacer" />
      <SocialMedia />
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/projects">projects</a></li>
          <li><a href="/">about</a></li>
          <li><a href="/contact">contact</a></li>
          <li><a href="/resume">resume</a></li>
        </ul>
      </div>
    </nav>
  </header>

)

export default Navbar;

// class Navbar extends Component {
//   constructor() {
//     super()
//     this.state = {
//       navState: "nav-links"
//     }
//     this.navSlide = this.navSlide.bind(this)
//   }

//   navSlide() {
//     console.log("sliding")
//     if (this.state.navState === "nav-links") {
//       this.setState({
//         navState: "nav-active"
//       })
//     } else {
//       this.setState({
//         navState: "nav-links"
//       })
//     }
//     debugger
//   };

//   render() {
//     return (
//       <div>
//         <nav>
//           <div className="logo">tom tobar</div>
//           <ul className={this.state.navState}>
//             <li>
//               <a href="/">projects</a>
//             </li>
//             <li>
//               <a href="/">about</a>
//             </li>
//             <li>
//               <a href="/">contact</a>
//             </li>
//             <li>
//               <a href="/">resume</a>
//             </li>
//           </ul>
//           <div className="burger" onClick={this.navSlide} >
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3"></div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
// export default Navbar;
