import React, { useContext } from "react";
import "./css/Shopcategory.css";
import { ShopContext } from "../Context/Context";
import Item from "../components/Item/Item";
const Shopcategory = (props) => {
  const { product_list } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="indexsort">
        <p>
          <span>Showing 1-13</span> Out of 36 products
        </p>
      </div>
      <div className="products">
        {product_list.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default Shopcategory;
