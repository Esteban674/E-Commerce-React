import React from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, cartTotal, removeItem, clear, precioTotal} = useContext(CartContext);

  if(cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-md-12 text-center">
            <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
            <Link to={"/"} className="btn btn-primary">Volver al Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-10">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="text-end">
                  <Link onClick={clear} className="btn btn-warning">Vaciar Carrito</Link>
                </th>
              </tr>
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
                    <td className="align-middle text-end"><Link onClick={() => removeItem(product.id)} title="Eliminar Producto">
                      <img src="/images/trash3.svg" alt="Trash" width="28px"/>
                    </Link></td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-end"><b>Total a Pagar</b></td>
                  <td className="text-center"><b>$ {precioTotal()}</b></td>
                  <td className="text-end"><Link to="/checkout" className="btn btn-primary">Finalizar Compra</Link></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart