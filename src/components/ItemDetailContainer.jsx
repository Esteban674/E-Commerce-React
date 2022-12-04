import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import products from '../utils/products.json'
import ItemDetail from './ItemDetail';
import Loader from './Loader'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    customFetch(products)
      .then(result => { 
        setLoading(false);
        const product = result.find(item => item.id === parseInt(id));
        setProduct(product);
      })
  }, [id]);

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