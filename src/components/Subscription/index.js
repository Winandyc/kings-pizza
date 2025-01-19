import React, { useState } from 'react';
import LogoModal from '../LogosModals';

import './styles.css';

const Subscription = () => {
    const logos = [
        {
            src: `${process.env.PUBLIC_URL}/images/logos/hamburger-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/prestige.jpg`,
                `${process.env.PUBLIC_URL}/images/food/prestige2.jpg`
            ],
            title: 'Hamburger Prestige',
            description: 'Un hamburger juteux et savoureux',
            price: '13€',
        },
        {
            src: `${process.env.PUBLIC_URL}/images/logos/patigot-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/patigot.jpg`,
                `${process.env.PUBLIC_URL}/images/food/patigot2.jpg`
            ],
            title: 'Patigot de la Mer',
            description: (
                <>
                    Notre spécialité de fruits de mer à base de pommes de terre, filets de colins, filets de cabillaud, séches, moules & gambas.
                    <br />
                    Le tout arrosé d'un aïoli spécial chaud.
                </>
            ),
            price: '15,50€',
        },
        {
            src: `${process.env.PUBLIC_URL}/images/logos/calzone-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/calzone.jpg`,
                `${process.env.PUBLIC_URL}/images/food/calzone2.jpg`,
            ],
            title: 'Calzone Géant',
            description: 'Un calzone triple XL confectionné selon vos gouts',
            price: '18,50€',
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
