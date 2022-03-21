import { useContext , createContext } from "react";
import { Children } from "react/cjs/react.production.min";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    return(
        <CartContext.Provider value={{}}>
        {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {useCart,CartProvider}