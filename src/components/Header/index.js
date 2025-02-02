import React from 'react';
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = ({ toggleMenu, isMenuOpen }) => {
    return (
        <header className="header">
            <div className="header-container">
                <img
                    src={`${process.env.PUBLIC_URL}/images/logos/logoKings2.png`}
                    alt="Logo Kings Pizza"
                    className="logo"
                    onClick={() => window.location.reload()}
                />
                {/* Affichage des liens en ligne pour les grands écrans */}
                <nav className="nav-links">
                    <Link to="/">Accueil</Link> {/* Home page */}
                    <Link to="/menu">Menu</Link>
                    <Link to="/subscription">Abonnement</Link>
                    <Link to="/about">À propos</Link> {/* Contact, adresse et map... */}
                </nav>
                {/* Affichage du menu burger uniquement pour les petits écrans */}
                <AlignJustify
                    className="menu-icon"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen ? "true" : "false"}
                />
            </div>
        </header>
    );
};

export default Header;
