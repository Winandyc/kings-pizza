import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import './styles.css';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`menu-container ${isMenuOpen ? 'darken' : ''}`}>
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <h1>Nos Menus</h1>
            <div className="menu-cards">
                <Link to="/menu/pizzeria" className="menu-card">
                    <h2>Pizzeria</h2>
                </Link>
                <Link to="/menu/restaurant" className="menu-card">
                    <h2>Restaurant</h2>
                </Link>
                <Link to="/menu/specialties" className="menu-card">
                    <h2>Nos spécialités</h2>
                </Link>
            </div>

            {/* Menu déroulant */}
            <div ref={menuRef} className={`sidebar ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
                <button className="close-button" onClick={toggleMenu}>&times;</button>
                <div className="sidebar-content">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#rooms">Découvrez nous !</a></li>
                        <li><a href="#about">À propos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
