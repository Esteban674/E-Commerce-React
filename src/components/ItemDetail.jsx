import React, { useContext, useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext';
import ItemSpecs from './ItemSpecs';

const ItemDetail = ({product}) => {
  const {addItem} = useContext(CartContext);
  const [productStock, setProductStock] = useState(0);
  const [frontImg, setFrontImg] = useState(true);
  const [rearImg, setRearImg] = useState(false);
  const [sideImg, setSideImg] = useState(false);

  const onAdd = (quantity) => {
    setProductStock(productStock - quantity);
    addItem(product, quantity);
  }

  const activarImagen = (tipo) => {
    switch(tipo){
      case 'front': 
        setFrontImg(true);
        setRearImg(false);
        setSideImg(false);
        break;
      case 'rear': 
        setFrontImg(false);
        setRearImg(true);
        setSideImg(false);
        break;
      case 'side':
        setFrontImg(false);
        setRearImg(false);
        setSideImg(true);
        break;
      default: break;
    }
  }

  useEffect(() => {
    setProductStock(product.stock)
  }, [product])
  

  return (
    <div className="text-center animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        <div className="col-md-5 align-self-center p-3 animate__animated animate__fadeIn">
          {frontImg && <img src={product.image.front} alt={product.name} className="img-fluid img-principal"/>}
          {rearImg && <img src={product.image.rear} alt={product.name} className="img-fluid img-principal"/>}
          {sideImg && <img src={product.image.side} alt={product.name} className="img-fluid img-principal"/>}
        </div>
        <div className="col-md-1 align-self-center">
          <img src={product.image.miniFront} alt={product.name} onClick={ () => activarImagen('front')} className="py-1 my-3 mx-3 img-secundaria"/>
          <img src={product.image.miniRear} alt={product.name} onClick={ () => activarImagen('rear')} className="py-1 my-3 mx-3 img-secundaria"/>
          <img src={product.image.miniSide} alt={product.name} onClick={ () => activarImagen('side')} className="py-1 my-3 mx-3 img-secundaria"/>
        </div>
        <div className="col-md-3 offset-md-1 align-self-center">
          <h2>{product.name}</h2>
          <h5>${product.price}</h5>
          <ItemCount initial={product.initial} stock={product.stock} onAdd={onAdd}/>
        </div>
      </div>
      <div className="row">
        <ItemSpecs product={product}/>
      </div>
    </div>
  )
}
export default ItemDetail