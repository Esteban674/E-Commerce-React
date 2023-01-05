import React from 'react'

const ItemSpecs = ({product}) => {

  const {specs} = product;

  return (
    <div className="container">
      <div className="row pb-2">
        <h4 className="mt-5 mb-2">Especificaciones técnicas - {product.name} </h4>
        <div className="col">
          <div className="row py-2 mt-5 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/camera.png" alt="camera" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1 specsLeft">
              <h5 className="m-0 p-0 pt-2">Cámara principal</h5>
              <p className="m-0 p-0">{specs.camaraPrincipal}</p>
            </div>
          </div>
          <div className="row py-2 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/screen.png" alt="screen" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1">
              <h5 className="m-0 p-0 pt-2">Display</h5>
              <p className="m-0 p-0">{specs.display}</p>
            </div>
          </div>
          <div className="row py-2 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/processor.png" alt="processor" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1">
              <h5 className="m-0 p-0 pt-2">Procesador</h5>
              <p className="m-0 p-0">{specs.procesador}</p>
            </div>
          </div>
          <div className="row py-2 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/memory.png" alt="memory" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1">
              <h5 className="m-0 p-0 pt-2">Memoria RAM</h5>
              <p className="m-0 p-0">{specs.memoriaRAM}</p>
            </div>
          </div>
          <div className="row py-2 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/battery.png" alt="battery" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1">
              <h5 className="m-0 p-0 pt-2">Batería</h5>
              <p className="m-0 p-0">{specs.bateria}</p>
            </div>
          </div>
          <div className="row py-2 specs">
            <div className="col-2 offset-md-1 text-end container-icono-specs">
              <img src="/images/dimensions.png" alt="dimensions" className="icono-specs"/>
            </div>
            <div className="col-8 text-start m-0 p-0 ps-1">
              <h5 className="m-0 p-0 pt-2">Dimensiones</h5>
              <p className="m-0 p-0">{specs.dimension}</p>
            </div>
          </div>
        </div>
        <div className="col text-start">
          <table className="table">
          <thead>
    <tr>
      <th scope="col">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
      <th scope="col">&emsp;&emsp;</th>

    </tr>
  </thead>
            <tbody>
              <tr>
                <th scope="row" colSpan="1">Modelo</th>
                <td>{specs.modelo}</td>
              </tr>
              <tr>
                <th scope="row" colSpan="1">Cámara secundaria</th>
                <td>{specs.camaraSecundaria}</td>
              </tr>
              <tr>
                <th scope="row">Sistema Operativo</th>
                <td>{specs.sistemaOperativo}</td>
              </tr>
              <tr>
                <th scope="row">Tipo de SIM</th>
                <td>{specs.tipoDeSIM}</td>
              </tr>
              <tr>
                <th scope="row">Red</th>
                <td>{specs.red}</td>
              </tr>
              <tr>
                <th scope="row">Frecuencia 2G</th>
                <td>{specs.frecuencia2G}</td>
              </tr>
              <tr>
                <th scope="row">Frecuencia 3G</th>
                <td>{specs.frecuencia3G}</td>
              </tr>
              <tr>
                <th scope="row">Frecuencia 4G</th>
                <td>{specs.frecuencia4G}</td>
              </tr>
              <tr>
                <th scope="row">Memoria Interna</th>
                <td>{specs.memoriaInterna}</td>
              </tr>
              <tr>
                <th scope="row">Peso</th>
                <td>{specs.peso}</td>
              </tr>
              <tr>
                <th scope="row">NFC</th>
                <td>{specs.nfc}</td>
              </tr>
              <tr>
                <th scope="row">Sensores</th>
                <td>{specs.sensores}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ItemSpecs