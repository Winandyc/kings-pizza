import React from 'react';

import './styles.css';

const News = () => {
    return (
        <div className="news-wrapper">
            <section className="news-section">
                <h2 className="news-title">Pizza du moment</h2>
                <p className="news-subtitle">Du 01/02/2024 au 28/02/2024</p>
                <div className="pizza-image-container">
                    <img src={`${process.env.PUBLIC_URL}/images/logos/pizza.png`} alt="Pizza du mois" className="pizza-image" />
                </div>
                <div className="pizza-description">
                    <h3 className="pizza-name">Pizza "La Royale de la Mer"</h3>
                    <ul className="pizza-details">
                        <li>
                            <span className="detail-icon">🍤</span>
                            Fruits de mer frais pour une saveur authentique.
                        </li>
                        <li>
                            <span className="detail-icon">🧀</span>
                            Sauce béchamel maison et mozzarella fondante.
                        </li>
                        <li>
                            <span className="detail-icon">🍅</span>
                            Tomates cerises rôties et câpres pour un goût raffiné.
                        </li>
                        <li>
                            <span className="detail-icon">🍕</span>
                            Pâte fine et croustillante, parfaite pour sublimer les saveurs.
                        </li>
                    </ul>
                    <p className="pizza-price"><strong>Prix : 15,90€</strong></p>
                </div>
            </section>
        </div>
    );
};

export default News;
