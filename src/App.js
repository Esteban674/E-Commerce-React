import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="container">
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:category"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
