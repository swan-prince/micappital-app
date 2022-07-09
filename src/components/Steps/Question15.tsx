import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question15: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const [password, setPassword] = useState('') 

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        Elige tu contraseña de acceso
        </h1>
      </div>
      <div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setPassword(e.target.value)} />
            <label className='form-field__label'>Contraseña</label>
          </div>
        </div>      
      </div>
      <button
        className='btn btn--sticky btnInputContinuar'
        disabled={password === ''}
        onClick={() => handleSelect(password)}
      >
        <div>
          Continuar&nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button
         onClick={() => handleSelect(password)}
        className='btn btn--sticky btn--sticky-mirror btnInputContinuar'
        disabled={password === ''}
      >
        <div>
          Continuar &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btnAtras btn' onClick={handlePrev}>
        <div>
          <i className='fa fa-arrow-left'></i>
        </div>
      </button>
    </div>
  )
}

export default Question15
