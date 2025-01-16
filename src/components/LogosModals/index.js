import React, { useState, useEffect } from 'react';

import './styles.css';

const LogoModal = ({ isOpen, onClose, logo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextMedia();
            } else if (e.key === 'ArrowLeft') {
                prevMedia();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen || !logo) return null;

    const totalItems = logo.photoSrc.length;

    const nextMedia = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevMedia = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const isVideo = logo.photoSrc[currentIndex].endsWith('.mp4'); // Vérifie si c'est une vidéo

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{logo.title}</h2>
                <div className="modal-media">
                    {isVideo ? (
                        <video controls className="modal-video">
                            <source src={logo.photoSrc[currentIndex]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={logo.photoSrc[currentIndex]}
                            alt={`${logo.title} media ${currentIndex + 1}`}
                            className="modal-image"
                        />
                    )}
                    <div className="navigation">
                        <button onClick={prevMedia} aria-label="Previous Media">&lt;</button>
                        <button onClick={nextMedia} aria-label="Next Media">&gt;</button>
                    </div>
                </div>
                <div className={`modal-text ${logo?.title === 'Patigot de la Mer' ? 'patigot' : ''}`}>
                    <p>{logo.description}</p>
                    <h3 className="modal-price">{logo.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default LogoModal;
