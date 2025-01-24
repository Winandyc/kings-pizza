import React, { useState } from 'react';
import Header from '../../components/Header';

import './styles.css';

const Subscription = () => {
    // Gestion de l'état pour le menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const subscriptions = [
        {
            src: `${process.env.PUBLIC_URL}/images/bronze.png`,
            title: 'Abonnement BRONZE',
            price: '8,50€ /mois',
            description: 'Parce que pourquoi pas ! Vous obtenez un café gratuit à chaque commande et 5% de réduction sur nos pizzas.',
            benefits: [
                'Café gratuit à chaque commande 🍵',
                'Réduction de 5% sur nos pizzas 🍕',
                'Points de fidélité à utiliser pour des cadeaux fun 🎁'
            ]
        },
        {
            src: `${process.env.PUBLIC_URL}/images/silver.png`,
            title: 'Abonnement ARGENT',
            price: '10,29€ /mois',
            description: 'Parce que vous le méritez ! Bénéficiez d\'un dessert gratuit pour chaque commande et 10% de réduction sur nos pizzas.',
            benefits: [
                'Dessert offert avec chaque commande 🍰',
                'Réduction de 10% sur nos pizzas 🍕',
                'Accès à des événements privés pour nos abonnés (oui, on organise des soirées pizza) 🎉',
                'Points de fidélité à utiliser pour des cadeaux fun 🎁'
            ]
        },
        {
            src: `${process.env.PUBLIC_URL}/images/gold.png`,
            title: 'Abonnement OR',
            price: '13€ /mois',
            description: 'Parce que vous êtes VIP ! Vous avez la classe mais également une pizza gratuite chaque mois et 15% de réduction sur tout, même les boissons !',
            benefits: [
                'Pizza gratuite chaque mois 🍕',
                'Réduction de 15% sur tout',
                'Accès à des soirées VIP (oui, on met la musique, l\'ambiance et les pizzas) 🎶',
                'T-shirt exclusif avec notre logo cool 👕',
                'Points de fidélité doublés 🏆'
            ]
        }
    ];

    return (
        <div className={`subscriptions ${isMenuOpen ? 'darken' : ''}`}>
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            
            <h2 className="subscriptions-title">Découvrez nos formules d'abonnement !</h2>
            <div className="subscriptions-container">
                {subscriptions.map((subscription, index) => (
                    <div className="subscription-card" key={index}>
                        <img src={subscription.src} alt={subscription.title} className="subscription-img" />
                        <h3 className="subscription-title">{subscription.title}</h3>
                        <p className="subscription-price">{subscription.price}</p>
                        <p className="subscription-description">{subscription.description}</p>
                        <ul className="subscription-benefits">
                            {subscription.benefits.map((benefit, index) => (
                                <li key={index} className="benefit-item">⭐ {benefit}</li>
                            ))}
                        </ul>
                        <button className="subscription-btn">Je m'abonne !</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscription;
