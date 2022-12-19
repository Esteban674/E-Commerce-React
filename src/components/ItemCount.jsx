import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial);
  const [productStock, setProductStock] = useState(stock);
  const [agregado, setAgregado] = useState(false);

  const increase = () => count < productStock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

  const addToCart = (quantity) => {
    if (count <= productStock){
      setCount(initial);
      setProductStock(productStock - quantity);
      setAgregado(true);
      onAdd(quantity);
    }   
  }

  useEffect(() => {
    setProductStock(stock);
  },[stock]);

  return (
      <div className="row mb-2">
        <div className="col mb-2 text-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-danger" onClick={decrease}>-</button>
            <button type="button" className="btn btn-outline-primary">{ count }</button>
            <button type="button" className="btn btn-success" onClick={increase}>+</button>
          </div>
        </div>
      
        <div className="col-12 text-center">
          {agregado ? <Link to={"/cart"} className="btn btn-warning">Terminar Compra</Link>: 
          <button type="button" className="btn btn-warning"onClick={() => addToCart(count)}>Agregar al carrito</button>}
        </div>
      </div>
  )
}

export default ItemCount