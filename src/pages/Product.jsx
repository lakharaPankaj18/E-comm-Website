import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Displayproduct from "../components/Displayproduct/Displayproduct";
import "./css/Product.css";
const Product = () => {
  const { product_list } = useContext(ShopContext);
  const { productId } = useParams();
  const product = product_list.find((item) => item.id === Number(productId));

  return (
    <div>
      <Displayproduct product={product} />
    </div>
  );
};

export default Product;
