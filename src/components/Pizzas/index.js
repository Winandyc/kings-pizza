import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const pizzas = {
  baseTomate: [
    { name: '4 FROMAGES', price: '14,90€', description: 'Olives, mozzarella, emmental, roquefort, parmesan, origan' },
    { name: '3 FROMAGES', price: '14,90€', description: 'Olives, mozzarella, roquefort, parmesan, origan' },
    { name: 'MARGARITA', price: '14,90€', description: 'Olives, mozzarella, origan' },
    { name: 'PROVENCALE', price: '14,90€', description: 'Olives, mozzarella, légumes à la provençale, origan' },
    { name: 'EFFILOCHE DE BOEUF AU BBQ', price: '14,90€', description: 'Olives, mozzarella, effiloché de bœuf, épices BBQ, oignons pré frits, origan' },
    { name: 'JAMBON FROMAGE', price: '14,90€', description: 'Olives, mozzarella, allumettes de jambon, origan' },
    { name: 'BURGER', price: '14,90€', description: 'Olives, mozzarella, viande hachée, cheddar, origan' },
    { name: 'MEXICAINE', price: '14,90€', description: 'Olives, mozzarella, viande hachée, épices à la mexicaine, poivrons, oignons pré frits, origan' },
    { name: 'PEPPERONI', price: '14,90€', description: 'Olives, mozzarella, pepperoni, origan' },
    { name: 'MERGUEZ', price: '14,90€', description: 'Olives, mozzarella, merguez en rondelles, pesto, origan' },
    { name: 'CARNIVORE', price: '14,90€', description: 'Olives, mozzarella, viande hachée, merguez, poivrons, origan' },
    { name: 'LA BBQ', price: '14,90€', description: 'Olives, mozzarella, effiloché BBQ, oignons pré frits' },
  ],
  baseCreme: [
    { name: '4 FROMAGES', price: '14,90€', description: 'Olives, mozzarella, emmental, roquefort, chèvre, origan' },
    { name: '3 FROMAGES', price: '14,90€', description: 'Olives, mozzarella, roquefort, parmesan, origan' },
    { name: 'PESTO', price: '14,90€', description: 'Olives, mozzarella, pesto, tomates cerises confites, copeaux de parmesan, origan' },
    { name: 'CHEVRE MIEL', price: '14,90€', description: 'Olives, mozzarella, chèvre, miel, origan' },
    { name: 'GORGONZOLA', price: '14,90€', description: 'Olives, mozzarella, gorgonzola, noix hachées, origan' },
    { name: 'FONDUE SAVOYARDE', price: '14,90€', description: 'Olives, emmental, comté, tomme, beaufort, origan' },
    { name: 'POULET BBQ', price: '14,90€', description: 'Olives, mozzarella, poulet mariné au BBQ, oignons pré frits, origan' },
    { name: 'POULET PESTO', price: '14,90€', description: 'Olives, mozzarella, poulet, pesto, origan' },
    { name: 'CARBONARA', price: '14,90€', description: 'Olives, mozzarella, lardons, filet de crème fraîche, oignons pré frits, origan' },
    { name: 'POULET CURRY', price: '14,90€', description: 'Olives, mozzarella, poulet mariné au curry, origan' },
    { name: 'JAMBON FROMAGE CREME', price: '14,90€', description: 'Olives, mozzarella, allumettes de jambon, origan' },
    { name: 'SAVOYARDE', price: '14,90€', description: 'Olives, mozzarella, lardons, raclette en tranches, oignons pré frits, origan' },
    { name: 'MONTAGNARDE', price: '14,90€', description: 'Olives, mozzarella, tranches de coppa, reblochon, oignons pré frits, origan' },
    { name: 'SOMMET', price: '14,90€', description: 'Olives, mozzarella, saucisse fumée, raclette, oignons pré frits, origan' },
    { name: 'REBLOCHONNADE', price: '14,90€', description: 'Olives, mozzarella, saucisse fumée, reblochon, oignons pré frits, origan' },
    { name: 'CHAMOIS', price: '14,90€', description: 'Olives, emmental, tranches de lard, oignons pré frits, origan' },
    { name: 'FOURME D AMBERT', price: '14,90€', description: 'Olives, mozzarella, fourme d\'Ambert, coppa, noix, origan' },
    { name: 'ALTITUDE', price: '14,90€', description: 'Olives, mozzarella, lardons, oignons pré frits, origan' },
    { name: 'COPPA CHEVRE', price: '14,90€', description: 'Olives, mozzarella, tranches de coppa, chèvre, origan' },
    { name: 'POULET BACON', price: '14,90€', description: 'Olives, mozzarella, poulet, bacon, origan' },
    { name: 'KEBAB', price: '14,90€', description: 'Olives, mozzarella, poulet mariné au kebab, sauce blanche, origan' },
    { name: 'ALLUMETTES DE VOLAILLE ET CHEVRE', price: '14,90€', description: 'Olives, mozzarella, allumettes de volaille, chèvre, origan' },
    { name: 'SAUMON', price: '14,90€', description: 'Olives, mozzarella, saumon fumé, aneth, origan' },
  ],
};

export const PizzasMenu = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Redirige vers la page précédente
  };

  return (
    <div className="pizza-menu-container">
      <button onClick={handleClose} className="close-button">&times;</button>
      <h1>Nos Pizzas</h1>
      <h2>Une seule taille : <span> 29cm </span></h2>
      <div className="delivery">
        <p>À emporter ou en livraison :<span>15,00€</span></p>
      </div>
      <h2>Base tomate</h2>
      <ul className="menu-list">
        {pizzas.baseTomate.map((pizza, index) => (
          <li key={`tomate-${index}`}>
            <div className="pizza-item">
              <span className="pizza-name">{pizza.name}</span>
              <span className="dots"> . . . . . . . . . . . . .  </span>
              <span className="price">{pizza.price}</span>
            </div>
            <div className="ingredient-description">{pizza.description}</div>
          </li>
        ))}
      </ul>
      <h2>Base crème fraîche</h2>
      <ul className="menu-list">
        {pizzas.baseCreme.map((pizza, index) => (
          <li key={`creme-${index}`}>
            <div className="pizza-item">
              <span className="pizza-name">{pizza.name}</span>
              <span className="dots"> . . . . . . . . . . . . .  </span>
              <span className="price">{pizza.price}</span>
            </div>
            <div className="ingredient-description">{pizza.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasMenu;