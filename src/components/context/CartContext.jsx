import React, {createContext, useState} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some(product => product.id === id);
  }

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      let position = cart.findIndex(prod => prod.id === product.id);
      cart[position].quantity += quantity;
      setCart([...cart]);
    }else{
      setCart([...cart, {...product, quantity:quantity}]);
    }
  }

  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id);
    setCart([...products]);
  }

  const clear = () => {
    setCart([]);
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0);
  }

  const precioTotal = () => {
    return cart.reduce((acc, item) => acc += item.quantity * item.price, 0);
  }

  return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, precioTotal}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;