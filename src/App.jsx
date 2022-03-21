import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {Routes , Route} from "react-router-dom";
import axios from 'axios';
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Card from "./pages/components/Card";

function App() {
  
  return (
    <div className="App">
      Navbar here
      <Routes>
        <Route path="/mockman" element={<Mockman />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/Card" element={<Card />}/>
      </Routes>
    </div>
  );
}

export default App;
