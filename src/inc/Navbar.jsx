import React from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container">
            <NavLink className="display-6 text-white fw-bold" to="/">APP</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-info" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-info" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-info" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;