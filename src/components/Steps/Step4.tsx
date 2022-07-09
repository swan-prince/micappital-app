import React, { FC } from 'react'

import HelpSvg from 'assets/img/help.svg'

interface Props {
  goNextStep: () => void;
}

const Step4: FC<Props> = (props) => {

  const { goNextStep } = props

  return (
    <div className='m-container'>
      <div className="step-header">
        <div className="header-img-wrapper">
          <img src='https://micappital.com/assets/img/Iconos-05.jpg' alt="" className='w-50' />
        </div>
        <h1>
          ¡Tu cuenta y tu cartera se han creado con éxito!
        </h1>
        <p>
          Para completar el proceso, acceder a tu cartera y a tu zona privada solo te falta validar tu tarjeta, no haremos ningún cargo.
          <br /><br />
          Puedes usar una tarjeta de cualquiera de tus bancos, no tiene porque ser del banco desde el que vas a invertir.
        </p>
      </div>

      <button className="btn btn--sticky" onClick={goNextStep}>
        <div>
          Validar tarjeta
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btn btn--sticky btn--sticky-mirror btnPaso1Continuar' onClick={goNextStep}>
        <div>
          Validar tarjeta
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
    </div>
  )
}

export default Step4
