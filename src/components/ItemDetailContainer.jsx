import React, { useEffect, useState } from 'react'
import { customFetch } from '../utils/customFetch';
import products from '../utils/products.json'
import ItemDetail from './ItemDetail';
import Loader from './Loader'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(products)
      .then(result => { 
        setLoading(false);
        const product = result.find(item => item.id === 1);
        setProduct(product);
      })
  }, []);

  return (
    <div className="container">
      {
        loading ?
        <Loader />:
        <ItemDetail product={product}/>
      }  
    </div>
  )
}

export default ItemDetailContainer