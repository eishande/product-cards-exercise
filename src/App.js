import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import products from "./products.json";
import Filters from "./Filters";

const categories = products.flatMap((product) => product.categories);

const uniqueCategories = [...new Set(categories.map((c) => c.categoryId))].map(
  (categoryId) => {
    return {
      categoryId: categoryId,
      name: categories.find((c) => c.categoryId === categoryId).name,
    };
  }
);

const App = () => {
  const [categoryId, setCategory] = useState("");

  return (
    <div className="app">
      <div className="App-row">
        <Filters
          categories={uniqueCategories}
          categoryId={categoryId}
          onChange={setCategory}
        />
      </div>
      <div className="App-row">
        <Products products={products} categoryId={categoryId} />
      </div>
    </div>
  );
};

export default App;
