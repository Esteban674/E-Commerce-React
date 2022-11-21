import './App.css';
import React from 'react'
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a E-Commerce!"}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
