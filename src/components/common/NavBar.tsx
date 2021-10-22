import React from 'react';
import './commonComponents.css';

function NavBar() {
    return (
        <nav>
            <ul className="home-list">
                <li><a href="/home">Home</a></li>
            </ul>

            <ul className="info-list">
                <li><a href="/notifications">Notifications</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/sign-in">Sign-In</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
