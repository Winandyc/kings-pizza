import React from 'react';

import './styles.css';

const News = () => {
    return (
        <section className="news-section">
            <h2 className="news-title">Nos dernieres nouveautes</h2>
            <div className="news-poster">
                <h3 className="poster-title">Les Gratins de Ravioles de la mère Maury</h3>
                <ul className="poster-description">
                    <li>
                        <div><span>A la crème</span><span className="price">11.90€</span></div>
                        <div className="ingredient-description">Crème fraîche, parmesan, persil.</div>
                    </li>
                    <li>
                        <div><span>Aux légumes du soleil</span><span className="price">13.50€</span></div>
                        <div className="ingredient-description">Aubergines, courgettes, poivrons, tomates, herbes de Provence.</div>
                    </li>
                    <li>
                        <div><span>Aux escargots persillés</span><span className="price">14.00€</span></div>
                        <div className="ingredient-description">Escargots, beurre persillé, ail, persil.</div>
                    </li>
                    <li>
                        <div><span>Aux queues de crevettes</span><span className="price">14.00€</span></div>
                        <div className="ingredient-description">Queues de crevettes, sauce cocktail, citron.</div>
                    </li>
                    <li>
                        <div><span>Aux cèpes</span><span className="price">14.00€</span></div>
                        <div className="ingredient-description">Cèpes, crème fraîche, ail, persil.</div>
                    </li>
                </ul>
                <h3 className="poster-title2">Nouveaux Burgers</h3>
                <ul className="poster-description">
                    <li>
                        <div><span>Burger au bleu</span><span className="price">13.90€</span></div>
                        <div className="ingredient-description">Pain burger, steak haché, fromage bleu, salade, tomates, oignons caramélisés.</div>
                    </li>
                    <li>
                        <div><span>Burger savoyard</span><span className="price">13.90€</span></div>
                        <div className="ingredient-description">Pain burger, steak haché, röstis, reblochon, lardons fumés, salade, tomates, oignons caramélisés.</div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default News;
