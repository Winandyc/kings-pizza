import React, { useState } from 'react';
import LogoModal from '../LogosModals';

import './styles.css';

const BestSellers = () => {
    const logos = [
        {
            src: `${process.env.PUBLIC_URL}/images/logos/pizza-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/pizza.jpg`,
                `${process.env.PUBLIC_URL}/images/food/pizza2.jpg`,
                `${process.env.PUBLIC_URL}/images/food/pizza3.jpg`,
                `${process.env.PUBLIC_URL}/images/food/pizza4.jpg`
            ],
            title: 'Pizza XXL',
            description: 'La fameuse pizza traditionnelle de La Maison du Bon',
            price: '14,90€',
        },
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
        {
            src: `${process.env.PUBLIC_URL}/images/logos/salade-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/salade.jpg`,
                `${process.env.PUBLIC_URL}/images/food/salade2.jpg`,
                `${process.env.PUBLIC_URL}/images/food/salade3.jpg`
            ],
            title: 'Salade Repas',
            description: 'Une salade concoctée par vos soins',
            price: '13,90€',
        },
        {
            src: `${process.env.PUBLIC_URL}/images/logos/pizzawok-v.png`,
            photoSrc: [
                `${process.env.PUBLIC_URL}/images/food/pizzawok.jpg`,
                `${process.env.PUBLIC_URL}/images/food/pizzawok2.jpg`
            ],
            title: 'Pizza Wok XXL',
            description: 'Une pizza XXL à personnaliser entièrement',
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
        <div className="best-sellers">
            <h2 className="best-sellers-title">Nos meilleures ventes</h2>
            <div className="logo-container">
                {/* Duplication des logos pour créer un défilement continu */}
                {[...logos, ...logos].map((logo, index) => (
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

export default BestSellers;
