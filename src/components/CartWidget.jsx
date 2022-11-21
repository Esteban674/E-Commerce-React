import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <button type="button" className="btn btn-info position-relative">
        <img src="images/cart3.svg" alt="icono carrito" width="24px"/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </button>
    </div>
  )
}

export default CartWidget