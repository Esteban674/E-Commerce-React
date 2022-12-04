import './App.css';
import React from 'react'
import Principal from './components/Principal';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a E-Commerce!"}/>
      <Principal/>
      <Footer/>
    </div>
  )
}

export default App;
