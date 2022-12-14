import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, 'products', id);
    getDoc(product).then((snapshot) => {
      if(snapshot.exists()){
        setProduct({id: snapshot.id, ...snapshot.data()});
        setLoading(false);
      }
    });
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