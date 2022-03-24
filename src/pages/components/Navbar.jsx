import React from 'react'
import '../css/navbar.css'
import {Link } from "react-router-dom"
import { useCart } from '../../cartcontext'
import { useState } from 'react'
const navbar = () => {
    const {state,cartquantity} = useCart();
    // const [cartquantity , setcartquantity] = useState(0)
    
    
return (

<div id="navbar" className="navbar" >
    
    <ul>
        <li>
            <h2>Sojao Store</h2>
        </li>
        <ul class="rightmenu">
            <li><Link to="/"> Home </Link> </li>
            <li><Link to="/cart"> Cart </Link>{cartquantity}  </li>
            <li><Link to="/products"> Products </Link>s</li>
            
        </ul>
    </ul>

</div>
)
}

export default navbar