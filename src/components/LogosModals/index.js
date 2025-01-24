import React from 'react';
import './styles.css';

const LogoModal = ({ isOpen, onClose, logo }) => {
    if (!isOpen || !logo) return null;

    const handleRedirect = (e) => {
        e.preventDefault(); // Empêche la redirection pour l'instant
        console.log("Lien cliqué : pas de redirection pour l'instant.");
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{logo.title}</h2>
                <div className="modal-media">
                    <img
                        src={logo.photoSrc[0]} // Affiche la seule image de l'abonnement
                        alt={logo.title}
                        className="modal-image"
                    />
                </div>
                <div className="modal-text">
                    <p>{logo.description}</p>
                    <h3 className="modal-price">{logo.price}</h3>
                </div>
                <p
                    className="modal-link"
                    onClick={handleRedirect}
                >
                    Voir la formule
                </p>
            </div>
        </div>
    );
};

export default LogoModal;
