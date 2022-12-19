import React, {createContext} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const saludar = () => {
    console.log('Hola');
  }

  return(
    <CartContext.Provider value={{saludar}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;