import React from "react";
import New from "../components/New/New";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollection from "../components/Newcollection/Newcollection";
const Home = () => {
  return (
    <div>
      <New />
      <Popular />
      <Offers />
      <Newcollection />
    </div>
  );
};

export default Home;
