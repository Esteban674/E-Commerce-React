import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const productsFilter = category? query(productsCollection, where("category", "==", category)): productsCollection;
    getDocs(productsFilter).then((snapshot) => {
      setListProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
    setLoading(false);

  },[category]);

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