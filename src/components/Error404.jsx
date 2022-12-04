import React from 'react'

const Error404 = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Página no encontrada.</p>
                <p className="lead">
                    La página que esta buscando no existe.
                  </p>
                <a href="index.html" className="btn btn-primary">Go Home</a>
            </div>
        </div>
    </div>
  )
}

export default Error404