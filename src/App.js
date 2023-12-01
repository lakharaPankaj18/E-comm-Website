import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Shopcategory from "./pages/Shopcategory";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Shopcategory category="mens" />} />
          <Route path="/womens" element={<Shopcategory category="womens" />} />
          <Route path="/kids" element={<Shopcategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route
            path="/summer-collection"
            element={<Shopcategory category="summer" />}
          />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
