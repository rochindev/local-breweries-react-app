import React from "react";
import { Link, NavLink } from 'react-router-dom'


export default function Navbar () {

    return (
        <div className="nav">
            <div>
                <NavLink to='/local-breweries-react-app/'>
                    <img alt='logo-bcb' src='./assets/logo.png' className="logo"/>
                </NavLink>
            </div>
            <div>
                <ul className="pages">
                    <NavLink to='/local-breweries-react-app/tijuana'>
                        <a>Tijuana</a>
                    </NavLink>
                    <NavLink to='/local-breweries-react-app/ensenada'>
                        <a>Ensenada</a>
                    </NavLink>
                    <NavLink to='/local-breweries-react-app/mexicali'>
                        <a>Mexicali</a>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}