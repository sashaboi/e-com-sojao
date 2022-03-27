import React from 'react'
import axios from 'axios';

import data from './data.json'
import { useState } from 'react';
const Login = () => {
  const [ loginstatus , setloginstatus] = useState("none")
  console.log(data);
  const clickHandler = () =>{
    console.log('button click');
    axios.post('/api/auth/login',data)
    .then((response)=>{
      console.log('login successful!',response.data.encodedToken);
      localStorage.setItem('token', response.data.encodedToken);
      setloginstatus("block")
    },
    (error)=>{
      console.log(error);
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <button  onClick={clickHandler}>Login Default User</button>
      <h3 style={{display:loginstatus}} >Login Successful! token stored in localStorage  </h3>
    </div>
  )
}

export default Login