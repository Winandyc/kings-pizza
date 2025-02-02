import React from 'react';
import './styles.css';

const Subs = () => {
    const logos = [
        {
            src: `${process.env.PUBLIC_URL}/images/logos/bronze.png`,
            title: 'Abonnement BRONZE',
            price: '8,50€ /mois',
            benefits: [
                'Réduction de 5% sur nos pizzas',
                '1 café offert pour chaque commande',
                'Accès aux offres limitées',
            ],
        },
        {
            src: `${process.env.PUBLIC_URL}/images/logos/silver.png`,
            title: 'Abonnement ARGENT',
            price: '10,29€ /mois',
            benefits: [
                '10% de réduction sur nos pizzas',
                'Un dessert offert avec chaque commande',
                'Accès prioritaire aux promos',
            ],
        },
        {
            src: `${process.env.PUBLIC_URL}/images/logos/gold.png`,
            title: 'Abonnement OR',
            price: '13€ /mois',
            benefits: [
                'Offres exclusives',
                '15% de réduction sur tout',
                'Une pizza offerte chaque mois',
                'Accès VIP aux événements',
            ],
        },
    ];

    return (
        <div className="sub">
            <h2 className="sub-title">Découvrez nos offres d'abonnement</h2>
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <div className="logo-item" key={index}>
                        <img src={logo.src} alt={logo.title} />
                        <h2>{logo.title}</h2>
                        <p className="price">{logo.price}</p>
                        <ul className="benefits">
                            {logo.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                            <li>...</li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="cta-container">
                <a href="/kings-pizza/subscription" className="cta-link">Comparer les offres</a>
            </div>
        </div>
    );
};

export default Subs;
