import React from "react";

import "./styles.css";

const Snacks = () => {
  const snacks = [
    {
      src: `${process.env.PUBLIC_URL}/images/snacks/fries.png`,
      name: "Frites maison",
      description: "Frites croustillantes faites maison, servies avec une sauce au choix.",
      price: "3,50€",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/snacks/wings.png`,
      name: "Chicken Wings",
      description: "Ailes de poulet marinées et dorées au four. Parfait pour les amateurs de saveurs épicées.",
      price: "6,90€",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/snacks/mozza-sticks.png`,
      name: "Mozzarella Sticks",
      description: "Bâtonnets de mozzarella fondants, enrobés d’une chapelure croustillante.",
      price: "5,90€",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/snacks/nuggets.png`,
      name: "Nuggets de poulet",
      description: "Morceaux de poulet tendre enrobés d'une panure dorée. Parfait pour les petits et grands.",
      price: "4,90€",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/snacks/salade.png`,
      name: "Salade César",
      description: "Salade fraîche avec poulet grillé, croûtons et sauce César maison.",
      price: "7,90€",
    },
  ];

  return (
    <div className="snacks">
      <h1 className="snacks-title">Nos snacks</h1>
      <div className="snacks-container">
        {snacks.map((snack, index) => (
          <div className="snack-card" key={index}>
            <img src={snack.src} alt={snack.name} className="snack-img" />
            <h3 className="snack-name">{snack.name}</h3>
            <p className="snack-description">{snack.description}</p>
            <p className="snack-price">{snack.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;
