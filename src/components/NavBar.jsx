import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/"><img className="logo-Nav-Bar" src="images/e-commerce-logo.png" alt="Logo-E-Commerce" /></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/category/smartphones">Smartphones</NavLink>
                  <NavLink className="nav-link" to="/category/tablets">Tablets</NavLink>
                  {/* <NavLink className="nav-link" to="/locales">Locales</NavLink> */}
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

