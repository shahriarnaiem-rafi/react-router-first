import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>THis is header</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobails">Mobailes</NavLink>
                <NavLink to="/leptops">Leptop</NavLink>
            </nav>
        </div>
    );
};

export default Header;