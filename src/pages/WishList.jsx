import React from 'react'
import {useCart} from '../cartcontext'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const WishList = () =>{
  // const {state,dispatch} = useCart();
  // var total = 0
  // state.map((obj)=>{total = total + obj.price})
  const [ loginstate , setloginstate] = useState('none')
  const [ localwishlist , setlocalwishlist ] =useState([])
  useEffect(()=>{
    console.log('use effect running');
    var token = localStorage.getItem('token');
    token = '"'+token+'"'
    const header = {
    authorization: token
    
    }
    console.log(token)
    axios.get('/api/user/wishlist',{headers : header})
    .then((response)=>{
      console.log(response.data.wishlist);
      setlocalwishlist(response.data.wishlist)
    },
    (error)=>{
      console.log(error);
      setloginstate("block")
    })
  },[]);
  return (
    <div>Wishlist
      <h1 style={{display:loginstate}} >You are not logged in,there is an error !</h1>
      {localwishlist.length && localwishlist.map((obj) => <li>{obj.title} {obj.qty} </li>)}
    
    </div>
  )
}

export default WishList