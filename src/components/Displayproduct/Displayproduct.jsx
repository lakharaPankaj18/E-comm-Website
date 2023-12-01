import React, { useContext } from "react";
import "./Displayproduct.css";
import ratingstar from "../Assets/productimages/rating.png";
import dullratingstar from "../Assets/productimages/dull.png";
import { ShopContext } from "../../Context/Context";

const Displayproduct = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="displayproduct">
      <div className="leftsection">
        <img src={product.image} alt="" />
      </div>
      <div className="rightsection">
        <h4>{product.name}</h4>
        <div className="star-rating">
          <img src={ratingstar} alt="" />
          <img src={ratingstar} alt="" />
          <img src={ratingstar} alt="" />
          <img src={ratingstar} alt="" />
          <img src={dullratingstar} alt="" />
          <p>(99)</p>
        </div>
        <div className="prices">${product.price}</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sunt vitae dicta in accusamus alias blanditiis obcaecati. Fuga nobis
          maiores optio esse reiciendis molestiae numquam illum, vero
          consequatur cumque aspernatur.
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Displayproduct;
