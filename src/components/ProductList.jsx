import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onDelete, onIncrement, onCrudClick }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  };
  const productList = {
    backgroundColor: "#F9F5EB",
  };

  return (
    <div style={productList}>
      <h1 style={{ textAlign: "center", color: "grey" }}>Products</h1>

      <div style={gridStyle}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onCrudClick={onCrudClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
