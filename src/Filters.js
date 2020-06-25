import React from "react";
import "./Filters.css";

const Filters = (props) => {
  return (
    <div className="Filters-row">
      <select
        value={props.categoryId}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value={""} key={""}>
          All Products
        </option>
        {props.categories.map((category) => (
          <option value={category.categoryId} key={category.categoryId}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
