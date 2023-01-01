import React from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { useState } from 'react';
import { doc, addDoc, collection, getFirestore, getDoc, updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const {cart, clear, precioTotal} = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    const fecha = new Date();
    const order = {
      buyer: {name: name, phone: phone, email: email},
      items: cart.map(item => ({id: item.id, title: item.name, price: item.price})),
      total: precioTotal(),
      orderDate: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}"  "${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    }

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({id}) => {
      setOrderId(id);
    });

    cart.forEach(product => {
      let registro = doc(db, 'products', product.id)
      getDoc(registro).then((reg) => {
        if(reg.exists()){
          updateDoc(registro, {stock: (reg.data().stock - product.quantity) })
        }
      })
    })
    clear();
  }

  return (
    <div className="continer">
      { !orderId? 
      <div className="row my-5">
        <div className="col-md-6 my-2 pe-5 ps-5">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre"
              onInput={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input type="text" className="form-control" id="phone" placeholder="Ingrese su número de teléfono"
              onInput={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su e-mail"
              onInput={(e) => setEmail(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Precio</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
                {cart.map(product => (
                  <tr key={product.id}>
                    <td className="align-middle text-center"><img src={product.image.miniFront} alt={product.image.miniFront}/></td>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle text-center">{product.quantity}</td>
                    <td className="align-middle text-center">$ {product.quantity * product.price}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-end"><b>Total a Pagar</b></td>
                  <td className="text-center"><b>$ {precioTotal()}</b></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      :
      <div className="row my-4 justify-content-center">
          <div className="col-md-12 align-middle text-center m-3">
            {orderId && <div className="alert alert-success" role="alert">Orden generada: <b>{orderId}</b></div>}
          </div>
          <Link to="/" className="col-md-2 btn btn-primary align-self-center text-center m-3 mb-2">Go Home</Link>
      </div>}
    </div>
  )
}

export default Checkout