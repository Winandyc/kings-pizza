import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';

import './styles.css';

const About = () => {
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
        <div className={`about ${isMenuOpen ? 'darken' : ''}`}>
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <h2>Contactez-nous</h2>
            <p>
                Pour toute question ou réservation, n'hésitez pas à nous contacter :
            </p>
            <p>
                <strong>Téléphone :</strong> 06 06 06 06 06
            </p>
            <p>
                <strong>Email :</strong> contact@lamaisondubon.com
            </p>
            <p>
                <strong>Adresse :</strong> 74 AV Jean Jaurès, 26200 Montélimar
            </p>
            <h3>Heures d'ouverture :</h3>
            <p>Lundi - Vendredi : 12h - 22h</p>
            <p>Samedi - Dimanche : 18h - 23h</p>

            {/* Menu déroulant */}
            <div ref={menuRef} className={`sidebar ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
                <button className="close-button" onClick={toggleMenu}>&times;</button>
                <div className="sidebar-content">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#subscription">Abonnement</a></li>
                        <li><a href="#about">À propos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
