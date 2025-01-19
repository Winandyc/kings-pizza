import React, { useState } from 'react';
import Header from '../../components/Header';
import BurgerMenu from '../../components/BurgerMenu';
import Subscription from '../../components/Subscription';
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
                    <img src={`${process.env.PUBLIC_URL}/images/logoKings2.png`} alt="Restaurant Logo" className="logo-intro" />
                    <p>
                        <strong>Pizzas traditionnelles - Viande Angus Irlandaise de qualité supérieure</strong>
                    </p>
                    <p>
                        Sur place 5j/7 midi & soir : du <strong> Mardi au Samedi </strong>
                    </p>
                    <p>
                        Service de <strong> 11h45 à 13h15 </strong> et de <strong> 19h00 à 21h15 </strong>
                    </p>
                    <p>
                        A emporter ou en Livraison 7j/7 (sauf le Dimanche midi)
                    </p>
                    <div className="contact-number">
                        <Headset className="icon" />
                        <p>04 75 90 97 86</p>
                    </div>
                </div>

                {/* Zone droite avec la vidéo */}
                <div className="right-section">
                    <div className="video-container">
                        <video src={`${process.env.PUBLIC_URL}/videos/introducting.mp4`} controls className="video" />
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
                    Ne manquez pas notre spécialité unique : le <strong>Patigot de la Mer</strong>, un délicieux plat aux fruits de mer qui saura ravir vos papilles.
                </p>
                <br />
                <p>
                    Profitez d'une ambiance chaleureuse et d'un service amical dans un cadre inspiré des saloons du Far West, parfait pour passer un moment convivial entre amis ou en famille.
                </p>
            </div>

            <Subscription />
            <News />

            {/* Utilisation du composant BurgerMenu */}
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    );
};

export default Home;
