import React from "react";
import logoinvert from "../assets/logoinvert.png"

export default function Footer () {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={logoinvert} alt="Logo" />
                </div>
                <nav className="footer-nav">
                    <ul>
                        <li><NavLink to='/local-breweries-react-app/home'>
                            Homme
                        </NavLink></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2023 Rauncho. All Rights Reserved.</p>
            </div>
        </footer>
    )
}