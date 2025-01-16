import React from 'react';

import './styles.css';

const Wok = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>CALZONE WOK MINUTE / PIZZA WOK MINUTE</h2>
                <div className="prices">
                    <p>À emporter ou en livraison :<span>18,50€</span></p>
                </div>
            </div>

            <div className="menu-steps">
                <p>1. Choisissez entre coulis de tomate ou crème</p>
                <p>2. Choisissez votre base</p>
                <p>3. Choisissez 4 ingrédients <span>(1,50€ l'ingrédient supplémentaire)</span></p>
                <p>4. Choisissez votre sauce wok</p>
            </div>

            <div className="choices">
                <h2>WOK MINUTE</h2>
                <div className="prices">
                    <p>À emporter ou en livraison :<span>15,00€</span></p>
                </div>

                <div className="menu-steps2">
                    <p>1. Choisissez entre coulis de tomate ou crème</p>
                    <p>2. Choisissez votre base</p>
                    <p>3. Choisissez 4 ingrédients <span>(1,50€ l'ingrédient supplémentaire)</span></p>
                    <p>4. Choisissez votre sauce wok</p>
                </div>
            </div >
        </div >
    );
};

export default Wok;
