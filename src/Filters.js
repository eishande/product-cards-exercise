import React from "react";
import "./Filters.css";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="Filters-row">
        <select value={this.props.categoryId} onChange={this.handleChange}>
          <option value={""}>All Products</option>
          {this.props.categories.map((category) => (
            <option value={category.categoryId}>{category.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Filters;
