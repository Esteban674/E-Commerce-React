import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-warning text-center" role="alert">
            <h2>{greeting}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer