// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">
                <FaHome /> Home
            </Link>
            <Link to="/movies" className="nav-link">
                <FaFilm /> Movies
            </Link>
            <Link to="/cart" className="nav-link">
                <FaShoppingCart /> Cart
            </Link>
            <Link to="/about" className="nav-link">
                <FaInfoCircle /> About
            </Link>
        </nav>
    );
}

export default Navbar;
