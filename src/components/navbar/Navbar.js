import "./Navbar.css";
import { useState } from "react";
// Import images
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/icon-menu.svg";
import closeIcon from "../../assets/icon-close-menu.svg";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    const toggleSubMenu1 = () => {
        setShowSubMenu1(!showSubMenu1)
    };

    const toggleSubMenu2 = () => {
        setShowSubMenu2(!showSubMenu2)
    };

    return (
        <nav className="navbar wrapper">
            <a href="#"><img src={logo} alt="snap logo" className="logo" /></a>

            <menu>
                <div className="modal-backdrop"></div>

                <div className="nav-links" id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
                    <ul className="main-menu">
                        <li className={showSubMenu1 ? "submenu-open" : "submenu-closed"}
                            onClick={toggleSubMenu1}>
                            <a href="#">Features</a>
                        </li>
                        <li className={showSubMenu2 ? "submenu-open" : "submenu-closed"}
                            onClick={toggleSubMenu2}>
                            <a href="#">Company</a>
                        </li>
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
                    <img src={closeIcon} alt="close menu" />
                ) : (
                    <img src={menuIcon} alt="open menu" />
                )}
            </div>
        </nav>
    )
}

export default Navbar
