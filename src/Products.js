import React from "react";
import Product from "./Product";
import "./Products.css";

const filterProducts = (props) => {
  let filteredProducts = null;

  if (props.categoryId) {
    filteredProducts = props.products.filter((p) =>
      p.categories.some((c) => c.categoryId === props.categoryId)
    );
  } else {
    filteredProducts = props.products;
  }

  return filteredProducts.map((product) => (
    <Product key={product.variantId} product={product} />
  ));
};

const Products = (props) => {
  return <div className="Products-grid">{filterProducts(props)}</div>;
};

export default Products;
