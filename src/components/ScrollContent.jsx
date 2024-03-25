import React from "react";

const ItemCard = ({ item }) => {
  return (
    <span className="card-container">
      <img src={item} alt="dog" />
    </span>
  );
};

export default ItemCard;
