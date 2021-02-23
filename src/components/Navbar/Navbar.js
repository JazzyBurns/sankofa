import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <div className="navbar-container">
            <a className="logo" href="/"><img src="images/Sankofa Logo.png" 
            alt="Sankofa" onClick={ closeMobileMenu }/></a>
            
            <div className="menu-icon" onClick={ handleClick }>
                <img src="images/menu-bars.png" alt="menu icon"/>
            </div>

            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-links" id="home-link">
                    <NavLink exact to='/' onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to='/directory' onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Directory
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/about-us" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        About Us
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/regional-center" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Regional Center
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/testimonies" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Testimonies
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/growing-together" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Growing Together
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/resources" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Resources
                    </NavLink>
                </li>
                <li className="nav-links">
                    <NavLink to="/contact-us" onClick={ closeMobileMenu }
                    activeStyle={{background: "#FFFCF8", color: "#556667"}}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;