import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartWidget from "./cartwidget";

const NavBar = () => {
const [scrolling, setScrolling] = useState(false);
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
        setScrolling(true);
        } else {
        setScrolling(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
};

return (
    <header className={`navbar ${scrolling ? "sticky" : ""}`}>
        <div className="nav-bar">
        <Link to="/" className="logo">
            AizaStore
        </Link>
        <FaBars className="nav-menu-btn" onClick={handleMenuToggle} />
        <FaTimes className="nav-close-btn" onClick={handleMenuToggle} />

        <nav className="navigation">
            <div className="nav-items">
            <Link to="/">Inicio</Link>
            <Link to="/ropa">Ropa</Link>
            <Link to="/electronicos">Electrónicos</Link>
            <CartWidget />
            {/* Agrega más enlaces según sea necesario */}
            </div>
        </nav>
        </div>
    </header>
    );
};

export default NavBar;
