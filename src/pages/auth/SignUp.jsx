import React from 'react'
import newuser from './newuser.json'
import axios from 'axios';
import { useState } from 'react';
const SignUp = () => {
  
  console.log(newuser);
  const [ email, setemail] = useState("")
  const [ password, setpassword] = useState("")

  const jsondata = {
    "email": email,
    "password": password,
    "data1": "password",
    "data2": "password"
  }

  const clickHandler = () =>{
    console.log('button click');
    axios.post('/api/auth/signup',jsondata)
    .then((response)=>{
      console.log('signup successful!',response);
      

    },
    (error)=>{
      console.log('error hua',error);
    })
  }
  
  return (
    <div>
      <h1>Signup</h1>
      <input type="email" onChange={(e)=>setemail(e.target.value)} name="" id="email" />
      <br/>
      <input type="password" onChange={(e)=>setpassword(e.target.value)} name="" id="pass" />
      <br/>
      <button onClick={clickHandler} >signup user : {jsondata.email} </button>
    </div>
  )
}

export default SignUp