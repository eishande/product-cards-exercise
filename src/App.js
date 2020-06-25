import React from "react";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { categoryId: "" };
  }

  handleChange(categoryId) {
    this.setState({ categoryId });
  }

  render() {
    return (
      <div className="app">
        <div className="App-row">
          <Filters
            categories={uniqueCategories}
            categoryId={this.state.categoryId}
            onChange={this.handleChange}
          />
        </div>
        <div className="App-row">
          <Products products={products} categoryId={this.state.categoryId} />
        </div>
      </div>
    );
  }
}
export default App;
