import React from 'react'
import {useCart} from '../cartcontext'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const cart = () => {
  // const {state,dispatch} = useCart();
  // var total = 0
  // state.map((obj)=>{total = total + obj.price})
  const [ loginstate , setloginstate] = useState('none')
  const [ localcart , setlocalcart ] =useState([])
  useEffect(()=>{
    console.log('use effect running');
    var token = localStorage.getItem('token');
    token = '"'+token+'"'
    const header = {
    authorization: token
    
    }
    console.log(token)
    axios.get('/api/user/cart',{headers : header})
    .then((response)=>{
      console.log(response.data.cart);
      setlocalcart(response.data.cart)
    },
    (error)=>{
      console.log(error);
      setloginstate("block")
    })
  },[]);
  return (
    <div>Cart
      <h1 style={{display:loginstate}} >You are not logged in,there is an error !</h1>
      {localcart.length && localcart.map((obj) => <li>{obj.title} {obj.qty} </li>)}
    </div>
  )
}

export default cart