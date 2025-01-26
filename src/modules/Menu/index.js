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
            <div className="menu-cards">
                <Link to="/menu/pizzeria" className="menu-card">
                    <h2>Pizzeria</h2>
                </Link>
                <Link to="/menu/snacking" className="menu-card">
                    <h2>Snacking</h2>
                </Link>
                <Link to="/menu/extra" className="menu-card">
                    <h2>Boissons/desserts</h2>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
