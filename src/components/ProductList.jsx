import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onDelete, onIncrement }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  };

  return (
    <div className="product-list">
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
