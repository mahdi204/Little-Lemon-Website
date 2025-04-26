import React, { useState } from 'react';
import '../index.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>

            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><a href="">Home</a></li>
                <li><a href="">Reserve</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
            </ul>

            <div className="burger" onClick={toggleMenu}>
                {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </div>

        </nav>
    );
};

export default Nav;
