import React from 'react';
import { useNavigate } from "react-router-dom";
import Extras from '../Extras';

export const Extra = () => {
    const navigate = useNavigate();

    // Fonction pour fermer la page
    const handleClose = () => {
        navigate(-1); // Redirige vers la page précédente
    };

    return (
        <div className="extra-menu-container">
            {/* Bouton de fermeture */}
            <button onClick={handleClose} className="close-button">
                &times;
            </button>

            {/* Section Extras */}
                <Extras />
        </div>
    );
};
