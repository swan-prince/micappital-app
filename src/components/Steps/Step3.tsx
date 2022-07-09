import React, { FC } from 'react'

import HelpSvg from 'assets/img/help.svg'

interface Props {
  goNextStep: () => void;
}

const Step3: FC<Props> = (props) => {

  const { goNextStep } = props

  return (
    <div className='m-container'>
      <div className="step-header">
        <div className="header-img-wrapper">
          <img src='https://media.giphy.com/media/g9582DNuQppxC/giphy.gif' alt="" className='w-100' />
        </div>
        <h1>
          ¡Enhorabuena, estás a un paso de ser miembro de Micappital!
        </h1>
        <p>
          Nuestros algorítmos van a buscar entre más de 14.000 fondos para construir la cartera de inversión más rentable según tu perfil y sin moverte de tu banco.
        </p>
      </div>

      <button className="btn btn--sticky" onClick={goNextStep}>
        <div>
          Construir cartera de inversión  &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btn btn--sticky btn--sticky-mirror btnPaso1Continuar' onClick={goNextStep}>
        <div>
          Construir cartera de inversión  &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
    </div>
  )
}

export default Step3
