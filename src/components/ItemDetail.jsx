import React, { useContext, useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext';

const ItemDetail = ({product}) => {
  const {addItem} = useContext(CartContext);
  const [productStock, setProductStock] = useState(0);

  const onAdd = (quantity) => {
    setProductStock(productStock - quantity);
    addItem(product, quantity);
  }

  useEffect(() => {
    setProductStock(product.stock)
  }, [product])
  

  return (
    <div className="row">
      <div className="col-md-4 offset-md-2">
        <img src={product.image.front} alt={product.name} className="img-fluid"/>
      </div>
      <div className="col-md-4 text-center align-self-center">
        <h1>{product.name}</h1>
        <h5>${product.price}</h5>
        <ItemCount initial={product.initial} stock={product.stock} onAdd={onAdd}/>
      </div>
    </div>
  )
}
export default ItemDetail