import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const BurgerMenu = ({ toggleMenu, isMenuOpen }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                toggleMenu(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, toggleMenu]);

    return (
        <div ref={menuRef} className={`sidebar ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            <button className="close-button" onClick={() => toggleMenu(false)}>&times;</button>
            <div className="sidebar-content">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/rooms">Découvrez nous !</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
