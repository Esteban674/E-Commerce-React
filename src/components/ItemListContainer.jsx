import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { customFetch } from '../utils/customFetch'
import products from '../utils/products.json'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    setLoading(true);
    customFetch(products)
      .then(result => { 
        const products = ( category? result.filter(product => product.category === category): result);
        setListProducts(products);
        setLoading(false);
      })
  }, [category]);

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