import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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
            
            <div className="contact-info">
                <h3>Contactez-nous</h3>
                <p><strong>Téléphone :</strong> 04 04 04 04 04</p>
                <p><strong>Email :</strong> kingspizza@gmail.com</p>
                <p><strong>Adresse :</strong> 74 AV Jean Jaurès, 26200 Montélimar</p>
            </div>

            <div className="opening-hours">
                <h3>Heures d'ouverture :</h3>
                <p>Du Lundi au Dimanche : 18h - 23h</p>
            </div>

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

            {/* Section pour la carte */}
            <div className="map-container">
                {/* Ici on laisse la map vide pour l'instant */}
                <div className="map-placeholder">
                    <h4>La carte sera ici</h4>
                </div>
            </div>
        </div>
    );
};

export default About;
