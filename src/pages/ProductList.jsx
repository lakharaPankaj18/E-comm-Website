import React, { useState } from "react";
import product_list from "../components/Assets/product-list";
import Item from "../components/Item/Item";
import "./css/ProductList.css";
const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = product_list.filter((item) => {
    const itemName = item.name.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return itemName.includes(searchTermLower);
  });
  return (
    <div className="product-list">
      <div className="list-header">
        <h1>Search product by its name</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="productlist-items">
        {filteredProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
