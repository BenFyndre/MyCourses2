import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a separate CSS file for Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">CoursePage</Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/courses" className="navbar-link">Courses</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/cart" className="navbar-link">Cart</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/checkout" className="navbar-link">Checkout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;