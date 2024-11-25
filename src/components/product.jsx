// import React from "react";
// import "./ProductSection.css";
import BrasilProductImg from "../assets/brasil.jpeg"
const ProductSection = () => {
  return (
    <section className="product-section">
      <h3 className="section-title">Coffee Popular Products</h3>
      <div className="product-grid">
        <div className="product-card">
          <img
            src={BrasilProductImg}
            alt="Brazil Coffee"
            className="product-image"
          />
          <h4 className="product-title">Brazil Coffee Grid</h4>
          <p className="product-price">Price: $300 - $500</p>
        </div>
        <div className="product-card">
          <img
            src={BrasilProductImg}
            alt="Colombia Coffee"
            className="product-image"
          />
          <h4 className="product-title">Colombia Coffee Grid</h4>
          <p className="product-price">Price: $350 - $600</p>
        </div>
        <div className="product-card">
          <img
            src={BrasilProductImg}
            alt="Ethiopia Coffee"
            className="product-image"
          />
          <h4 className="product-title">Ethiopia Coffee Grid</h4>
          <p className="product-price">Price: $400 - $700</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
