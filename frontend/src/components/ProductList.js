import React from "react";
import "./ProductList.css";

const products = [
    { id: 1, name: 'Chocolate Cake', price: '$20', img: '/images/chocolate-cake.jpg' },
    { id: 2, name: 'Croissant', price: '$5', img: '/images/croissant.jpg' },
    { id: 3, name: 'Blueberry Muffin', price: '$3', img: '/images/blueberry-muffin.jpg' },
  ];
  
const ProductList = () => (
  <div className="product-list">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
);

export default ProductList;
