import React from 'react'

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './page-utils/products.css'
import Card from './components/Card';


export default function Products()  {
const [products,setproduct] = useState([])

useEffect(() => {
    axios.get("/api/products").then((response) => {
        
        setproduct(response.data.products);
      });
    
    
},[])

  
  return (
    <div>Products
        {products.length && products.map((obj) => <li> <Card  title = {products.title}/> </li>)}

    </div>
  )
}

 