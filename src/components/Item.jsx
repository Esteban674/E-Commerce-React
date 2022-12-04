import React from 'react'
import ItemCount from './ItemCount';

const Item = ({product}) => {

  const {image, name, price} = product;

  return (
    <div className="card d-flex justify-content-center m-2" style={{width: '18rem'}}>
      <img src={image.card} className="card-img-top p-4" alt={name}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
      </div>
      <ItemCount initial={1} stock={10} onAdd={ (() => {})}/>
      <button className="btn btn-primary m-2">Ver Detalle</button>
    </div>
  )
}

export default Item