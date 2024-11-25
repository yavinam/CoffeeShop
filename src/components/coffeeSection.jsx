// import React from "react";
// import "./CoffeeSection.css";
import CoffeeTwo from "../assets/coffee2.jpeg";
import CoffeeImage from "../assets/coffee-one.png";
import DoubleCoffee from "../assets/doubleCoffee.jpeg";
const CoffeeSection = () => {
  return (
    <div className="coffee-section">
      <div className="coffee-gallery">
        <img src={CoffeeTwo} alt="Coffee 1" className="coffee-image" />
        <img src={CoffeeImage} alt="Coffee 2" className="coffee-image" />
        <img src={DoubleCoffee} alt="Coffee 3" className="coffee-image" />
      </div>
      <div className="coffee-history">
        <h3 className="coffee-subtitle">Our history</h3>
        <h1 className="coffee-title">Create a new story with us</h1>
        <p className="coffee-description">
          Mauris rhoncus in imperdiet placerat. Vestibulum enim. A feyguat lorem
          ipsum maximum nisl suscipit ligula volutpat. Ut quam quis quam
          venenatis.
        </p>
      </div>
    </div>
  );
};

export default CoffeeSection;
