import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const pizzas = [
  { name: 'SICILIENNE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, olives' },
  { name: 'PRINCESSE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, jambon (épaule), olives' },
  { name: 'REINE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, jambon (épaule), champignons, olives' },
  { name: 'OCEANE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, moules, saumon fumé, crevettes, persillade, olives' },
  { name: 'BERGER', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, chèvre, miel, olives' },
  { name: 'NAPOLITAINE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, anchois, olives' },
  { name: 'CAPRICIEUSE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, anchois, câpres,  olives' },
  { name: 'CHAROLAISE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, viande hachée (cuisinée), olives' },
  { name: '5 FROMAGES', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, roquefort, chèvre, gorgonzola, picodon, olives' },
  { name: 'DU ROYANS', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, ravioles, olives' },
  { name: 'DU ROYANS ++', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, ravioles, saumon fumé, olives' },
  { name: 'ESPAGNOLETTE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, chorizo, poivrons, oignons, olives' },
  { name: 'COCOTINE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, poulet, pommes de terre, curry, olives' },
  { name: 'ESCARGOTS', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, escargots (achatines), persillade, olives' },
  { name: 'VEGETARIENNE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, poivrons, oignons, aubergines rôties, champignons, pommes de terre, olives' },
  { name: 'SERGOLA', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, poivrons, poulet, ravioles, mascarpone, pesto, olives' },
  { name: 'NORVEGIENNE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Bisque de homard, emmental, saumon (fumé), crevettes, persillade, olives' },
  { name: 'FERMIERE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, pommes de terre, chèvre, jambon (épaule), tagliatelles de courgettes, olives' },
  { name: 'PATATINE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Crème fraiche, emmental, pommes de terre, lardons, tartiflette, olives' },
  { name: 'ORIENTALE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, merguez, poivrons, oignons, olives' },
  { name: 'FARIGOULETTE', priceSmall: '13,90€', priceLarge: '14,90€', description: 'Tomate, emmental, poivrons, oignons, anchois, pesto, olives' },
];

export const PizzasMenu = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Redirige vers la page précédente
  };

  return (
    <div className="pizza-menu-container">
      <button onClick={handleClose} className="close-button">&times;</button>
      <h1>Nos Pizzas</h1>
      <h3>Deux tailles à disposition : <span>classique</span> 33cm & <span>géante</span> 45cm </h3>
      <div className="delivery">
        <p>À emporter ou en livraison :<span>15,00€</span></p>
      </div>
      <ul className="menu-list">
        {pizzas.map((pizza, index) => (
          <li key={index}>
            <div className="pizza-item">
              <span className="pizza-name">{pizza.name}</span>
              <span className="dots">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </span>
              <span className="price">{pizza.priceSmall} | {pizza.priceLarge}</span>
            </div>
            <div className="ingredient-description">{pizza.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasMenu;
