import React, { useState } from 'react';
import LogoModal from '../LogosModals';

import './styles.css';

const Subscription = () => {
    const logos = [
        {
            src: `${process.env.PUBLIC_URL}/images/gold.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/gold.png`,
            ],
            title: 'Abonnement OR',
            description: 'Parce que vous le vallez bien',
            price: '13€ /mois',
        },
        {
            src: `${process.env.PUBLIC_URL}/images/silver.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/silver.png`,
            ],
            title: 'Abonnement ARGENT',
            description: 'Vous le méritez',
            price: '10,29€ /mois',
        },
        {
            src: `${process.env.PUBLIC_URL}/images/bronze.png`, // A CHANGER 
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/bronze.png`,
            ],
            title: 'Abonnement BRONZE',
            description: 'Parce que pourquoi pas !',
            price: '8,50€ /mois',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState(null);

    const openModal = (logo) => {
        setSelectedLogo(logo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLogo(null);
    };

    return (
        <div className="subscription">
            <h2 className="subscription-title">Découvrez nos offres d'abonnement</h2>
            <div className="logo-container">
                {[...logos].map((logo, index) => (
                    <div className="logo-item" key={index} onClick={() => openModal(logo)}>
                        <img src={logo.src} alt={logo.title} />
                        <h2>{logo.title}</h2>
                    </div>
                ))}
            </div>
            <LogoModal isOpen={isModalOpen} onClose={closeModal} logo={selectedLogo} />
        </div>
    );
};

export default Subscription;
