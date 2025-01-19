import React from 'react';
import { useNavigate } from "react-router-dom";
import Pizzas from '../../Pizzas';

import './styles.css';

export const Pizzeria = () => {
    const navigate = useNavigate();

    // Fonction pour fermer la page
    const handleClose = () => {
        navigate(-1); // Redirige vers la page précédente
    };

    return (
        <div className="pizzeria-menu-container">
            {/* Bouton de fermeture */}
            <button onClick={handleClose} className="close-button">
                &times;
            </button>

            {/* Section Pizzas */}
                <Pizzas />
        </div>
    );
};
