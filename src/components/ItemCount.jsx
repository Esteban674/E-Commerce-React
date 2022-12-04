import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);

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
          <button type="button" className="btn btn-warning"onClick={onAdd}>Agregar al carrito</button>
        </div>
      </div>
  )
}

export default ItemCount