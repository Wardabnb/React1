import React from "react";
import product from "../product.js";

export default function Image() {
  return (
    <div>
      <img src={product.imageUrl}></img>
    </div>
  );
}
