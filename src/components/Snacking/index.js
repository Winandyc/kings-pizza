import React from 'react';
import { useNavigate } from "react-router-dom";
import Snacks from '../Snacks';

export const Snacking = () => {
    const navigate = useNavigate();

    // Fonction pour fermer la page
    const handleClose = () => {
        navigate(-1); // Redirige vers la page précédente
    };

    return (
        <div className="snack-menu-container">
            {/* Bouton de fermeture */}
            <button onClick={handleClose} className="close-button">
                &times;
            </button>

            {/* Section Snacks */}
                <Snacks />
        </div>
    );
};
