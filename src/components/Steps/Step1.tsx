import React, { FC } from 'react'

import HelpSvg from 'assets/img/help.svg'

interface Props {
  goNextStep: () => void;
}

const Step1: FC<Props> = (props) => {

  const { goNextStep } = props

  return (
    <div className='m-container'>
      <div className="step-header">
        <div className="header-img-wrapper">
          <img src={HelpSvg} alt="" className='w-100' />
        </div>
        <h1>
          Te ayudamos a invertir sin moverte de tu banco.
        </h1>
        <p>
          Sin tocar tu dinero y solo cobramos si obtienes rentabilidad
        </p>
      </div>

      <button className="btn btn--sticky" onClick={goNextStep}>
        <div>
          Quiero probarlo &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btn btn--sticky btn--sticky-mirror btnPaso1Continuar' onClick={goNextStep}>
        <div>
          Quiero probarlo &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
    </div>
  )
}

export default Step1
