import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {Routes , Route} from "react-router-dom";
import axios from 'axios';
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SignUp from "./pages/auth/SignUp"
import Login from "./pages/auth/Login"
import Navbar from './pages/components/Navbar';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
