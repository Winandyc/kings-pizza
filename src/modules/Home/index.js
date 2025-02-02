import React, { useState } from 'react';
import Header from '../../components/Header';
import BurgerMenu from '../../components/BurgerMenu';
import Subs from '../../components/Subs';
import News from '../../components/News';
import { Headset } from 'lucide-react';

import './styles.css';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`home ${isMenuOpen ? 'darken' : ''}`}>
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <div className="home-content1">
                {/* Zone gauche avec logo */}
                <div className="left-section">
                    <img src={`${process.env.PUBLIC_URL}/images/logos/logoKings2.png`} alt="Restaurant Logo" className="logo-intro" />
                    <p>
                        <strong>Pizzas au feu de bois - Une saveur unique !</strong>
                    </p>
                    <p>
                        Ouvert <strong> 7j/7 tous les soirs </strong>
                    </p>
                    <p>
                        <strong> 18h00 </strong> à <strong> 23h00 </strong>
                    </p>
                    <p>
                        <strong> A emporter ou en Livraison </strong>
                    </p>
                    <div className="contact-number">
                        <Headset className="icon" />
                        <p>04 04 04 04 04</p>
                    </div>
                </div>

                {/* Zone droite avec l'image */}
                <div className="right-section">
                    <div className="image-container">
                        <img src={`${process.env.PUBLIC_URL}/images/so-presto.jpg`} alt="So Presto" className="image" />
                    </div>
                </div>
            </div>

            {/* Zonde de texte */}
            <div className="text-section">
                <h2>Bienvenue Chez Kings Pizza !</h2>
                <p>
                    Découvrez l'authenticité de notre pizzeria avec des pizzas uniques cuites au feu de bois.
                </p>
                <br />
                <p>
                    Service de <strong> Pizzas </strong> et <strong> snacking </strong>
                </p>
                <br />
                <p>
                    Profitez d'une ambiance chaleureuse et d'un service amical. A emporter ou en livraison, c'est vous qui choisissez !
                </p>
            </div>


            <Subs />
            <News />

            {/* Utilisation du composant BurgerMenu */}
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div >
    );
};

export default Home;
