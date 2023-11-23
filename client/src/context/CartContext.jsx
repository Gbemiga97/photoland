import { createContext, useContext, useState } from "react";


const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)
  
  
  const contextValue = {
    isOpen,
    setIsOpen
  }
  return (
    <CartContext.Provider value={contextValue}>
     {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;
