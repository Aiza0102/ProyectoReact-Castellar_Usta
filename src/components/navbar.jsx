import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = ({ setCategory }) => {
const [scrolling, setScrolling] = useState(false);
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
};

const handleCategoryClick = (category) => {
    setCategory(category);
    setMobileMenuOpen(false);
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
            <Link to="/" onClick={() => handleCategoryClick('')}>Inicio</Link>
            <Link to="/ropa" onClick={() => handleCategoryClick('ropa')}>Ropa</Link>
            <Link to="/electronicos" onClick={() => handleCategoryClick('electronicos')}>Electrónicos</Link>
            <CartWidget />
            </div>
        </nav>
        </div>
    </header>
    );
};

export default NavBar;
