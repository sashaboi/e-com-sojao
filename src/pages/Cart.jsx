import React from 'react'
import {useCart} from '../cartcontext'

const cart = () => {
  const {state,dispatch} = useCart();
  console.log(state)
  const reducer = (acc,val) =>acc = acc+val.price
  const total = state.reduce(reducer,0)
  return (
    <div>cart
      {state.length && state.map((obj) => <li>{obj.title} {obj.count} </li>)}
        <button onClick={()=>{dispatch({type:"clearcart"})}} >clear cart</button>
        <h3>Cart Total : {total}</h3>
    </div>
  )
}

export default cart