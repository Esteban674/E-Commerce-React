import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img className="logo-Nav-Bar" src="images/e-commerce-logo.png" alt="Logo-E-Commerce" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                  <a className="nav-link" href="#">Productos</a>
                  <a className="nav-link" href="#">Categorias</a>
                  <a className="nav-link" href="#">Locales</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
    </div>

  )
}

export default NavBar

