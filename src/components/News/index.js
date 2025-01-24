import React from 'react';

import './styles.css';

const News = () => {
    return (
        <section className="news-section">
            <h2 className="news-title">Pizza du moment</h2>
            <p className="news-subtitle">Du 01/02/2024 au 28/02/2024</p>
            <div className="pizza-image-container">
                <img src={`${process.env.PUBLIC_URL}/images/logos/pizza.png`} alt="Pizza du mois" className="pizza-image" />
            </div>
            <div className="pizza-description">
                <h3>Pizza "La Royale de la Mer"</h3>
                <p>
                    Une combinaison savoureuse de fruits de mer frais, de sauce béchamel maison et de mozzarella fondante.
                    Accompagnée de tomates cerises rôties et de câpres pour une explosion de saveurs en bouche.
                    La pâte fine et croustillante est le parfait écrin pour cette délicieuse pizza, idéale pour
                    les amateurs de fruits de mer à la recherche d'une expérience gustative unique.
                </p>
                <p><strong>Prix : 15,90€</strong></p>
            </div>
        </section>
    );
};

export default News;
