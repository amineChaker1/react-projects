import React from "react";
import classe from "./Filter.module.css";
const Filter = ({ FilterCars }) => {
  return (
    <div>
      <select onChange={(e) => FilterCars(e)}>
        <option value="All">All</option>
        <option value="SUV">SUV</option>
        <option value="Mini">Mini</option>
      </select>
    </div>
  );
};

export default Filter;
