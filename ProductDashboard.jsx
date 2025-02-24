import React from "react";
import "./ProductDashboard.css";

const products = [
  { name: "Printed Cotton Jacket", tags: "Unisex | Bag", var: 2, price: "$45.00", stock: 999, low: 500 },
  { name: "Blue Faux Leather", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Tribal Waterfall Vest", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Brave Bomber Jacket", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Olive Drape Vest", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Black Denim Jacket", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Army Green Jacket", tags: "Unisex | Bag", var: 3, price: "$45.00", stock: 999, low: 500 }
];

const ProductDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Products</h2>
      <div className="filter-buttons">
        <button className="active">Active</button>
        <button>Inactive</button>
        <button>All</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Tags</th>
            <th>Var</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{product.name}</td>
              <td>{product.tags}</td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashboard;
