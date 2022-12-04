import React from 'react'

const Item = ({product}) => {

  const {image, name, price} = product;

  return (
    <div className="card d-flex justify-content-center m-2" style={{width: '18rem'}}>
      <img src={image.card} className="card-img-top p-4" alt={name}/>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center">${price}</p>
      </div>
      <button className="btn btn-primary m-2">Ver Detalle</button>
    </div>
  )
}

export default Item