import React from "react";
import BlenderImage from '../assets/blender.png'

const DiscoverCoffee = () => {
  return (
    <div className="container">
      <div className="discower-wrapper">
        <div>
          <img src={BlenderImage} alt="Coffee machine, buy for home" />
        </div>
        <div className="discover-card">
          <h3>Coffee <br /> machine, buy for home</h3>
          <p>
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nib maximus, est eu, mattis nuce. preasent ut quam quis
            quam venen atis fri ngilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
          <button className="hero-btn">DISCOVER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCoffee;
