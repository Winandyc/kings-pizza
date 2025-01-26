import React from 'react';

import './styles.css';

const Extras = () => {
  const drinks = [
    { name: "Cannette soft", price: "2,00€" },
    { name: "Bouteille d'eau", price: "1,00€" },
    { name: "Bouteille d'eau gazeuse (badoit)", price: "1,50€" },
    { name: "Capri-Sun", price: "1,00€" },
    { name: "Bouteille de soda (1,5L)", price: "3,50€" },
  ];

  const desserts = [
    {
      name: "Tiramisu Maison",
      price: "5,50€",
      img: `${process.env.PUBLIC_URL}/images/desserts/tiramisu.jpg`,
    },
    {
      name: "Fondant au Chocolat",
      price: "4,90€",
      img: `${process.env.PUBLIC_URL}/images/desserts/fondant.jpg`,
    },
    {
      name: "Glace 3 Boules",
      price: "4,00€",
      img: `${process.env.PUBLIC_URL}/images/desserts/glace.jpg`,
    },
    {
      name: "Cheesecake",
      price: "5,90€",
      img: `${process.env.PUBLIC_URL}/images/desserts/cheesecake.jpg`,
    },
    {
      name: "Mousse au Chocolat",
      price: "4,50€",
      img: `${process.env.PUBLIC_URL}/images/desserts/mousse.jpg`,
    },
  ];

  return (
    <div className="extras">
      {/* Section Boissons */}
      <div className="extra-section">
        <h1>Nos Boissons</h1>
        <ul className="drink-list">
          {drinks.map((drink, index) => (
            <li key={index}>
              <span>{drink.name}</span> <span>{drink.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section Desserts */}
      <div className="extra-section">
        <h1>Nos Desserts</h1>
        <div className="desserts-grid">
          {desserts.map((dessert, index) => (
            <div className="dessert-card" key={index}>
              <img
                src={dessert.img}
                alt={dessert.name}
                className="dessert-image"
              />
              <h4 className="dessert-name">{dessert.name}</h4>
              <p className="dessert-price">{dessert.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extras;
