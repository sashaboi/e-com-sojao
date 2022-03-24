import { useContext , createContext } from "react";
import { Children } from "react";
import { useState,useEffect,useReducer } from "react";
import axios from "axios";
import { reducerfunc } from "./reducerfunc";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    

    

    

    const [state,dispatch]=useReducer(reducerfunc,[]);
    const reducer = (acc,val) =>{
        acc = acc + val.count
        console.log(acc);
    }
    const cartquantity = state.reduce(reducer,0)
        return(
            <CartContext.Provider value={{state ,dispatch,cartquantity}}>
            {children}
            </CartContext.Provider>
        )
}

const useCart = () => useContext(CartContext);

export {useCart,CartProvider}