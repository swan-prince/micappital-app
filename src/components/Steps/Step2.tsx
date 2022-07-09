import React, { FC } from 'react'

import QyaSvg from 'assets/img/qya.svg'

interface Props {
  goNextStep: () => void;
}

const Step2: FC<Props> = (props) => {

  const { goNextStep } = props

  return (
    <div className='m-container'>
      <div className="step-header">
        <div className="header-img-wrapper">
          <img src={QyaSvg} alt="" className='w-100' />
        </div>
        <h1>
          Estamos regulados por la CNMV
        </h1>
        <p>
          Por lo tanto, tenemos que hacerte una serie de preguntas para conocer tu perfil inversor
        </p>
      </div>

      <button className="btn btn--sticky" onClick={goNextStep}>
        <div>
          Adelante  &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btn btn--sticky btn--sticky-mirror btnPaso1Continuar' onClick={goNextStep}>
        <div>
          Adelante  &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
    </div>
  )
}

export default Step2
