import "./Navbar.css";
import { useState } from "react";
// Import images
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/icon-menu.svg";
import closeIcon from "../../assets/icon-close-menu.svg";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    return (
        <nav className="navbar wrapper">
            <a href="#"><img src={logo} alt="snap logo" className="logo"/></a>

            <menu>
                <div className="modal-backdrop"></div>

                <div className="nav-links" id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
                    <ul className="main-menu">
                        <li className="drop-down"><a href="#">Features</a></li>
                        <li className="drop-down"><a href="#">Company</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About</a></li>
                    </ul>

                    <ul className="login-menu">
                        <li><a href="#">Login</a></li>
                        <li className="register"><a href="#">Register</a></li>
                    </ul>
                </div>
            </menu>

            {/* Div to hold hamburger icon and close icon */}
            <div className='menu-icons' onClick={toggleMenu}>
                {showMenu ? (
                    <img src={closeIcon} alt="close menu"/>
                ) : (
                    <img src={menuIcon} alt="open menu"/>
                )}
            </div>
        </nav>
    )
}

export default Navbar
