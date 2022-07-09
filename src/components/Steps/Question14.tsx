import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question14: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  return (
    <div className='wide-container'>
      <div className="step-header">
        <h1>
          Elige el plan que se adapte a ti.
        </h1>
      </div>
      <div className="row ventajarow">
        <div className="col-lg-4 mt-4">
          <div className="card customcard2">
            <div className="card-header p-0 colorpreciogreen btnSegundaTarjeta nobottomborder">
              <h5 className='card-title titleprecio'>
                A medida
                <span className='callspan'>
                  0€
                  <span className='custompreciosubtitlewhite'>/mes</span>
                </span>
              </h5>
              <button className='btnwhite' onClick={() => handleSelect('0')}>
                <div>
                  Seleccionar plan
                  <i className="fa fa-arrow-right"></i>
                </div>
              </button>
              <h6 className='custompreciosubtitlewhite boldtext'>
                Para inversiones menores a 1.000€ somos gratuitos.
              </h6>
            </div>

            <div className="card-body p-0 contenidoSegundaTarjeta colorpreciogreen roundedBorderTarjeta">
              <div className="row ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check blancotick"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhite'>
                    Calculamos tu perfil de riesgo y asset allocation recomendado
                  </span>
                </div>
              </div>

              <div className="row  mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check blancotick"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhite'>
                    Buscamos los mejores fondos para ti en tu banco
                  </span>
                </div>
              </div>

              <div className="row  mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check blancotick"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhite'>
                    Supervisamos diariamente tu inversión y te recomendamos cambios cuando sea necesario
                  </span>
                </div>
              </div>

              <div className="row  mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check blancotick"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhite'>
                    Mensualmente te enviaremos los detalles de tu plan
                  </span>
                </div>
              </div>

              <div className="row  mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check blancotick"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhite'>
                    Acceso a la zona de cliente para que puedas controlar tu inversión en todo momento
                  </span>
                </div>
              </div>

              <div className="row textoprecio mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-times blancotickdesactivado"></i>
                </div>
                <div className="col-lg-10">
                  <span className='custompreciotextwhitedesactivado'>
                    Skype personal con tu asesor
                  </span>
                </div>
              </div>

              <p className="custompreciotextwhite mt-5 ventajarow boldtext">
                El plan que seleccionan el 90% de los clientes. Servicio completo
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4 movilmargin">
          <div className="card customcard1">
            <div className="card-header p-0 colorpreciowhite btnTerceraTarjeta nobottomborder">
              <h5 className="card-title titleprecio">Ampliado<span className="callspan">20€<span className="custompreciosubtitle">/mes</span></span></h5>
              <button className="btn" onClick={() => handleSelect('20')}>
                <div>Seleccionar plan <i className="fa fa-arrow-right"></i></div>
              </button>
              <h6 className="custompreciosubtitle boldtext">TODOS los meses, ganes o no.</h6>
            </div>
            <div className="card-body p-0 contenidoTerceraTarjeta colorblanco roundedBorderTarjeta">
              <div className="row ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Calculamos tu perfil de riesgo y asset allocation recomendado</span>
                </div>
              </div>

              <div className="row  mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Buscamos los mejores fondos para ti en tu banco</span>
                </div>
              </div>

              <div className="row mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Supervisamos diariamente tu inversión y te recomendamos cambios cuando sea necesario</span>
                </div>
              </div>

              <div className="row mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Mensualmente te enviaremos los detalles de tu plan</span>
                </div>
              </div>

              <div className="row mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Acceso a la zona de cliente para que puedas controlar tu inversión en todo momento</span>
                </div>
              </div>

              <div className="row mt-3 ventajarow">
                <div className="col-lg-2">
                  <i className="fa fa-check colorgris"></i>
                </div>
                <div className="col-lg-10">
                  <span className="custompreciotext"> Skype personal con tu asesor</span>
                </div>
              </div>

              <p id="" className="custompreciotext mt-5 ventajarow boldtext">Para los que quieren un servicio parecido a banca privada</p>

            </div>
          </div>
        </div>        
      </div>

      <p className='mt-3'> 
      *Micappital cobra 2€/mes por cada 1.000€ que inviertas, solo si te hacemos ganar dinero. 
      Para inversiones superiores a 10.000€ cobramos un máximo de 20€/mes, solo si te hacemos ganar dinero. Para inversiones menores a 1.000€ somos gratuitos.
      </p>
      <button className="btnAtras btn" onClick={handlePrev}>
        <div>
          <i className="fa fa-arrow-left"></i>
        </div>
      </button>
    </div>
  )
}

export default Question14
