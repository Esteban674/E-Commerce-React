import React, { useEffect, useState } from 'react'
import { customFetch } from '../utils/customFetch'
import products from '../utils/products.json'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {

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
        <ItemList listProducts={listProducts}/>
      }  
    </div>
  )
}

export default ItemListContainer