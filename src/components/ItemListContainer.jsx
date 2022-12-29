import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { customFetch } from '../utils/customFetch'
// import products from '../utils/products.json'
import ItemList from './ItemList'
import Loader from './Loader'
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   customFetch(products)
  //     .then(result => { 
  //       const products = ( category? result.filter(product => product.category === category): result);
  //       setListProducts(products);
  //       setLoading(false);
  //     })
  // }, [category]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const productsFilter = category? query(productsCollection, where("category", "==", category)): productsCollection;
    getDocs(productsFilter).then((snapshot) => {
      setListProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
    setLoading(false);

  },[category]);

  //proceso para cargar productos en nuestra coleccion
  // useEffect(() => {
  //   const db = getFirestore();
  //   const productsCollection = collection(db, 'products');
  //   products.forEach(product => {
  //     addDoc(productsCollection, product);
  //   })

  // },[])

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