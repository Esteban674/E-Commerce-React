import React, { useEffect, useState } from 'react'
import { customFetch } from '../utils/customFetch';
import products from '../utils/products.json'
import ItemDetail from './ItemDetail';
import Loader from './Loader'

const ItemDetailContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(products)
      .then(result => { 
        setLoading(false);
        setListProducts(result);
      })
  }, []);

  return (
    <div className="container">
      {
        loading ?
        <Loader />:
        <ItemDetail listProducts={listProducts}/>
      }  
    </div>
  )
}

export default ItemDetailContainer