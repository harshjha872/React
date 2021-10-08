import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function Products() {
  return (
    <div className="w-full h-auto bg-gray-200 flex flex-row">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </div>
  );
}

export default Products;
