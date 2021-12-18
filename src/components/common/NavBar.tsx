import React from 'react';
import { Link } from 'react-router-dom';
import './commonComponents.css';

function NavBar() {
    return (
        <nav>
            <ul className="home-list">
                <Link to="/home">Home</Link>
            </ul>

            <ul className="info-list">
                <Link to="/notifications">Notifications</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/sign-in">Sign-In</Link>
            </ul>
        </nav>
    )
}

export default NavBar;
