import React from 'react'

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './page-utils/products.css'
import Card from './components/Card';

import { v4 as uuidv4 } from 'uuid';
import {useCart} from '../cartcontext'
export default function Products()  {
  const {state,dispatch} = useCart();
  const [products,setproduct] = useState([])
  const [loading,setloading] =useState('block')
  useEffect(() => {
    axios.get("/api/products").then((response) => {
        setloading('none')
        setproduct(response.data.products);
    });},[])
  
  return (
    <div>Products
      <h3 style={{display : loading}} >Loading</h3>
        {products.length && products.map((obj) => <li>{obj.title}<button onClick={()=>{dispatch({type:"addtocart",payload:obj})}} >add to cart</button></li>)}
        Cart
       
        {state.length && state.map((obj) => <li>{obj.title} {obj.count} </li>)}
        <button onClick={()=>{dispatch({type:"clearcart"})}} >clear cart</button>
    </div>
  )
}

